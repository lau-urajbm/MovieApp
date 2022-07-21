import Login from "./components/Login";
import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from "react";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Detail from "./components/Detail";
import Resultados from "./components/Resultados";
import Favoritos from "./components/Favoritos";


function App() {

  const [favorites, setFavorites]=useState([])

    useEffect(()=>{
        const favsInLocal = localStorage.getItem('favs')
        

        if(favsInLocal!==null){
            const favsArr= JSON.parse(favsInLocal)
            console.log('estos son favs',favsArr)
            setFavorites(favsArr)
        }
    },[])

 

  function removeOrAddFav(e){

    const favs = localStorage.getItem('favs')
  let tempFavMovies ;
  if(favs === null){
    tempFavMovies = []
  }else{
    tempFavMovies = JSON.parse(favs)
  }


    const btn = e.target
    const parent = btn.parentElement
    const imgUrl = parent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('h5').innerText
    const overview = parent.querySelector('p').innerText

    const movieData ={
      imgUrl, title, overview,
      id: btn.dataset.movieid
    }
    let isIn = tempFavMovies.find(movie=>{
      return movie.id===movieData.id
    })
    console.log(tempFavMovies,'...')
    if(!isIn){
      tempFavMovies.push(movieData)
    localStorage.setItem('favs', JSON.stringify(tempFavMovies))
    setFavorites(tempFavMovies)
    console.log('se agrego la pelicula')
    }else{
      let moviesLeft=tempFavMovies.filter(movie=>{
        return movie.id !== movieData.id
        
      })
      tempFavMovies = moviesLeft
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
      console.log('se eliminó la pelicula')
      console.log(tempFavMovies)
      setFavorites(tempFavMovies)
     
    
    }
    
    
    
  }

  return (
    <div className="app">
    <Routes>
    <Route path="/" element={[<Header/>,<Login/>, <Footer/>]}/>
    <Route path="/listado" element={[<Header/>,<Listado removeOrAddFav={removeOrAddFav}/>, <Footer/>]}/>
    <Route path="/detail" element={[<Header/>,<Detail/>, <Footer/>]}></Route>
    <Route path="/results" element={[<Header/>,<Resultados/>, <Footer/>]}></Route>
    <Route path="/favorites" element={[<Header/>,<Favoritos favorites={favorites} removeOrAddFav={removeOrAddFav} />, <Footer/>]}></Route>
    
    
    </Routes>
    </div>
  );
}

export default App;
