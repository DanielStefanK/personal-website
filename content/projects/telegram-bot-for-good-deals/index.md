---
title: Telegram Bot for good deals
date: 2020-02-10T12:58:03.850Z
update: 2022-04-12T11:58:03.868Z
description: This project was born out of the desire to get goo deals.
featureImg: kleinanzeigen.jpg
tags: []
---
This project was born out of the desire to get good deals.

You can see the sources on Github [here](https://github.com/DanielStefanK/kleinanzeigen-alert).

# What is 'Kleinanzeigen Alert'

[Ebay Kleinanzeigen](https://www.ebay-kleinanzeigen.de) is a classified advertising for germany.
Here you can search for local advertisements and try to score a good deal.
But if there is something someone is selling for cheap it is gone in a second.
For that reason I wanted to build something that would notify me if
there was a ne ad for a query i would define. That's when i stared to build
'Kleinanzeigen Alert'.

It is a small [telegram](https://telegram.org/) bot where you can save queries and
it sends you all new ads that match hat query.
It is written in [go](https://golang.org/) and used web crawling to
fetch new ads from Kleinanzeigen.

# Where can I try it

You have to have an telegram account to use it. If you have one just text '/start' to @AlertAlertAlert_bot
or click [here](https://t.me/AlertAlertAlert_bot).