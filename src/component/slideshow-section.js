import React,{useState} from 'react'
// import {Link} from 'react-router-dom' 
import './slideshow.css'
import Slidefooter from './footer'
import img from '../assets/shared/icon-view-image.svg'
import Slideshowdata from "../data.json"



const Slideshowsection = () => {
    const [counter,setCounter] = useState(0)
    const [preview, setPreview] = useState("False")

    const contentStyles= {
        display:"flex",
        flexDirection:"column",
        gap: 100
    }
    
    const Slidefooter = {
        authorName: Slideshowdata[counter].name,
        artistName: Slideshowdata[counter].artistName,
    }

    const handleClick = (value) => {
        return setCounter(prev => prev +(value))
    }


  return (
    <>
        <div className="myModal" style={{display: preview ? 'block' : 'none'}}>
            <span style={{color: '#fff'}} onClick={() => setPreview(!preview)}>Close</span>
                <img src={Slideshowdata[counter].images.hero.small.toString()} alt="" />

        </div>
        <section style={contentStyles}>
            <div className="slideshow-section">
                <div className='gallery-details'>
                    <div className='gallery-image'>
                        <span className="img-tag" onClick={() => setPreview(!preview)}>
                            <img src={img} alt="" />
                            VIEW IMAGE
                        </span>
                        <img src={Slideshowdata[counter].images.hero.large.toString()} alt="" className='artist' />
                    </div>
                    <div className='gallery-name'>
                        <h1>{Slideshowdata[counter].name}</h1>
                        <p>{Slideshowdata[counter].artist.name}</p>
                    </div>
                    <div className='gallery-artist'>
                        <img src={Slideshowdata[counter].images.artist.image} alt=""  />
                    </div>
                </div>
                <div className='artist-message'>
                    <div className='artist-watermark'>
                        <p className='art-year'>
                            {Slideshowdata[counter].year}
                        </p>
                        <p className='art-description'>
                            {Slideshowdata[counter].description}
                        </p>
                    </div>
                    <div className='artist-link'>
                        <a href={Slideshowdata[counter].source} target={'_blank'} className='source-link'>
                            GO TO SOURCE
                        </a>
                    </div>
                </div>                      
            </div>
        </section>
            <div className='progressBar' style={{ width: (counter+1) * 6.667 + '%'}}></div>
            
            <Slidefooter Slideshowdata={Slideshowdata} fireMethod={handleClick}/>
    </>
  )
}

export default Slideshowsection