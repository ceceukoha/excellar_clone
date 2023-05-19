import React from "react";
import axios from "axios";
import { useState } from "react";

const About = () => {
  const [post, setPost] = useState([]);

  const getPost = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      if (response.status === 200) {
        setPost(response.data);
      } else {
        console.log(response);
      }
      //   console.log(response);
    });
    //gets a response and u can make use of it however
  };
  const deletePost = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          console.log("item deleted");
        } else {
          console.log(response);
        }
        //   console.log(response);
      });
  };

  return (
    <div>
      <h1>Post</h1>
      {post.map((item, index) => (
        <>
          <div className="get-post">
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <button onClick={() => deletePost(item.id)}>Delete</button>
          </div>
        </>
      ))}
      <p>Comments</p>
      <button onClick={getPost}>Get Post</button>
    </div>
  );
};

export default About;
//we store in a state so it's not limited to one fx
