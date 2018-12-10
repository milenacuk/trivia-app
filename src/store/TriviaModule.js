import  {triviaService}  from '../services/TriviaService.js'
// import TriviaService from "../services/TriviaService";
const triviaModule = {
state: {
        trivia: []
    },
    actions: {
       
        async getTrivia({ commit }){
            try{
            commit('RANDOM_TRIVIA', await triviaService.getRandom())
        }
        catch(error){
            console.log(error)
        }
        }
    },
    mutations:{
        RANDOM_TRIVIA(state, triviaResponse){
            state.trivia = triviaResponse;
        }
    },
    getters: {
        getRandomTrivia: state => state.trivia
        
    }
};

export { triviaModule };