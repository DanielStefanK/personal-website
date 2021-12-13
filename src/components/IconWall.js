import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconWall = ({ icons, rows = 3 }) => {
  return (
    <>
      {Array.from({ length: rows }).map((i, idx) => (
        <div
          className="columns has-text-dark"
          key={"row-" + idx}
          style={{
            transform: "translateX(" + (idx % 2) === 1 ? "-4rem" : 0 + ")",
          }}
        >
          {icons
            .sort(() => Math.random() - 0.5)
            .map((i, idx) => (
              <div className="column" key={"column " + idx}>
                <FontAwesomeIcon size="5x" icon={i} />
              </div>
            ))}
        </div>
      ))}
    </>
  );
};

export default IconWall;
