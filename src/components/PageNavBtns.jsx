import './PageNavBtns.css';

export default function PageNavBtns({page, changePage, prevBtnClass, nextBtnClass}) {
    return <section id="pageNav">
                <button className={prevBtnClass} onClick={()=>changePage(-1)} >{'<'}</button>
                <p id="pageNo">{page}</p>
                <button className={nextBtnClass} onClick={()=>changePage(1)} >{'>'}</button>
            </section>   
}