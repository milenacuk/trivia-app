<template>
    <div>{{ joke }}</div>
</template>

<script>
import { mapGetters } from 'vuex'
import chuckService from '../services/ChuckService.js'

export default {    
        beforeRouteEnter(to,from,next){
                next(vm => {         
                        vm.$store.dispatch('joke')
                })    
        },
             
    computed: {
        joke() {
            return this.$store.getters.returnJoke;
        }
        
            // this.$store.getters.returnJoke
        }
    }

</script>
