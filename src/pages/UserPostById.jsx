import { useParams, Link } from "react-router-dom";
import Post from "../components/Post.jsx";
import { useState, useEffect, useContext } from "react";
import { userDetailsContext } from "../components/userDetailsContextProvider.jsx";
import { deletePost } from "../assets/httpReq.js";
import { useNavigate } from "react-router-dom";
import "./css/PageById.css";

export default function UserPostById() {
  const params = useParams();
  const postId = params.id;
  const userDetails = useContext(userDetailsContext);
  const email = userDetails.email;
  const userPosts = userDetails.userPosts;
  const uid = userDetails.uid;
  const post = userPosts.find((post) => post._id === postId);
  const navigate = useNavigate();

  // const [post, setPost] = useState({});
  // const [isFetching, setIsFetching] = useState(true);
  // const [error, setError] = useState();
  // useEffect(() => {
  //     fetchPosts();
  //   }, []);
  //   async function fetchPosts() {
  //     setIsFetching(true);

  //     try {
  //       const resData = await getPost(postId);
  //       setPost(resData);
  //       setError(null);
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //     setIsFetching(false);
  //   }

  async function handleDeletePost() {
    const postDeleted = await deletePost(postId, email , uid); 
    if (postDeleted.mssg==="User's post deleted successfully") {
      navigate("../posted");
      const newUserPosts = userPosts.filter((post) => post._id !== postId);
      userDetails.setUserDetails({ userPosts: newUserPosts });
    }
    console.log(postDeleted.mssg);
  }

  return (
    <main className='pages pageById'>
      
        <Post
          title={post.title}
          author={post.author}
          date={post.date}
          img64={post.img64}
          content={post.content}
        />

      <section>
        <button  id="deletePostBtn"
          onClick={() => handleDeletePost()}
        >
          Delete
        </button>
        💀💀💀

        <Link to="..">Back</Link>
      </section>

    </main>
  );
}
