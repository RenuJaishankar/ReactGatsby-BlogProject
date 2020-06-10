import React from "react"

const MainNavBar = () => (

<nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
       <a className="navbar-item"  href="../post"> 
      </a> 
           <img src="https://image.shutterstock.com/image-vector/vector-hand-painted-watercolor-blog-600w-339532466.jpg"width="50px" height="50px" />
      {/* img tags in react need to be self closing with /> at the end! */}
                  
      <div style={{ height: 30,margin:"auto"}}>
      <a className="navbar-item" style={{fontSize:30,fontWeight:"bold",fontFamily:"Pacifico,cursive",color:"#AB274F"}}>
       
        Super Cool My Blog
               </a>
       </div>         

      {/* <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a> */}


    </div>

    <div className="navbar-menu" id="navMenu">
      <div className="navbar-start" >
        
        <a className="navbar-item" style={{
            margin:"auto",
            color: "#596372",
            fontFamily: "Arial",
            navbarBoxShadowColor:"#93FFE8",
            fontSize: "25px",
            fontWeight: "bold"}} href="../post" >
          
            Home
                      
        </a>
        <a className="navbar-item" style={{
            margin:"auto",
            color: "#596372",
            fontFamily: "Arial",
            fontSize: "25px",
            fontWeight: "bold"}} href="../placespage" >
          
            Places
        
          
        </a>
        
        <a className="navbar-item" style={{textAlign: "center",
            margin:"auto",
            color: "#596372",
            fontFamily: "Arial",
            fontSize: "25px",
            fontWeight: "bold"}} href="../flowerpage">
          
            Flowers
        
          
        </a>
        <a className="navbar-item" style={{textAlign: "center",
            margin:"auto",
            color: "#596372",
            fontFamily: "Arial",
            fontSize: "25px",
            fontWeight: "bold",}} href="../fruitpage">
          
            Fruits
          
          
        </a>

    </div>

    <div className="navbar-end">
    </div>
  </div>
</nav>
)
export default MainNavBar