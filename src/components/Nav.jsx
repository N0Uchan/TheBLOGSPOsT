import { NavLink } from "react-router-dom"
import './Nav.css'
import Profile from './Profile'
export default function Nav() {
    return (
        <nav id="navCont" >
            <ul id="navUl" >
                
                 <NavLink className="NavLinks" to="posts" end>Posts</NavLink> 
                 <NavLink className="NavLinks" to="newPost" end>New Post</NavLink> 
                <NavLink id="navIcon" className="" to="/home" end >Home/Icon</NavLink>
                 <NavLink className="NavLinks" to="posted" end >Your Posts</NavLink> 
                               
            </ul>
            <Profile />
        </nav>
    )
}