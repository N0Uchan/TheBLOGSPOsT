import './Profile.css'
import { useContext } from 'react';
import { userDetailsContext } from './userDetailsContextProvider'

export default function Profile() {
    const {author,picture} = useContext(userDetailsContext);
    return (
        <div id="profile" >
            <img src={picture} alt="profile" id="profileImg" />
            <p>{author}</p>
        </div>
    )
}