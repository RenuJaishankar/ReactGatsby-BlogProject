import React from 'react'
import "bulma/css/bulma.css"

const BlogImage = () => {
    let styles = {
        position : "absolute",
        color :"white",
        top :"10%",
        left :"50%",
        fontSize: "2.875rem",
        lineHeight: "1.3!important",
        textAlign: "center",
        fontWeight: "bold",
        transform : "translate(-50%, -50%)",
        // backgroundImage :"url("+"/blogmain.jpg"+")",
        backgroundPosition:"center", /* Center the image */
        backgroundRepeat: "no-repeat", /* Do not repeat the image */
        backgroundSize: "cover",
        boxSizing: "border-box",
        background: "rgb(0, 0, 0)", /* Fallback color */
        background: "rgba(0, 0, 0, .2)",
        // height:"400px",
        // width:"400px"
        width: "100% ",/* Full width */
        padding: "20px",
        color:"#2A0800"
    }
    let imagestyles = {
    //     height: "600px",
    //    width: "1000px"
     maxWidth:"100%",
     height:"auto"
    }
    return (
        <div className="container" >
           <img src="https://cdn.pixabay.com/photo/2019/01/17/23/14/work-3938875_960_720.jpg"
                  width="2000" height="200"  style={imagestyles} />
             <div style={styles}> 
               MY BLOG
              </div>  
        </div>

    )
}
export default BlogImage