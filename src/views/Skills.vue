<template>
    <div id="body">
        
        <h1 id="title">Resume</h1>

        <div id="row">
            <div class="column">
                <div id="education">
                    <h2>Education</h2>

                    <h3>Vincent Massey Secondary School (2017-2020)</h3>
                    <ul>
                        <li>
                            Top 6 average of 97.8%
                        </li>

                        <li>
                            Ranked 1st in my class of >500 from 2017-2018 and 2nd in my class of 512 from 2018-2019.
                        </li>

                        <li>
                            Received the mathematics and physics subject awards for the year of 2018-2019.
                        </li>
                    </ul>
                    <h3>University of Waterloo (2020-2025)</h3>
                    <ul>
                        <li>Attending in September of 2020</li>
                    </ul>
                    
                </div>
        

            
                <div id="extracurriculars">
                    <h2>Extracurriculars</h2>

                    <ul>
                        <li>Computer Science Club</li>

                        <li>
                            Science Olympiad
                            <ul>
                                <li>Achieved 1st place at the University of Windsor Science Olympics.</li>
                            </ul>
                        </li>

                        <li>Debate Club</li>

                        <li>
                            Windsor Math Enrichment Program
                            <ul>
                                <li>Learned advanced mathematical concepts in preperation for math contests.</li>
                            </ul>
                        </li>

                        <li>
                            Codereach
                            <ul>
                                <li>Helped children grades 7-8 develop their programming skills in Python</li>
                            </ul>
                        </li>

                        <li>
                            Canadian Young Physicist Tournament Team
                            <ul>
                                <li>Prepared 8 presentations on physics problems with theoretical and practical components.</li>
                                <li>Received a bronze medal.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="column">
                <div id="skills1">
                    <h2>Skills</h2>

                    <li>
                        Python
                    </li>

                    <li>
                        Java
                    </li>

                    <li>
                        C++
                    </li>
                </div>
            </div>
        </div>

        

    
        
        


    </div>
</template>  

<script>
export default {
    name: "skills"
}
</script>

<style scoped> 
    #body {
        height: 100vh;
    }

    #title {
        font-size: 3em;
        font-family: Verdana, sans-serif;
        text-align: center;
        position: relative;
        top: 2vh;
        
    }
    #education {
        margin-left: 2rem;
    }

    #extracurriculars {
        margin-left: 2rem;
    }

    #skills1 {
        margin-left: 2rem;
    }
    
    .column {
        float: left;
        width: 50%;
    }

    #row:after {
        content: "";
        display: table;
        clear: both;
    }



    

    
</style>