import { useState } from "react";
import { Button } from "./Button";

export const Movie = ({ title, selectMovie, selected }) => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: selected ? "rebeccapurple" : undefined,
        }}
      >
        <h2 style={{ marginRight: "8px" }}>{title}</h2>
        {liked && <p>👍</p>}
        <Button
          handleClick={() => {
            console.log("clicked");
            selectMovie();
          }}
        >
          {selected ? "Remove" : "Select"}
        </Button>
      </div>
    </>
  );
};
