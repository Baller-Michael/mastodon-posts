import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const getUserPosts = async (userId) => {
    const response = await fetch(
      `https://mastodon.world/api/v1/accounts/${userId}/statuses`,
      {
        headers: {
          Authorization: `Bearer rMF_xZ6EmkT6MNvsjI7-TsvupzNoJuDd5G5utm8dSFk`,
        },
      }
    );
    const posts = await response.json();
    setPosts(posts);
  };

  const getUserId = async () => {
    const response = await fetch(
      `https://mastodon.world/api/v1/accounts/search?q=MichaelBaller`,
      {
        headers: {
          Authorization: `Bearer rMF_xZ6EmkT6MNvsjI7-TsvupzNoJuDd5G5utm8dSFk`,
        },
      }
    );
    const user = await response.json();
    getUserPosts(user && user[0].id);
  };

  useEffect(() => {
    getUserId();
  }, []);

  return (
    <div className="App">
      {posts.length > 0 &&
        posts.map(({ account, content }) => {
          return (
            <div className="card">
              <h1>{account.username}</h1>
              <img src={account.avatar} alt={account.username} />
              <p>{content}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
