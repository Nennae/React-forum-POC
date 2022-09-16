import { Link } from "react-router-dom";

const PostCard = (props) => {
      const { post } = props;
      const { title, id } = post;

      return (
            <Link style={{textDecoration: "none"}} to={`/postpage/${id}`} state={post}>
            <div className="postCard" 
            >
            <p className="postNr"># {id}</p>
            <h3>{title}</h3>
            </div>
            </Link>
      )
}

export default PostCard;