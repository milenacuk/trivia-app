import  {triviaService}  from '../services/TriviaService.js'
// import TriviaService from "../services/TriviaService";
const triviaModule = {
state: {
        trivia: [],
        category: []
       
    },
    actions: {
       
        async getTrivia({ commit }){
            try{
            commit('RANDOM_TRIVIA', await triviaService.getRandom())
        }
        catch(error){
            console.log(error)
        }
        },
        async getCategory( { commit }){
            try{
                const cat = await triviaService.getCategory()
                // console.log({ cat })
                commit('GET_CATEGORY', cat)
            }
            catch(error){
                console.log(error)
            }
        },
        async getList({ commit }, id){
            try{
                commit('RANDOM_TRIVIA',await triviaService.getListTrivia(id))
            }
            catch(error){
                console.log(error)
            }
        }
    },
    mutations:{
        RANDOM_TRIVIA(state, triviaResponse){
            state.trivia=[];
            state.trivia = triviaResponse;
        },
        GET_CATEGORY(state,categoryResponse){
            state.category = categoryResponse;
        }
    },
    getters: {
        getRandomTrivia: state => state.trivia,
        getCategoryTrivia: state => state.category,
        
        
    }
};

export { triviaModule };