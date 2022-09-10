import { useLocation } from "react-router-dom";

const PostCard = (props) => {
      const { post } = props;
      const { id, title, body } = post;
      let location = useLocation();
      return (
            <div onClick={() => 
                  location.pathname(`postpage/${id}`)
            }>
            <h3>{title}</h3>
            <p>{body}</p>
            </div>
      )
}

export default PostCard;