import  {triviaService}  from '../services/TriviaService.js'
// import TriviaService from "../services/TriviaService";
const triviaModule = {
state: {
        trivia: [],
        category: [],
        listTrivia: []
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
                console.log({ cat })
                commit('GET_CATEGORY', cat)
            }
            catch(error){
                console.log(error)
            }
        },
        async getList({ commit }, id){
            try{
                commit('GET_LIST_TRIVIA',await triviaService.getListTrivia(id))
            }
            catch(error){
                console.log(error)
            }
        }
    },
    mutations:{
        RANDOM_TRIVIA(state, triviaResponse){
            state.trivia = triviaResponse;
        },
        GET_CATEGORY(state,categoryResponse){
            state.category = categoryResponse;
        },
        GET_LIST_TRIVIA(state, listResponse){
            state.listTrivia = listResponse;
        }
    },
    getters: {
        getRandomTrivia: state => state.trivia,
        getCategoryTrivia: state => state.category,
        getTriviaGetters: state => state.listTrivia
        
    }
};

export { triviaModule };