import React from 'react'
import './style.css'

import Apple from './img/Apple.svg'
import idea from './img/idea.png'

import Playstore from './img/Playstore.svg'
import search from './img/search.png'
import share from './img/share.png'

export default function Home() {
    return (
        <>
            <div class="container">
                <div class="join">
                    <h1>We Create A Crowd. With ONE PLEA!</h1>
                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi non minus possimus optio temporibus impedit, odio aspernatur dolor vel ut voluptatem facilis hic voluptate, eos qui officia, veritatis assumenda eaque..</p>
                    <p><a href="#" target="_blank" class="btn btn-dark btn-lg">Join Us Now</a></p>
                </div>
                <div class="row" id="rowOne">
                    <div class="col-md-6 col-lg-4 col-xl-3 col-sm" id="steps">
                        <img src={idea}/>
                        <p>Want to be part of a revolution ? join us to get your account up and running.</p>
                    </div>

                    <div class="col-md-6 col-lg-4 col-xl-3 col-sm" id="steps">
                        <img src={search}/>
                        <p>Search for a nearby protest, join in. Also, create One of your own.</p>
                    </div>

                    <div class="col-md-6 col-lg-4 col-xl-3 col-sm" id="steps">
                        <img src={share}/>
                        <p>Let the world and everyone around you know. Share your movement!</p>
                    </div>
                </div><br/><br/>
                <div class="row">
                    <div class="col-md-6 col-lg-4 col-xl-3 android">
                        <img className="apple" src={Apple} alt="apple"/>
                        <p>Download on the App Store</p>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 ios">
                        <img className="google" src={Playstore} alt="google"/>
                        <p>Get the App on Google Play</p>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}
