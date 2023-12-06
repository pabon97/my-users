import React from 'react'
import './Pagination.css'

const Pagination = ({totalposts, postsPerPage, currentPage, setCurrentPage}) => {
    let pages = [];
    for(let i = 1; i<= Math.ceil(totalposts/postsPerPage); i++){
         pages.push(i)
    }
  return (
    <div className='pagination'>
        {
            pages.map((page, index)=>{
                return <button className={page == currentPage ? "active": "" } onClick={()=> setCurrentPage(page)} key={index}>{page}</button>
            })
        }
    </div>
  )
}

export default Pagination