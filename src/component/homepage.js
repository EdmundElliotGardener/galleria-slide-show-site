import React from 'react'
// import "./Homepage.css"
import './Homepage.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/shared/logo.svg'

const Homepage = () => {
  return (
    <div className='body'>
        <div className="header"> 
            <div className='logo'>
                <img src={Logo} alt="logo" />
            </div>
            <Link to='/Slideshow'>
                <h5 className='header-link'>
                    START SLIDESHOW
                </h5>
            </Link>
        </div>
        
        <div className='divider'>

        </div>

        <div className="grid-gallery"> 
            <div className="gallery-items gallery-column-1">
                <div className='column item1'>
                    <div className='gallery-text'>
                        <h2>Starry Night</h2>
                        <p>Vincent Van Gogh</p>
                    </div>
                </div>
                <div className='column item2'>
                    <div className='gallery-text'>
                        <h2>The Storm on the Sea of Galilee</h2>
                        <p>Rembrandt</p>
                    </div>
                </div>
                <div className='column item3'>
                    <div className='gallery-text'>
                        <h2>Lady with an Ermine</h2>
                        <p>Leonardo da Vinci</p>
                    </div>
                </div>
                <div className='column item4'>
                    <div className="gallery-text">
                        <h2>The Boy in the Red Vest</h2>
                        <p>Edward Hopper</p>
                    </div>
                </div>
            </div>
            <div className="gallery-items gallery-column-2">
                <div className='column item5'>
                    <div className="gallery-text">
                        <h2>Girl with a Pearl Earring</h2>
                        <p>Johannes Vermeer</p>
                    </div>

                </div>
                <div className='column item6'>
                    <div className="gallery-text">
                        <h2>The Great Wave of Kanagawa</h2>
                        <p>Honkusai</p>
                    </div>

                </div>
                <div className='column item7'>
                    <div className="gallery-text">
                        <h2>The Night Cafe</h2>
                        <p>Vincent Van Gogh</p>
                    </div>
                </div>
                <div className='column item8'>
                    <div className="gallery-text">
                        <h2>Arnolfini Portrait</h2>
                        <p>Jan van Eyck</p>
                    </div>
                </div>
            </div>
            <div className="gallery-items gallery-column-3">
                <div className='column item9'>
                    <div className="gallery-text">
                        <h2>Guernica</h2>
                        <p>Pablo Picasso</p>
                    </div>
                </div>
                <div className='column item10'>
                    <div className="gallery-text">
                        <h2>Van Gogh Self-portrait</h2>
                        <p>Vincent Van Gogh</p>
                    </div>
                </div>
                <div className='column item11'>
                    <div className='gallery-text'>
                        <h2>Mona Lisa</h2>
                        <p>Leonardo da Vinci</p>
                    </div>
                </div>
            </div>
            <div className="gallery-items gallery-column-4">
                <div className='column item12'>
                    <div className="gallery-text">
                        <h2>Penitent Magdalene</h2>
                        <p>Artemisia Gentileschi</p>
                    </div>
                </div>
                <div className='column item13'>
                    <div className="gallery-text">
                        <h2>The Sleeping Gypsy</h2>
                        <p>Henri Rousseau</p>
                    </div>
                </div>
                <div className='column item14'>
                    <div className="gallery-text">
                        <h2>The Basket of Apples</h2>
                        <p>Paul Cezanne</p>
                    </div>
                </div>
                <div className='column item15'>
                    <div className="gallery-text">
                        <h2>The Swing</h2>
                        <p>Jean-Honore Fragonard</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Homepage