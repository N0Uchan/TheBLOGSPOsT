import { Link } from "react-router-dom";
import Post from '../components/Post'
import { useContext } from "react";
import { userDetailsContext } from "../components/userDetailsContextProvider.jsx";

export default function UserPosts() { 
    
    const userDetails = useContext(userDetailsContext);
    const userPosts = userDetails.userPosts;

    return (
        <main className="pages PostsPage" >
            
            <section id="posts" >
              
                <div className="headerItems" >
                  <h1 id='PostsHeader' className="PostsHeader" >User Posts</h1>
                </div>
                <div id="PostsContainer" >                
                    {userPosts.length === 0 && <p id="noMorePosts" >No Posts Available.</p>}
                    {userPosts.length > 0 && (<>
                        {userPosts.map(post => (
                            <div key={post._id} className="postListItem"  >
                                <Link to={`post/${post._id}`}>
                                    <Post author={post.author} date={post.date} title={post.title} content={post.content} img={post.img} />
                                </Link>
                            </div>
                        ))}
                    </>)}                
                </div>
            </section>

            <section id="sideBox" >
                
            </section>
            
        </main>
    )
}