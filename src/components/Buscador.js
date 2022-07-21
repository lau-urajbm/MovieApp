import React from 'react'
import swal from '@sweetalert/with-react'
import {useNavigate, Navigate}  from 'react-router-dom'

const Buscador = () => {

    let navigate= useNavigate()

    

    function handleSubmit(e){
        e.preventDefault()
        const keyWord = e.target.keyWord.value.trim()
        console.log(keyWord)

        if(keyWord.length === 0){
            swal(
                <h4>Escribe una palabra clave</h4>
            )
        }else if(keyWord.length <3){
            swal(
                <h4>Escribe al menos tres letras para realizar la busqueda</h4>
            )
        }else{
            e.target.keyWord.value = ''
            navigate(`/results?keyword=${keyWord}`)
        }

    }

  return (
    <form onSubmit={handleSubmit} className='d-flex align-items-center'>
        
        <label className='form-label mb-0 mx-2'>
        
        <input type='search' name='keyWord' className='form-control' placeholder='Buscar...'></input>
        </label>
        <button type='submit' className='btn btn-success ml-2'>Buscar</button>
    </form>
  )
}

export default Buscador