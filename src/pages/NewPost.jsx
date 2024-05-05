import { Link } from "react-router-dom"
import './css/NewPost.css'
import { useRef , useContext } from "react"
import { createNewPost } from "../assets/httpReq.js"
import { userDetailsContext } from "../components/userDetailsContextProvider.jsx"
import { useNavigate } from "react-router-dom"

export default function NewPost() {
    const navigate = useNavigate();
    const userDetails = useContext(userDetailsContext);
    const titleRef = useRef();
    const imgRef = useRef();
    const contentRef = useRef();
    const author = userDetails.author ; // given name
    const email = userDetails.email;
    const uid = userDetails.uid;

    const errMsg=useRef();
    const errorMsg = <p id="errorMsg" ref={errMsg} className='' ></p>

    function submitNewPost(){
        const title = titleRef.current.value.trim();
        const content = contentRef.current.value.trim();
        // const img = imgRef.current.value;    IMAGE LATER DONT FORGETTTT
        
        if (title.length > 3 && content.length > 0 ){
            createNewPost(email,title,content,author,uid).then((res)=>{
                // console.log(res);
                navigate("../posted");
            }).catch((err)=>{
                // console.log(err);
            })
        }else{
            if(title==='' ||title.length<4 ){
                errMsg.current.textContent= 'Please enter a Title, maximum 20 characters.'
                errMsg.current.className="vibrate";
                titleRef.current.className="inputBox invalidField";
                setTimeout(()=>{errMsg.current.className=""},200)
                setTimeout(()=>{titleRef.current.className="inputBox"},200)
              }
              else if(content==='' || content.length>200 ){
                errMsg.current.textContent= 'Please enter a Description , less than 200 characters.'
                errMsg.current.className="vibrate";
                contentRef.current.className="textAreaBox invalidField";
                setTimeout(()=>{errMsg.current.className=""},200)
                setTimeout(()=>{contentRef.current.className="textAreaBox"},200)
              }        
        }
    }

    return ( 
        <main className="pages newPostPage" >
            <section id="newPostCont" >
            <h1 id="newPostHeader" > Create New Post</h1>
            <form id="newPostForm">
                
                <div className="formItmGrp" >
                    <label htmlFor="title" className="newPostLabels">Title</label>
                    <input id="newTitle" type="text" className="inputBox" 
                           ref={titleRef}      />
                </div>

                <div className="formItmGrp">
                    <label htmlFor="image" className="newPostLabels">Image</label>
                    <input type="file" id="newImg" className="inputBox" accept="image/*"
                            ref={imgRef} />
                </div>

                <div className="formItmGrp" >
                    <label htmlFor="content" className="newPostLabels" >Content</label>
                    <textarea rows="5" id="newContent" className="textAreaBox" ref={contentRef} ></textarea>
                </div>

                <div id="formSumbitBtnGrp" >
                    <button type="button" id="createBtn" onClick={()=>{submitNewPost()}}  >Create Post</button>
                    <Link to=".."  > Cancel </Link>
                </div>
                {errorMsg}
            </form>
            
            </section>

            <section id="sideInfoBox" >
            </section>
        </main>
        )
}