import React, { useState } from 'react'
import './App.css'
import Display from './Display'
import { FaRegCopyright, FaLandmark, FaBars, FaStar, FaGlobe, FaTools, FaRegIdCard, FaThumbsUp,FaRegSmile, FaTimes } from 'react-icons/fa'

const App = () => {

  const[open, setOpen]=useState(false)
  const handleClick=()=>{
    setOpen(!open)
  }
  return (
    <div>
      <nav>
      <FaLandmark className='footer-logo'/>
        <div className='menu-bars'>
        {open?<FaTimes className='Hamburger-menu' onClick={handleClick}/>:<FaBars className='Hamburger-menu' onClick={handleClick}/>}
        </div>

        <div className='invisible-button'>
          <button className='invisible-buttons'>Sign in</button>
          <button className='invisible-buttons'>Sign up</button>
        </div>
      </nav>

    {open?<div className='Sign-div'>
        <button>Sign in</button>
        <button>Sign up</button>
      </div>:''}
    
    <main>
      <h1>Landing Templates for startups</h1>
      <p>Our landing page template works on all devices. So, you only have to set it up once and get beautiful results forever.</p>
      <br />
      
      <div className='Landing-div' >
        <button>Start free trial</button>
        <button>Learn more</button>
      </div>
    </main>

    <section>
      <img src="imgf/hero-image-01.jpg" alt="" srcset="" />
    </section>

    <section>
      <h1>The majority of our customers do not understand their workflows</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque nulla unde ab non tenetur porro, natus sit esse fugit, quisquam aliquam, ad sunt eum tempore assumenda! Quas eum earum vero?</p>
    </section>

    <div className='grid-instant-features'>
     <div className='move'>
     <FaStar className='star-icon'/>
      <h2>Instant features</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate natus debitis dolor. Officiis neque laborum dolores saepe sed deleniti, iusto minus placeat esse veritatis labore tempora non laboriosam asperiores?</p>
     </div>

     <div className='move'>
      <FaGlobe className='star-icon'/>
      <h2>Instant features</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate natus debitis dolor. Officiis neque laborum dolores saepe sed deleniti, iusto minus placeat esse veritatis labore tempora non laboriosam asperiores?</p>
     </div>

     <div className='move'>
     <FaRegIdCard className='star-icon'/>
      <h2>Instant features</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate natus debitis dolor. Officiis neque laborum dolores saepe sed deleniti, iusto minus placeat esse veritatis labore tempora non laboriosam asperiores?</p>
     </div>

     <div className='move'>
     <FaRegSmile className='star-icon'/>
      <h2>Instant features</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate natus debitis dolor. Officiis neque laborum dolores saepe sed deleniti, iusto minus placeat esse veritatis labore tempora non laboriosam asperiores?</p>
     </div>

    <div className='move'>
      <FaTools className='star-icon'/>
      <h2>Instant features</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate natus debitis dolor. Officiis neque laborum dolores saepe sed deleniti, iusto minus placeat esse veritatis labore tempora non laboriosam asperiores?</p>
    </div>

      <div className='move'>
       <FaThumbsUp className='star-icon'/>
      <h2>Instant features</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate natus debitis dolor. Officiis neque laborum dolores saepe sed deleniti, iusto minus placeat esse veritatis labore tempora non laboriosam asperiores?</p>
      </div>
    </div>
    
    <hr />

   <section>
   <article>
    <div>
    <button className='buttonGoals'>Reach goals that matter</button>
      <h1>One product, unlimited solutions</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur fuga sed voluptatibus ut. Cupiditate corrupti officia quas quibusdam? Maiores, sint. Nulla totam, odio omnis alias maxime blanditiis accusantium obcaecati!</p>
    </div>
    </article>

    <div className='features'>
    <div >
      <img src="./imgf/features-03-image-01.png" alt="" srcset="" className='image-page-description' />
    </div>
    
    <div className='speed-spend'>  
    <h4>More speed. Less spend</h4>
      <h1>Keep projects on schedule</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam accusamus tempora sapiente maxime animi quibusdam doloremque.</p>
      
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </div>
    </div>

    <div className='features'>
    <div className='speed-spend'>  
    <h4>More speed. Less spend</h4>
      <h1>Keep projects on schedule</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam accusamus tempora sapiente maxime animi quibusdam doloremque.</p>
      
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </div>
    <div >
      <img src="./imgf/features-03-image-02.png" alt="" srcset="" className='image-page-description' />
    </div>
    </div>

   <div className='features'>
   <div>
      <img src="./imgf/features-03-image-03.png" alt="" srcset="" className='image-page-description' />
    </div>
    
    <div className='speed-spend'>  
    <h4>More speed. Less spend</h4>
      <h1>Keep projects on schedule</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam accusamus tempora sapiente maxime animi quibusdam doloremque.</p>
      
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </div>
   </div>

    <hr />
       
    <div className=' testimonial-div'>
    <h1>You don't believe us? Here are testimonials</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum adipisci ex, obcaecati itaque iure.
    </p>
     
     <div className='three-testimonial-div'>
    <div className='testimonials'>
      <img src="./imgf/testimonial-01.jpg" alt="" srcset=""  className='testimonial-image'/>
    <p>
    -Open PRO lets me quickly get the insights I care about so that i can focus on my productive work. I have had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.
    </p> 
  <hr  className='testimonial-hr'/>
   <p className='testimonial-paragraph'>Anastasia Dan - UX Board</p>
    </div>

    <div className='testimonials'>
      <img src="./imgf/testimonial-02.jpg" alt="" srcset=""  className='testimonial-image'/>
    <p>
    -Open PRO lets me quickly get the insights I care about so that i can focus on my productive work. I have had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.
    </p> 
  <hr  className='testimonial-hr'/>
   <p className='testimonial-paragraph'>Christopher Memphis - UI Board</p>
    </div>

    <div className='testimonials'>
      <img src="./imgf/testimonial-03.jpg" alt="" srcset=""  className='testimonial-image'/>
    <p>
    -Open PRO lets me quickly get the insights I care about so that i can focus on my productive work. I have had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.
    </p> 
  <hr  className='testimonial-hr'/>
   <p className='testimonial-paragraph'>John Bruce - FE Board</p>
    </div>
    </div>
    </div>

    <div className='subscription-div'>
      <h1>Stay in the loop</h1>
      <h4>Join our newsletter to get top news before anyone else.</h4>
      
      <div className='subboxes'>
      <input type="text" name="" id="" placeholder='Your best email...' className='sub-box1' /><br />
      <button className='sub-box2'>Subscribe</button>
      </div>

    </div>
   </section>

   <footer>
     
     <div className='footers-divs'>
    
     <div> 
     <FaLandmark className='footer-logo'/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis, ut molestias eligendi voluptate ullam vitae error.</p>
     </div>

    <div className='footer-divs'>
      <h3>Products</h3>
      <p>Web Studio</p>
      <p>DynamicBox Flex</p>
      <p>Programming Forms</p>
    </div>

    <div className='footer-divs'>
      <h3>Resources</h3>
      <p>Studio Animation</p>
      <p>DynamicBox Grid</p>
      <p>Programming Tables</p>
    </div>

    <div className='footer-divs'>
      <h3>Company</h3>
      <p>Web Company</p>
      <p>Dynamic Tools </p>
      <p>Programming Charts</p>
    </div>
    </div>

    
  <div className='last-footer-div'> 
  <Display className='social-media-icons'/>
   
  <div className='copyrightss'>
  <FaRegCopyright className='copyright-div'/>
   <h5 className='copyright-reserved'>Cruip.com. All rights reserved.</h5>
  </div>
  </div>
   </footer>

   
  
    </div>
  )
}

export default App
