import { useParams , Link } from "react-router-dom"
import  Post from "../components/Post"
import { useState, useEffect } from "react";
import { getPost } from "../assets/httpReq.js";

export default function PostById() {
    const params = useParams();
    const postId = params.id;
    const [post, setPost] = useState({});
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();  
    useEffect(() => {
        fetchPosts();
      }, []);
      async function fetchPosts() {
        setIsFetching(true);
    
        try {
          const resData = await getPost(postId);
          setPost(resData);
          setError(null);
        } catch (err) {
          setError(err.message);
        }
        setIsFetching(false);
      }


    return (
        <main className="pages pageById">
            {isFetching && <p className="loadPara">Loading Latest Updates for You..</p>}
            {!isFetching && <Post title={post.title} author={post.author}  date={post.date} img={post.img} content={post.content}  /> }
            <Link to="..">Back</Link>
        </main>
    )
}