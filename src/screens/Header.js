import React from 'react'
import "./header.css"

function Header() {

    const toggler = () => {

        //open the menu on click
        document.querySelector('.open').addEventListener('click', ()=>{
            document.querySelector('.nav-list').classList.add('active');
        })

        document.querySelector('.close').addEventListener('click', ()=>{
            document.querySelector('.nav-list').classList.remove('active');
        })
    }

    return (
        <header id="header">
            <div class="container">
                <nav>
                    <div class="nav-brand"><h3></h3></div>
                    <div class="menu-icons open">
                        <i onClick={toggler} class="icons ion-md-menu"></i>
                    </div>
                    <ul class="nav-list">
                        <div class="menu-icons close">
                            <i onClick={toggler} class="icons ion-md-close"></i>
                        </div>
                        <li class="nav-item">
                            <a href="#hero" class="nav-link-item current">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#about" class="nav-link-item">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="#testimonials" class="nav-link-item">Speakers</a>
                        </li>
                        <li class="nav-item">
                            <a href="#pricing" class="nav-link-item">Sponsers</a>
                        </li>
                        <li class="nav-item">
                            <a href="#faq" class="nav-link-item">FAQ</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
