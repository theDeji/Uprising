import React from 'react'
import { Link } from 'react-router-dom'

import logo from './img/logo.png'
import './style.css'

export default function Header() {
    return (
        <>
           <header>
                <nav class="navbar navbar-expand-md mb-3">
                    <div class="container">
                        <img class="navbar-brand mr-3" src={logo}/>
                        <button type="button" class="navbar-dark navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ml-auto">
                                <Link to='/' class="nav-item nav-link active">Home</Link>
                                <Link to="./About" class="nav-item nav-link">About</Link>
                                <Link to="./Contact" class="nav-item nav-link">Contact Us</Link>
                            </div>
                        </div>
                    </div>    
                </nav>
            </header>
        </>
    )
   
}
