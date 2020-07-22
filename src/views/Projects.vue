<template>
    <div id="body">
        <h1 class="title">Projects</h1>

        <div id="projects">
            <ul class="project_row">
                <li>
                    <a href="https://github.com/Nick-Liu-1/Pokemon-Crossing" target="_blank" class="gh_link">
                        <div class="container">
                            <img src="../assets/pc.png" alt="Pokemon Crossing" class="project_images"/>
                            
                            <div class="overlay">
                            </div>
                            

                            <div class="hover_text">
                                <h1>Pokemon Crossing</h1>
                                <p>ICS4U final project. An Animal Crossing spin-off using Pokemon sprites, where the player interacts in a 
                                    village. Created using the Java Swing library.</p>
                            </div>
                        
                            <div class="gh_link_img">
                                <img src="../assets/github_with_background.png" alt="Github Link" class="gh_link_img">
                            </div>
                        </div>

                        
                    </a>
                </li>

    
                <li>
                    <a href="https://github.com/Nick-Liu-1/Simple-Game-Tetris-" target="_blank" class="gh_link">
                        <div class="container">
                            <img src="../assets/tetris.png" alt="Tetris" class="project_images"/>
                        
                            <div class="overlay">
                                  <img src="../assets/github_with_background.png" alt="Github Link" class="gh_link_img">
                            </div>
                
                            <div class="hover_text">
                                <h1>Tetris</h1>
                                <p>
                                    ICS4U simple game project. Created the popular game Tetris using the Java Swing Library. 
                                </p>
                            </div>

                            <div class="gh_link_img">
                                <img src="../assets/github_with_background.png" alt="Github Link" class="gh_link_img">
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
            
            <ul class="project_row">
                <li>
                    <a href="https://github.com/Nick-Liu-1/Virtual-Projectile-Motion-Lab" target="_blank" class="gh_link">
                        <div class="container">
                            <img src="../assets/projectile.png" alt="Virtual Projectile Motion Lab" class="project_images"/>

                            <div class="overlay">
                                <img src="../assets/github_with_background.png" alt="Github Link" class="gh_link_img">
                            </div>
                    
                            <div class="hover_text">
                                <h1>Projectile Motion Lab</h1>
                                <p>
                                    GrizzHacks 2019 submission. Created a virtual projectile motion lab that simulates a projectile given relative parameters.
                                </p>
                            </div>

                            <div class="gh_link_img">
                                <img src="../assets/github_with_background.png" alt="Github Link" class="gh_link_img">
                            </div>
                            
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>  

<script>
export default {
    name: "projects"
}
</script>

<style scoped> 
    #body {
        height: 100vh;
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

    .title {
        text-align: center;
        position: relative;
        top: 2vh;
        font-size: 3em;
        font-family: Verdana, sans-serif;
    }


    .project_images {
        width: 460px;
        height: 290px;
    }

    .project_row {
        position: relative;
        text-align: center;
    }

    .container {
        position: relative;
        text-align: center;
    }

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: #008CBA;
        width: 460px;
        height: 290px;
    }

    .container:hover .overlay {
        opacity: 0.7;
    }

    .container:hover .hover_text {
        opacity: 1;
    }

    .hover_text {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 40%;
        left: 50%;
        width: 80%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: left;
        opacity: 0;
        transition: .5s ease;
    }

    .title {
        padding: 2vh;
    }

    .gh_link_img {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        text-align: right !important;
        
    }
    

</style>