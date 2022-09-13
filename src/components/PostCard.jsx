import { useLocation, Link } from "react-router-dom";

const PostCard = (props) => {
      const { post } = props;
      const { id, title, body } = post;
      let location = useLocation();
      console.log(location);
      return (
            <div style={{maxWidth: "300px", background: "lightblue", padding: "20px", margin:"20px" }}>
            <h3>{title}</h3>
            {/* <p>{body}</p> */}
            <Link to="/postpage/:id" state={post}>
            <button>Go to post</button>
            </Link>
            </div>
      )
}

export default PostCard;