import { Link } from "react-router-dom"
import './css/NewPost.css'
import { useRef , useContext } from "react"
import { createNewPost } from "../assets/httpReq.js"
import { userDetailsContext } from "../components/userDetailsContextProvider.jsx"


export default function NewPost() {
    const userDetails = useContext(userDetailsContext);
    const titleRef = useRef();
    const imgRef = useRef();
    const contentRef = useRef();
    const author = userDetails.given_name ; // given name
    const email = userDetails.email;
    function submitNewPost(){
        const title = titleRef.current.value;
        // const img = imgRef.current.value;    IMAGE LATER DONT FORGETTTT
        const content = contentRef.current.value;
        if (title.length > 3 && content.length > 0 ){
            createNewPost(email,title,content,author).then((res)=>{
                // console.log(res);
            }).catch((err)=>{
                // console.log(err);
            })
        }else{
            console.log("Invalid Input");
        }
    }


    return ( 
        <main className="pages newPostPage" >
            <section id="newPostCont" >
            <h1 id="newPostHeader" > Create New Post</h1>
            <form id="newPostForm">
                
                <div className="formItmGrp" >
                    <label htmlFor="title" className="newPostLabels">Title</label>
                    <input type="text" className="inputBox" 
                           ref={titleRef}      />
                </div>

                <div className="formItmGrp">
                    <label htmlFor="image" className="newPostLabels">Image</label>
                    <input type="file" className="inputBox" accept="image/*"
                            ref={imgRef} />
                </div>

                <div className="formItmGrp" >
                    <label htmlFor="content" className="newPostLabels" >Content</label>
                    <textarea id="" rows="5" className="textAreaBox" ref={contentRef} ></textarea>
                </div>

                <div id="formSumbitBtnGrp" >
                    <button type="button" onClick={()=>{submitNewPost()}}  >Create Post</button>
                    <Link to=".."  > Cancel </Link>
                </div>
                
            </form>
            
            </section>

            <section id="sideInfoBox" >
            </section>
        </main>
        )
}