<template>   
    <div>      
                
        <p class="align-top"> {{ joke.value }} </p>  
        <form @submit.prevent="getJoke(category)">
            <div class="container">
                    <select v-model="category" class="custom-select">                       
                        <option 
                            v-for="(category, index) in categories" 
                            :key="index" 
                            :value="category"
                        >
                            {{ category }}
                        </option>
                       
                    </select>
                     </div>
                     <br>
                    <button class="btn btn-outline-primary" type="submit">
                        Get New Joke
                    </button>
                </form>
      </div>
</template>
 <script>

import { mapGetters, mapActions } from 'vuex'
import chuckService from '../services/ChuckService.js'
 export default {
    data(){
        return{
            category: ''
        }
    },
     
        beforeRouteEnter(to,from,next){
                next(vm => {                               
                        vm.$store.dispatch('getJoke'),
                        vm.$store.dispatch('getCategories')                       
                })    
        },
         
    
    computed: {            
        ...mapGetters({
            joke: "returnJoke",
            categories :'returnCategories'
        })           
        },
        methods: {
            ...mapActions([
                'getJoke', 'getCategories'
            ])
        }                   
        
        
    }
 </script>
