import Header from "../components/Header";
import Footer from "../components/Footer";
import  { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PostPage = () => {
      const { id } = useParams();
      const [postDetails, setPostDetails] = useState();
      const [comments, setComments] = useState();

      useEffect(() => {
                  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
                  const responsePost = res.data;
                  setPostDetails(responsePost);
            })

                  axios.get(`https://jsonplaceholder.typicode.com/comments/`).then((res) => {
                  const responseComments = res.data;
                  setComments(responseComments);
            })
            
      }, [])

      const { id: postId, title, body} = postDetails || {};

      return (
            <>
            <Header />
            <Link to="/">
            <button className="homeBtn">Go back</button>
            </Link>
            <div className="postInfo">
                  <h3>Post: {postId}</h3>
                  <h4>{title}</h4>
                  <p>{body}</p>
            </div>
            <h3 className="commentTitle">Comments:</h3>
            {comments && comments.map(comment => {
                  if(comment.postId === postId) {
                        return (
                              <div className="commentInfo">
                                 <h4>User: {comment.id}</h4>
                                    <p>{comment.email}</p>
                                    <p className="commentName">{comment.name}</p>
                                    <p>{comment.body}</p>
                              </div>
                              )       
                        }
                  })}
                  <Footer />
            </>
      )
}

export default PostPage;