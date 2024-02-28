import { Outlet } from "react-router-dom";

import './pages.css'

export default function RootLayout() {

    return (
        <div>
            <Outlet /> 
        </div>
    )
}

import Nav from '../components/Nav'