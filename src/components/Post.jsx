import './Post.css'
export default function Post({ author, title, content , date , img}) {


    return( 
        <main className="" id="PostPage" >
            <section id="postx" >
                
                <header className='details' >
                    <h4 className='detailsH' >@{author}</h4>
                    <h6 className='detailsH' >{date}</h6>
                </header>
                <h2 className='postTitle' >{title}</h2>
                <img className='postImg' src={img} alt="Posted Image" />
                <p className='detailsP' >{content}</p>
            </section>
        </main>
    )
}