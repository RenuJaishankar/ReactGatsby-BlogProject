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
  background: "rgba(0, 0, 0, 0.5)",
        // height:"400px",
        // width:"400px"
        width: "100% ",/* Full width */
  padding: "20px"
    }
    let imagestyles = {
       height: "500px",
       width: "100%"
    }
    return (
        <div className="container" >
           <img src="https://previews.123rf.com/images/tommoh29/tommoh291704/tommoh29170400249/76404670-vintage-style-photo-blog-background-or-template.jpg"
                    style={imagestyles} />
             <div style={styles}> 
              THIS IS MY BLOG
              </div>  
        </div>

    )
}
export default BlogImage