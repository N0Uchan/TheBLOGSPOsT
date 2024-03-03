import { Link } from "react-router-dom"
import './css/NewPost.css'

export default function NewPost() {

    return ( 
        <main className="pages newPostPage" >
            <section id="newPostCont" >
            <h1 id="newPostHeader" > Create New Post</h1>
            <form id="newPostForm">
                
                <div className="formItmGrp" >
                    <label htmlFor="title" className="newPostLabels">Title</label>
                    <input type="text" className="inputBox" />
                </div>

                <div className="formItmGrp">
                    <label htmlFor="image" className="newPostLabels">Image</label>
                    <input type="file" className="inputBox" accept="image/*" />
                </div>

                <div className="formItmGrp" >
                    <label htmlFor="content" className="newPostLabels" >Content</label>
                    <textarea id="" rows="5" className="textAreaBox" ></textarea>
                </div>

                <div id="formSumbitBtnGrp" >
                    <button type="">Create Post</button>
                    <Link to=".." > Cancel </Link>
                </div>
                
            </form>
            
            </section>

            <section id="sideInfoBox" >
            </section>
        </main>
        )
}