import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from '@sweetalert/with-react'
import { Link } from 'react-router-dom'

export  const Resultados = () => {

    let query = new URLSearchParams(window.location.search)
    let keyWord= query.get('keyword')

    const [results, setResults]=useState([])

    /*  */

    useEffect( ()=>{
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=47a230a72eac32aa192db44e5d89df97&language=en-US&page=1&include_adult=false&query=${keyWord}`
       
        async function llamado(){
            try{
                const res = await axios.get(endPoint)

                
                if(res.data.results.length === 0){
                   return swal(<h4>no hubo resultados para tu búsqueda</h4>)
                }
        
        setResults(res.data.results)
            }catch(err){
                swal(<h2>hubo un problema </h2>)
            }
        
    }
        llamado()
        },[keyWord, results])

  return (
    <>
    

    <div className='container-fluid row'>
    <h2>Resultados</h2>
    <h5>Resultados para {keyWord}:</h5>
    <h5>{results.length}</h5>
    {
        results?.map((movie, i)=>{
            return(
                
        <div className='col-md-3 col-ms-12' key={i}>
    <div className="card my-4 border border-light" >
    <img src={'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path} className="card-img-top" alt="..."></img>
    <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        
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
export default Resultados
