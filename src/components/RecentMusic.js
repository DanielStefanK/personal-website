import * as React from "react";

const RecentMusic = () => {
  const [recentTracks, setRecentTracks] = React.useState();
  const [isLoading, setIsLoading] = React.useState();

  const [mostRecent, setMostRecent] = React.useState();

  const loadMusic = async () => {
    try {
      setIsLoading(true);

      const resp = await fetch(
        "https://lastfm-proxy.daniel-stefan.dev/api/recent/daniel_stefan"
      );
      const data = await resp.json();

      const mapped = data.recenttracks.track.map((t) => ({
        artist: t.artist["#text"],
        name: t.name,
        isPlaying: !!t["@attr"]?.nowplaying,
        album: t.album["#text"],
        url: t.url,
        images: t.image,
      }));

      const [current, ...recent] = mapped;
      setMostRecent(current);
      setRecentTracks(recent);
      setIsLoading(false);
    } catch (e) {}
  };

  const getImage = (t, size = "medium") => {
    const optimal = t.images
      .filter((img) => img.size === size)
      .map((i) => i["#text"]);
    return optimal.length ? optimal[0] : t.images[0]["#text"];
  };

  React.useEffect(() => {
    loadMusic();
    const intervalId = setInterval(() => {
      loadMusic();
    }, 1000 * 30);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {mostRecent && (
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img
                    src={getImage(mostRecent, "large")}
                    alt="Album Cover Art"
                  />
                </figure>
              </div>
              <div
                className="media-content"
                style={{
                  display: "flex",
                  minHeight: 128,
                  justifyContent: "center",
                  flexFlow: "column",
                }}
              >
                <div>
                  <p className="title is-4">
                    {mostRecent.name}
                    {mostRecent.isPlaying && (
                      <img
                        style={{ marginLeft: "1rem" }}
                        src={"/now-playing.gif"}
                      />
                    )}
                  </p>
                  <p className="subtitle is-6">
                    {mostRecent.artist} ({mostRecent.album})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentMusic;
