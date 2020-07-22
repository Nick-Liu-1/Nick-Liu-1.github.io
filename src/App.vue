<template>
  <div id="app">

    <div id="nav">
      <ul id="menu">
        <li data-menuanchor="About" class="active"><a href="#About">About</a></li>
        <li data-menuanchor="Skills"><a href="#Skills">Skills</a></li>
        <li data-menuanchor="Projects"><a href="#Projects">Projects</a></li>
    </ul>
    </div>

    <full-page :options="options" id="fullpage">
      <div class="section" data-anchor="About">
        <about/>
      </div>
      <div class="section" data-anchor="Skills">
        <skills/>
      </div>
      <div class="section" data-anchor="Projects">
        <projects/>
      </div>
    </full-page>
    
  </div>
</template>

<script>
import about from './views/About';
import skills from './views/Skills';
import projects from './views/Projects';



export default {
  name: 'App',
  data () {
    return {
      options: {
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#menu',
        navigation: true,
        anchors: ['About', 'Skills', 'Projects'],
        sectionsColor: ['#f0ead6', '#ffffff', '#f0ead6'],
        
      },

      index: 0
    };

    
  },
  
  components: {
    about, skills, projects
  },

  methods: {

  }
    
}
</script>

<style>
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #000000;
    }

    #fullpage {
      z-index: 1;
      margin: 0;
      padding: 0;
      
    }

    #app {
      margin: 0;
      padding: 0;
    }

    .section {
      z-index: 200;
      position: relative;
    }

    #selectedSection {
      text-decoration: underline;
    }

    #nav {
      z-index: 200;
      position: absolute;
      height: 40px;
      right: 1.2vw;
      
    }

    #menu a{
      font-size: 1.2em;
      font-family: Verdana, sans-serif;
      text-decoration: none;
    }

    #menu li.active a {
      color: green;
      text-decoration: underline;
    }
    


</style>
