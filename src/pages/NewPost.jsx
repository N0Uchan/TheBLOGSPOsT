import { Link } from "react-router-dom"
import './css/NewPost.css'
import { useRef , useContext } from "react"
import { createNewPost } from "../assets/httpReq.js"
import { userDetailsContext } from "../components/userDetailsContextProvider.jsx"
import { useNavigate } from "react-router-dom"
import { useState } from "react"; 

export default function NewPost() {
    const [Image,setImage] = useState("");
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
    function previewToBase64(e) {
        var reader = new FileReader();
        reader.readAsDataURL( e.target.files[0] ) ;
        reader.onload = () =>{
            setImage(reader.result)
        }
         //base64encoded string
        reader.onerror = error=>{
        console. log( "Error :",error);
        }
    }

    // function convertToBase64(file) {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         reader.onload = () => {
    //             resolve(reader.result); // base64encoded string
    //         };
    //         reader.onerror = error => {
    //             reject("Image Error: " + error);
    //         };
    //     });
    // }
    

    function submitNewPost(){
        const title = titleRef.current.value.trim();
        const content = contentRef.current.value.trim();
        const img64 = Image;   
        if (title.length > 3 && content.length > 0 && img64) {
            createNewPost(email,title,content,author,uid,img64).then((res)=>{
                // console.log(res);
                navigate("../posted");
            }).catch((err)=>{
                // console.log(err);
            })
        }else{
            if(title==='' ||title.length<4 ){
                errMsg.current.textContent= 'Please enter a Title, min 3, maximum 20 characters.'
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
              else if (!imgFile) {
                errMsg.current.textContent = 'Please select an image file.';
                errMsg.current.className = "vibrate";
                imgRef.current.className = "inputBox invalidField";
                setTimeout(() => { errMsg.current.className = "" }, 200);
                setTimeout(() => { imgRef.current.className = "inputBox" }, 200);
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
                            onChange={previewToBase64}
                            ref={imgRef} />
                            
                </div>
                { Image=="" || Image==null ? "No Image Selected" : <img width={100} height = {100} src={Image} /> }
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