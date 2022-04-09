import * as React from "react";
import "./styles.scss";

import MainFrame from "../components/MainFrame.js";

// markup
const IndexPage = () => {
  const [images, setImages] = React.useState(
    Array.from({ length: 9 }).map((_, idx) => ({ id: idx, placeholder: true }))
  );

  const [hasError, setError] = React.useState(false);

  const fetchInsta = () => {
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((res) => {
        setImages(res);
      })
      .catch(() => {
        setError(true);
      });
  };

  React.useEffect(() => {
    fetchInsta();
  });

  return (
    <MainFrame>
      {!hasError && (
        <ul>
          {images.map((i) => (
            <li key={i.id}>{JSON.stringify(i)}</li>
          ))}
        </ul>
      )}
      {hasError && <span>Could not fetch current posts</span>}
    </MainFrame>
  );
};

export default IndexPage;
