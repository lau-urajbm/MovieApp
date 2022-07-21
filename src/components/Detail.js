import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import swal from '@sweetalert/with-react'


export const Detail = () => {

    const [detalle, setDetalle]= useState()

    const token = sessionStorage.getItem('token')

    let query = new URLSearchParams(window.location.search)
    let movieId= query.get('movie')
    console.log(movieId)

    useEffect(()=>{
        const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=47a230a72eac32aa192db44e5d89df97&language=en-US`
       
        async function llamado(){
            try{
                const res = await axios.get(endPoint)
        console.log(res)
        setDetalle(res.data)
        
            }catch(err){
                swal(<h2>hubo un problema </h2>)
            }
        
    }
        llamado()

    },[])

  return (
    <>
    {!token && <Navigate to='/'/>}


    { detalle?
    < div className='container'>
        

    <div className='row bg-dark bg-gradient my-5 rounded text-light' >
    <h2>Título: {detalle.title}</h2>
        <div className='col-4 my-4' >
        
            
            <img src={'https://image.tmdb.org/t/p/w500/'+detalle.backdrop_path} className='img-fluid rounded '></img>
        </div>
        <div className='col-8 my-4'>
            
            <h4>Fecha de estreno:</h4>
            <p>{detalle.release_date}</p>
            <h4>Reseña:</h4>
            <p>{detalle.overview} </p>
            <h4>Rating</h4>
            <p>{detalle.vote_average}</p>
            <h4>Géneros</h4>
            <ul>{detalle.genres.map(g=>{
                return(
                    <li key={g.id}>{g.name}</li>
                )
            })}</ul>
            
        </div>
    </div>
    </div>:
    <div>
        <img src='https://i.pinimg.com/originals/0c/cd/96/0ccd96bc52dc46b1f5f3ea89cad58ecb.gif' ></img>
    </div>
    }
    </>
  )
}

export default Detail