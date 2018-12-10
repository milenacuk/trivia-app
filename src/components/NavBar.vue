<template>
    <nav class="navbar navbar-dark bg-primary">

        <router-link class="navbar-brand" to="trivia-app">
            <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
             TriviaApp
        </router-link>
        <router-link class="navbar-brand" to="/chuck">Random</router-link>      
    </nav>
</template>

<script>
import chuckService from './Chuck.vue'
export default {
    
}
</script>
