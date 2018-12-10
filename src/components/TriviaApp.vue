<template>
    <div>
        <h1>Trivia App</h1>
     <ul v-for="trivia in getRandomTrivia" :key="trivia.id" class="list-group">
      <li><strong>Question:</strong> {{trivia.question}}</li>
      <li><strong>answer:</strong> {{trivia.answer}}</li>
      <hr>
    </ul>
       
    </div>
</template>

<script>
import {triviaService} from '../services/TriviaService.js'
import { mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return{

        }
    },
    created(){
        this.getTrivia()
    },
    methods: {
        ...mapActions(['getTrivia'])
    },
    computed: {
        ...mapGetters(['getRandomTrivia'])
    }
}
</script>
