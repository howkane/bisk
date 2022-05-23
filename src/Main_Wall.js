import React, { useState, useEffect } from "react";
import TweetBox from "./Main_Input";
import Post from "./Post";
import "./Main_Wall.css";
import db from "./firebase";
import Main_Input from "./Main_Input";


function Main_Wall() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

    return (
        <div className="main_wall_header"> 
            <div>
                <h2>The Wall</h2>
            </div>
            <Main_Input />
            {posts.map((post) => (
              <><Post
                key={post.text}
                text={post.text} />
            </>
        ))}
        </div>
    )
  }
export default Main_Wall;
