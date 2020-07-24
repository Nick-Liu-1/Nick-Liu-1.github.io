<template>
    <div id="body">

        <div id="pfp">
            <img src="../assets/pfp.jpg" alt="Profile Picture" class="pfp"  @click="alert(window.location.pathname)">
        </div>
        
        
        <div id="text">
            <h1 class="name">Nick Liu</h1>

            <p class="intro">
                Hi, I am Nick Liu, a software engineering student at the University of Waterloo. I have a great passion for programming and software development.
            </p>
        </div>
        
        <div id="links">
            <ul class="links">
                <li>
                    <a href="https://github.com/Nick-Liu-1" target="_blank"><img src="../assets/github.png" alt="Github" class="linkbar"></a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/nick-liu-b28198173/" target="_blank"><img src="../assets/linkedin.png" alt="Linkedin" class="linkbar"></a>
                </li>

                <li>
                    <a href="mailto:nickliu02@gmail.com"><img src="../assets/email.png" alt="Email" class="linkbar"></a>
                </li>

                <li>
                    <a href="Academic Resume.pdf" download><img src="../assets/resume.png" alt="Resume" class="linkbar"></a>
                </li>
            </ul>
        </div>

    
    </div>
</template>  

<script>
export default {
    name: "about"
}
</script>

<style scoped> 
    #body {
        height: 100vh;
        background-color: #f0ead6;
    }


    .pfp {
        position: relative;
        border-radius: 50%;
        width: 20%;
    
        display: block;
        margin-left: auto;
        margin-right: auto;
        top: 5vh;
        
    }

    .name {
        position: relative;
        text-align: center;
        font-size: 3em;
        font-family: Verdana, sans-serif;
        top: 4vh;
        
    }


    .intro {
        position: relative;
        text-align: center;
        font-family: Verdana, sans-serif;
        font-size: 1.5em;
        word-wrap: normal;
        top: 4vh;
        width: 60vw;
        margin-left: auto;
        margin-right: auto;
       
    }

    #links {
        z-index: 200;
        position: relative;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        top: 3vh;
        
    }

    #links img:hover {
        opacity: 50%;
    }

    #nav {
      z-index: 200;
      position: absolute;
      width: 250px;
      height: 40px;
      right: 1.2vw;
      font-size: 1.2em;
      font-family: Verdana, sans-serif;
      
    }

    #nav a {
      text-decoration: none;
      color: black;
    }

    #selectedSlide {
        text-decoration: underline;
    }

    #links ul {
        list-style-type: none;
        padding: 0;
    }

    #links li {
        display: inline-block;
        margin: 0 10px;
    }
   
    
</style>