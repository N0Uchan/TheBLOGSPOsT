import { Link } from "react-router-dom"
import './css/HomeAndPosts.css'
import Post from '../components/Post'
import { useState, useEffect } from "react";
import { getPosts1 } from "../assets/httpReq.js";


export default function Home() {
    const [posts1, setPosts1] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetchPosts1();
      }, []);
      async function fetchPosts1() {
        setIsFetching(true);
    
        try {
          const resData = await getPosts1();
          setPosts1(resData);          
          setError(null);
        } catch (err) {
          setError(err.message);
        }
        setIsFetching(false);
      }
    
      function refreshPosts1(){
        fetchPosts1();
      }

    return (
        <main className="pages PostsPage"  >
            <section id="posts" >
                
                <div id="PostsContainer" >
                  <div className="headerItems" >
                    <h1 id='PostsHeader'  >Latest Updates</h1>
                    <button className="refreshBtn" onClick={refreshPosts1} >RefIcon</button>
                  </div>
                  <h2>ADD UID CHECK FOR CREATE POST</h2>
                
                    {isFetching && <p>Loading Latest Updates for You..</p>}
                    {!isFetching && posts1.length === 0 && <p>No Posts Available</p>}
                    {!isFetching && posts1.length > 0 && (<>
                        {posts1.map(post => (
                            <div key={post._id} className="postListItem"  >
                                <Link to={`posts/post/${post._id}`}>
                                    <Post author={post.author} date={post.date} title={post.title} content={post.content} img={post.img} />
                                </Link>
                            </div>
                        ))}
                    </>)}
                  <Link to="posts" id="allPostsBtn" >See More Posts</Link>
                </div>
            </section>

            <section id="sideBox" >
                
            </section>
        </main>
    )
}