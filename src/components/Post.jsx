import  { useParams, useState } from "react-router-dom";

const Post = () => {
      const { id } = useParams();
      // const {postInfo, setPostInfo} = useState();
      return (
            <h4>This is the Post pages with post with id: {id}</h4>
      )
}

export default Post;