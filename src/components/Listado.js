import React, { useEffect, useState} from 'react'
import {useNavigate, Link, Navigate} from 'react-router-dom'
import axios from 'axios'
import swal from '@sweetalert/with-react'


export default function Listado(props){
    const navigate= useNavigate()
console.log(props)
    const [movieList, setMoviesList]=useState([])

    const token = sessionStorage.getItem('token')

     useEffect( ()=>{
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=47a230a72eac32aa192db44e5d89df97&language=es-ES&page=1'
       
        async function llamado(){
            try{
                const res = await axios.get(endPoint)
        
        setMoviesList(res.data.results)
            }catch(err){
                swal(<h2>hubo un problema </h2>)
            }
        
    }
        llamado()
        },[])

        console.log(movieList)  


  return (
    <>
    {!token && <Navigate to='/'/>}
    <div className='container-fluid row'>
    {
        movieList?.map((movie, i)=>{
            return(
                
        <div className='col-md-3 col-sm-12' key={i}>
    <div className="card my-4 border border-light" >
    <img src={'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path} className="card-img-top" alt="..."></img>
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
