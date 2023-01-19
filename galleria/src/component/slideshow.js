import React from 'react'

const slideshow = () => {
  return (
    <div className='slideshow'>
        <div className='header'>
            <h1>galleria.</h1>
            <h5>START SLIDESHOW</h5>
        </div>
        <div className='divider'>

        </div>
        <div className="slideshow-section">
            <div className='gallery-details'>
                <div className='gallery-image'>
                    <img></img>
                </div>
                <div className='gallery-name'>
                    <h1></h1>
                    <p></p>
                </div>
                <div className='gallery-artist'>

                </div>
            </div>
            <div className='artist-message'>
                <div className='artist-watermark'>

                </div>
                <p> 
                    "Although The Starry Night was painted during 
                    the day in Van Gogh's ground-floor studio, 
                    it would be inaccurate to state that the picture was 
                    painted from memory. 
                    The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning,
                    I watch the sun rise in all its glory."
                </p>

                <div className='artist-link'>
                    <p>GO TO SOURCE</p>
                </div>
            </div>
        </div>
        <div className='footer'>
            <div className='footer-divider'>

            </div>
            <div className='footer-details' >
                <h2>Starry Night</h2>
                <p>Vincent Van Gogh</p>
            </div>
            <div className='footer-nav'>

            </div>
        </div>

    </div>
  )
}

export default slideshow