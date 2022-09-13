import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";

const PostsList = () => {

      const [posts, setPosts] = useState();
      
            useEffect(() => {
                  axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
                        const responsePosts = res.data;
                        setPosts(responsePosts);
                  })
            }, [])
            
      return (
            <>
            <h1>Posts List </h1>
            { posts ? (
                  <div>
                  
                  { posts.slice(0,20).map((post) => {
                        return (
                              <PostCard key={post.id} post={post}/>
                        )
                  })}   
            </div>
            ) : (
                  <h1>Oops! No posts to show.</h1>
            )}
            </>
      )
}

export default PostsList;

