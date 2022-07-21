import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

export const Favoritos = (props) => {
    

    const token = sessionStorage.getItem('token')

    /* const [favorites, setFavorites]=useState([])

    useEffect(()=>{
        const favsInLocal = localStorage.getItem('favs')
        

        if(favsInLocal!==null){
            const favsArr= JSON.parse(favsInLocal)
            console.log('estos son favs',favsArr)
            setFavorites(favsArr)
        }
    },[]) */

  return (
    <>
    {!token && <Navigate to='/'/>}
    <div className='container-fluid row '>
        <h2>Favorites</h2>
        <h6>Películas en favoritos: {props.favorites.length}</h6>
    {
        props.favorites?.map((movie, i)=>{
            return(
                
        <div className='col-md-4 col-sm-12' key={i}>
    <div className="card my-4 border border-light" >
    <img src={movie.imgUrl} className="card-img-top" alt="..."></img>
    <button className='favorite-btn' data-movieId={movie.id} onClick={props.removeOrAddFav}>🖤</button>
    <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.overview.substring(0,90)+'...'}</p>
        <Link to={`/detail?movie=${movie.id}`} className="btn bg-dark bg-gradient text-light" key='/'>View Detail</Link>
    </div>
    </div>
        </div>

            )
        })
    }

    
        

        
       
    </div>
    </>
  )
}
export default Favoritos