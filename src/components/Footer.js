import React from 'react'
import './style.css'
import logo from './img/logo.png'

export default function Footer() {
    return (
        <>
           <footer>
                <div class="foot">
                    <img class="navbar-brand mr-3" src={logo}/>
                    <div class="col-md-6">
                        <p>Copyright &copy; 2020 Uprising</p>
                    </div>
                    <div class="col-md-6 text-md-right">
                        <a href="#" class="text-dark">Terms of Use</a> 
                        <span class="text-muted mx-2">|</span> 
                        <a href="#" class="text-dark">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
