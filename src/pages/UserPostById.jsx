import { useParams } from "react-router-dom";
import Post from "../components/Post.jsx";
import { useState, useEffect, useContext } from "react";
import { userDetailsContext } from "../components/userDetailsContextProvider.jsx";
import { deletePost } from "../assets/httpReq.js";
import { useNavigate } from "react-router-dom";

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
    console.log(postId);
    const postDeleted = await deletePost(postId, email , uid); 
    if (postDeleted.mssg==="User's post deleted successfully") {
      navigate("..");
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
          img={post.img}
          content={post.content}
        />

      <button
        onClick={() => handleDeletePost()}
      >
        Delete
      </button>
    </main>
  );
}
