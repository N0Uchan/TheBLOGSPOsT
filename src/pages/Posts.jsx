import { Link } from "react-router-dom"
import Post from '../components/Post'
import { useState, useEffect } from "react";
import { getPosts } from "../assets/httpReq.js";
import './css/HomeAndPosts.css'

export default function Posts() {
    const [postState, setPostState] = useState({posts: [], page : 2 });
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();
    let BtnClass = 'pageNavBtn';

    useEffect(() => {
        fetchPosts();
      }, [postState.page]);
      async function fetchPosts() {
        setIsFetching(true)
    
        try {
          const resData = await getPosts(postState.page);
          setPostState((prev)=>{
            return { ...prev, posts: resData }
          })
                   
          setError(null);
        } catch (err) {
          setError(err.message);
        }
        setIsFetching(false);
      }
    
      function refreshPosts(){
        fetchPosts();
      }

      function changePage(num){
        setPostState((prev)=>{
          const newPage = prev.page + num;
          if (newPage === 0) {
            BtnClass+=' disabled';
          }else if (BtnClass >0) {
            BtnClass = BtnClass.replace(' disabled', '');
          }
          return { ...prev, page: newPage }
        })
      }

    return (
        <main className="pages PostsPage" >
            
            <section id="posts" >
              <h1>All Posts</h1>
                <div id="PostsContainer" >
                    {/* { error && <p>{error}fetching</p> } */}
                    {isFetching && <p>Loading Latest Updates for You..</p>}
                    {!isFetching && postState.posts.length === 0 && <p>No Posts Available</p>}
                    {!isFetching && postState.posts.length > 0 && (<>
                        {postState.posts.map(post => (
                            <div key={post._id} className="postListItem"  >
                                <Link to={`posts/${post._id}`}>
                                    <Post author={post.author} date={post.date} title={post.title} content={post.content} img={post.img} />
                                </Link>
                            </div>
                        ))}
                    </>)}
                </div>
                <section id="pageNav">
                  <button className={BtnClass} onClick={()=>changePage(-1)} >{'<'}</button>
                  <p>{postState.page}</p>
                  <button onClick={()=>changePage(1)} >{'>'}</button>
                </section>
            </section>

            <section id="sideBox" >
                
            </section>
            
        </main>
    )
}