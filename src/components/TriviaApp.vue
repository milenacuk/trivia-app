<template>
    <div>
        <form @submit.prevent="selectedTrivia" class="dropdown"> 
            <select v-model="trivia.title">
                <option></option>
        <option  v-for="(trivia,index) in getCategoryTrivia" :key="index"> {{ trivia.title}}</option>    
           <!-- <option> {{trivia.title}}</option>             -->
        </select>
    </form>
    <div>
        <h1>Trivia App</h1>
            <ul v-for="trivia in getRandomTrivia" :key="trivia.id" class="list-group">
                <li><strong>Question:</strong> {{trivia.question}}</li>
                <li><strong>answer:</strong> {{trivia.answer}}</li>
        <hr>
            </ul>
    </div>
    
    </div>
</template>

<script>
import {triviaService} from '../services/TriviaService.js'
import { mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return{
            trivia: ''
        }
    },
    created(){
        this.getTrivia(),
        this.getCategory()
    },
    methods: {
        ...mapActions(['getTrivia', 'getCategory'])
    },
    computed: {
        ...mapGetters(['getRandomTrivia', 'getCategoryTrivia'])
    }
}
</script>
