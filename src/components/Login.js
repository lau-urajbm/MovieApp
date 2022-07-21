import React, { useState } from 'react'
import axios from 'axios'
import swal from '@sweetalert/with-react'
import {useNavigate, Navigate}  from 'react-router-dom'

export default function Login()  {
    
let navigate= useNavigate()
    

    function submitHandler(e){
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const emailValid=  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(email===''||email===''){
            swal(
                <h2>los campos no pueden estar vacios</h2>
            )
           
            return;
        }
        if(email !== '' && !emailValid.test(email)){
            swal(
                <h2>debes escribir un email válido</h2>
            )
           
            return;
        }
        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            swal(
                <h2>credenciales invalidas</h2>
            )
            
            return;

        }
        swal(
            <h2>Ingresaste correctamente</h2>
        )
      const token = 'er4r3-3efser-454r'
     console.log(token)

     sessionStorage.setItem('token', token);

    navigate('/listado')
    }
    const token = sessionStorage.getItem('token')
  return (
    <>
    {token && <Navigate to='/listado'/>}
    <div className='container my-4'>

    <div className='col-6 offset-3 bg-light rounded p-4  '>

    <h2>Formulario de login</h2>
    <form onSubmit={submitHandler}>
        
        <label className='form-label d-block mt-2'>
         <span>Email</span><br/>
        <input type='email' name='email' className='form-control'></input>
        </label>
        <br/>
        <label className='form-label d-block mt-2'>
            <span>Contraseña</span><br/>
            <input type='password' name='password' className='form-control'></input>
        </label>
        <br/>
        <button type='submit' className='btn btn-success mt-2'>ingresar</button>
    </form>

    </div>
    </div>
    </>
  )
}
