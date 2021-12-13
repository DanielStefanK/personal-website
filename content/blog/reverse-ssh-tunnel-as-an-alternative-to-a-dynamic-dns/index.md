---
title: Reverse SSH tunnel as an alternative to a dynamic DNS
date: 2021-12-13T12:53:17.576Z
update: ""
description: Ever had the problem that you want to expose a service to the
  public from you home network but you had some obstacle between you and the
  internet? I'll show you how to fix that.
featureImg: tunnel.webp
---
I had a service running at home on a raspberry pi and wanted to access this service from outside my network.
After some research I found out that I only had a DS-Lite connection and
no static IPv4 address was given to me. Furthermore I don't really wanted to open a port on my local router.
That's when I found out about a reverse SSH tunnel that would route TCP packets
from a server that had a public static ip address to my local raspberry pi.

# What do you need

- A local server (e.g. a raspberry pi) that you want to connect to from outside your network
  - has to be connected to the internet
- A remote server (we'll call this the gateway)
  - running some kind of linux
  - a static ip or some setup that keeps a dynDNS up to date
  - port 22 (standard SSH port) open to the internet (you might want to change the port)

# How does it work?
In simple terms, the local server independently establishes a connection
to another server (gateway). This connection (the tunnel) is maintained.
The gateway can now contact the local server itself via the tunnel, or a
third computer (e.g. Putty on a Windows PC) accesses the local server
via gateway pi and through the tunnel.

A reverse SSH tunnel makes sense wherever a computer cannot be accessed
from outside due to a firewall, network address translation or other
obstacles. The tunnel works as long as the remote computer can access
the Internet via the network it is connected to. It doesn't matter
whether it's WiFi, cable or mobile.


# Step 1: Configure SSH on the gateway

To allow TCP packets to be forwarded you have to enable this setting
on the gateway. To do this you should edit the SSH config in `/etc/ssh/sshd_config`

```bash
sudo nano /etc/ssh/sshd_config
```

Then find and change or add the following lines

```
ClientAliveInterval 30
ClientAliveCountMax 99999
GatewayPorts yes
AllowTcpForwarding yes
```

The first two entries make sure that the tunnel stays connected even if
there is no connection for a short time.

`GatewayPorts yes` allows the that a connection through the gateway can be made.

`AllowTcpForwarding yes` allows for other protocols (e.g. http) to be
send through the tunnel.

If cou made the changes, save the file (`ctrl+o` in nano) and exit (`ctrl+x` in nano).
Now you have to restart the SSH deamon so the changes take affect.

```bash
sudo systemctl restart sshd
```

If this does not work, just **restart the gateway server**.


# Step 2: Create the tunnel on the local server

To open the tunnel on the local server run:

```bash
ssh -p2000 -fNC -R 10011:localhost:22 pi@dyn.IP.adresse
```

### Explaination

#### p2000 (optional)
- If the gateway ssh server is running on a differen port (here 2000)
#### f
- Send ssh to the background just before execution
#### N
- No command should be executed on the gateway server
#### C
- Compess all data going through the connection
- Useful on slow networks but introduces delay on fast networks
#### -R 13337:localhost:22
- R stands for the reverse
- 13337 the port to use on the gateway server. If a connection starts here
the connection gets forwarded to the local server
- localhost is the loopback address for the loacl server, because we want to forward the connection to this server.
- 22 is the port to which the tunnel should forward to on the local server (here SSH server).
#### pi@dyn.IP.adresse
- Log in data for the gateway server where pi is the username and dyn.IP.adresse is the address (you could use your static IP for the gateway here)

If you run the command and everything works you should get a prompt asking for
the password. Enter the password for the user you entered on the gateway (here user pi).

If it fails the problem could be that the local server does not know the
SSH key for the gateway. Try connecting to the gateway server from the local server with
`ssh pi@dyn.IP.address`. You also might have to delete `~/.ssh/known_host` on the local server.

You can now test the connection on the gateway server by running

```bash
ssh -p 13337 pi@localhost
```

then you can login to the local server through the gateway.


# Step 3: Login without password

It is pretty annoying to enter your password everytime you want to
open the runnel. It is also not possible to automate the connection, because
a password is always requiered.

Therefore we want to create a key pair to authenticate our self from the local server
on the gateway server. You might already have those keys so take a look inside the folder `~/.ssh`
and check if the file `id_rsa.pub` exits.
If not, run

```bash
ssh-keygen
```

to generate on the local server the keys and enter the data.

Now you have to copy the RSA key to the gateway server. For this run

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub dyn.IP.adresse
```

or

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub "-p 2000 pi@dyn.IP.adresse"
```

for a custom port on the local server and login to the gateway server.
Now you can test the connection like in step 2. You should not have to enter
a password if you run the command.

# Step 4: Automatic connectin on boot

For this we need to create a very small script that should run on boot.
Create a file called `tunnel.sh` and enter the following script

```bash
#!/bin/bash
/usr/bin/ssh -p2000 -fNC -R 13337:localhost:22 pi@dyn.IP.adresse
```

You also have to make this script executable with the command

```bash
sudo chmod +x tunnel.sh
```

Everything that should run automatically at startup or at regular intervals is called up via crontab.
For this purpose enter the following command

```bash
crontab -e
```

A new editor should open with all the crontabs. Scroll to the bottom
and create a new line with

```
@reboot /path/to/the/script/tunnel.sh
```

Now everything should run on boot.


# Step 5: Stabilize the connection with autossh

Especially if the local server is connected to the Internet via
mobile radio, it can happen that the connection is interrupted
briefly every now and then. (By the way, this also happens with
most DSL providers. Sometime during the night the provider resets
the connection). In this case the tunnel breaks down silently but
relentlessly. You could now write a script that continuously checks
the connection and re-establishes it if necessary. Fortunately, this
is superfluous, since autossh is an extension (actually a wrapper)
for SSH. Just use autossh instead of ssh and we have a stable system.

Use your package manage on the local server and install `autossh` like this

```bash
sudo apt-get install autossh
```

Then change the file `tunnel.sh` to

```bash code
#!/bin/bash
/usr/bin/autossh -p2000 -fNC -R 13337:localhost:22 pi@dyn.IP.adresse
```

and restart the local server.

# Step 6: Forward a Webserver and external devices

Up to this point we only send SSH through the tunnel. But our tunnel
can even do more.
Let's say we have a webserver running on port 80 on our local server
that we want to access from the gateway.
The only thing we have to do is edit our `tunnel.sh` script once again.

```bash:title=tunnel.sh
#!/bin/bash
/usr/bin/autossh -p2000 -fNC -R 8000:localhost:80 -R 13337:localhost:22 pi@dyn.IP.adresse
```

and restart the local server. Now our local webserver running on port 80
can be accessed by opening `dyn.IP.adresse:8000` in your browser.
