import React from "react"

const mainnavbar = () => (

<nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io"> </a> 
      
           <img src="https://image.shutterstock.com/image-vector/vector-hand-painted-watercolor-blog-600w-339532466.jpg" width="100px" height="100px" />
      {/* img tags in react need to be self closing with /> at the end! */}
                   
      <div style={{ height: 50}}>
      <a className="navbar-item" style={{fontSize:30,fontWeight:"bold",fontFamily:"Verdana"}}>
       
        Super Cool My Blog.
               </a>
       </div>         

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>


    </div>

    <div className="navbar-menu" id="navMenu">
      <div className="navbar-start" >
        
        <a className="navbar-item" style={{color:"purple"}} >
          
            Home
        
          
        </a>
        
        <a className="navbar-item" style={{color:"purple"}} href="../flowerpage">
          
            About flowers.
        
          
        </a>
        <a className="navbar-item" style={{color:"purple"}} href="../fruitpage">
          
            About fruits.
          
          
        </a>

    </div>

    <div className="navbar-end">
    </div>
  </div>
</nav>
)
export default mainnavbar