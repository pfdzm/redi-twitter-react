import { createContext, useState } from "react";
import "./App.css";

function Tweet({ children, removeTweet }) {
  const [liked, setLiked] = useState(false);
  return (
    <li>
      {children} {liked && "❤️"}
      <button onClick={() => setLiked((liked) => !liked)}>Like</button>
      <button
        onClick={() => {
          removeTweet();
        }}
        style={{ backgroundColor: "red" }}
      >
        🗑️
      </button>
    </li>
  );
}

export const movieContext = createContext();
function App() {
  const [input, setInput] = useState("");
  const [tweets, setTweets] = useState([]);
  return (
    <>
      <section>
        <textarea
          value={input}
          name=""
          id=""
          onChange={(event) => setInput(event.target.value)}
        ></textarea>
        <button
          onClick={() => {
            setTweets((prevState) => [...prevState, input]);
            setInput("");
          }}
        >
          Tweet 📨
        </button>
      </section>

      <section>
        <h2>Tweets:</h2>
        <ul>
          {tweets.map((tweet, index) => (
            <Tweet
              key={index}
              removeTweet={() => {
                setTweets((prevState) => [
                  ...prevState.slice(0, index),
                  ...prevState.slice(index + 1),
                ]);
              }}
            >
              {tweet}
            </Tweet>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
