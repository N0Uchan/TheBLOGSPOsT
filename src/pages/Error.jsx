import { Link } from "react-router-dom"

export default function ErrorPage() {

    return (
        <main className="pages" >
            <h1>ErrorPage (add more stuff later )...</h1>
            <Link to="/home" >Return Home</Link>
            
        </main>

    )
}


export function ErrorPage2(){
    return (
        <main className="pages" >
            <h1>ErrorPage (add more stuff later )...</h1>
            <Link to="/home" >Back to Home</Link>
        </main>
    )

}