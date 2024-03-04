import './Post.css'
export default function Post({ author, title, content , date , img}) {


    return( 
        <main className="" >
            <section id="postx" >
                
                <header className='details' >
                    <h4 className='detailsH innTextColor' >@ {author}</h4>
                    <h6 className='detailsH innTextColor' >{date}</h6>
                </header>
                <h2 className='postTitle innTextColor' >{title}</h2>
                <img className='postImg' src={img} alt="Posted Image" />
                <p className='detailsP innTextColor' >{content}</p>
            </section>
        </main>
    )
}