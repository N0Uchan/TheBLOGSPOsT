import Nav from '../components/Nav'
import { Outlet } from "react-router-dom";

export default function UserHome() {

    return (<main>
        <Nav />
        <Outlet />

    </main>)
}