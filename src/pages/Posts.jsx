import { Link } from "react-router-dom"
import Post from '../components/Post'
import { useState, useEffect } from "react";
import { getPosts } from "../assets/httpReq.js";
import './css/HomeAndPosts.css'
import PageNavBtns from "../components/PageNavBtns.jsx";

export default function Posts() {
    const [postState, setPostState] = useState({posts: [], page : 1 });
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

    let prevBtnClass = 'pageNavBtn';
    let nextBtnClass = 'pageNavBtn';

    if (postState.page <= 1) {
      prevBtnClass += ' disabled';
    }
    // disable the next button when there are no more pages, you can do it like this:
    // if (postState.page >= totalNumberOfPages) {
    //   nextBtnClass += ' disabled';
    // }
    else if (postState.page > 1) {
      prevBtnClass = prevBtnClass.replace(' disabled', '');
    }

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
        if (postState.page + num <= 0) return;
        setPostState((prev)=>{
          const newPage = prev.page + num;
          return { ...prev, page: newPage }
        })
      }

    return (
        <main className="pages PostsPage" >
            
            <section id="posts" >
              
                <div className="headerItems" >
                  <h1 id='PostsHeader' className="PostsHeader" >All Posts</h1>
                  <button className="refreshBtn" onClick={refreshPosts} >RefIcon</button>
                </div>
                <div id="PostsContainer" >
                    
                    <PageNavBtns page={postState.page} changePage={changePage} prevBtnClass={prevBtnClass} nextBtnClass={nextBtnClass} />

                    {/* { error && <p>{error}fetching</p> } */}
                    {isFetching && <p >Loading Latest Updates for You..</p>}
                    {!isFetching && postState.posts.length === 0 && <p id="noMorePosts" >No Posts Available</p>}
                    {!isFetching && postState.posts.length > 0 && (<>
                        {postState.posts.map(post => (
                            <div key={post._id} className="postListItem"  >
                                <Link to={`post/${post._id}`}>
                                    <Post author={post.author} date={post.date} title={post.title} content={post.content} img={post.img} />
                                </Link>
                            </div>
                        ))}
                    </>)}

                    <PageNavBtns page={postState.page} changePage={changePage} prevBtnClass={prevBtnClass} nextBtnClass={nextBtnClass} />

                </div>
            </section>

            <section id="sideBox" >
                
            </section>
            
        </main>
    )
}