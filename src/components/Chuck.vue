<template>
    
</template>

<script>
import { mapGetters } from 'vuex'
import chuckService from '../services/ChuckService.js'

export default {
     created(){
        chuckService.getRandomJoke()
        .then((response)=> {
            console.log(response)
        })
    }
}
</script>
