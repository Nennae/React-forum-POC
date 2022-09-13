import  { useParams, useLocation, Link } from "react-router-dom";

const Post = () => {
      const location = useLocation();
      return (
            <>
            <Link to="/">
            <button>Go back</button>
            </Link>
            <div>
                  <h4>This is the Post page with post id: {location.state.id} </h4>
                  <h2>{location.state.title}</h2>
                  <p>{location.state.body}</p>
            </div>
            </>
      )
}

export default Post;