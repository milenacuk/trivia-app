<template>
    <div>
         <div>
        <br>
        <form @submit.prevent="getTrivia(trivia)" class="dropdown"> 
            <div class="container">
            <select v-model="trivia " class="custom-select">
                <option></option>
        <option  v-for="(trivia,index) in getCategoryTrivia" :key="index" :value="trivia">
            {{ trivia.title }}
        </option>              
        </select>
        </div>
        <br>
        <button type="submit" class="btn btn-outline-secondary" >Submit</button>
    </form>
    
    </div>
        <div>
        <h1>Trivia App</h1>
            <ul v-for="trivia in getRandomTrivia" :key="trivia.id" class="list-group">
                <li><strong>Question:</strong> {{trivia.question}}</li>
                <li>
                    <button @click="answer(trivia.answer)" class="btn btn-outline-success">Clic for Answer</button>
                </li>
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
        this.getCategory(),
        this.getList()
    },
    methods: {
        ...mapActions(['getTrivia', 'getCategory', 'getList']),
        answer(answer){
            alert(answer)
        }
    },
    computed: {
        ...mapGetters(['getRandomTrivia', 'getCategoryTrivia'])
    }
}
</script>
