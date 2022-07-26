import React from 'react'
import { Link } from 'react-router-dom'
import Buscador from './Buscador'

export default function Header() {
  return (
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <Link class="nav-link fs-5 text fw-bold" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link fs-5 text fw-bold" to="/listado">Movies</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link fs-5 text fw-bold" to="/favorites">Favorites</Link>
        </li>
      </ul>
    </div>
    <Buscador></Buscador>
  </div>
</nav>
    </header>
    )
}
