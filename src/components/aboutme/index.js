import React from "react";
import Resume from '../img/Resume.jpg';
import Profilepic from '../img/Profilepic.jpg';


const styles = {
     box: {

      leftmargin: 0,
    
      background: "#91F2FF"
    }
  };

function AboutMe() {
    return(
        <div className="container" style={styles.box}>
            <div className="row">
                <section className="col-md">
                    <article className="block">
                        <h1>About me</h1>
                        <img  src={Profilepic} alt="Professional" width="300" height="375"></img>
                        <p>
                            I was born on 1996 in Yuma, Az. I'm 24 years old looking for a new path in life, so I decided to take a 6 month Web Devloper course,
                            I have learned a lot in those 6 months but there's still much to learn. I am an aspiring web devloper, although I am still relatively new I am eager and willing to learn more. 
                        </p>
                        <hr />
                        <h1>Resume</h1>
                        <img style={styles.imageStyle}  src={Resume} alt="Jake in a chair" className="img-fluid" />                       
                        <hr />
                        <h1>Contact</h1>
                        <h4>Phone: 928-920-5425</h4>
                        <h4>Email: jacobpeters628@gmail.com</h4>
                        <h4>LinkedIn: https://www.linkedin.com/in/jake-peters-055345b6/</h4>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default AboutMe;