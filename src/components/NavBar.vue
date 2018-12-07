<template>
    <nav class="navbar navbar-dark bg-primary">

        <a class="navbar-brand" href="#">
            <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
             TriviaApp
        </a>
        <button type="button" class="btn btn-light"><router-link to="/chuck">Random</router-link> </button>      
    </nav>
</template>

<script>
import chuckService from './Chuck.vue'
export default {
    
}
</script>
