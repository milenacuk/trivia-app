import chuckService from '../services/ChuckService.js'

const chuckModule = {
    state: {
        joke: '',
        categories: []
    },
    actions: {
        async getJoke ({ commit }, category){
            try{
                // const response = await chuckService.getRandomJoke(category)
                               
                commit('RANDOM', await chuckService.getRandomJoke(category))                                 
            }catch(error){
                console.log(error)
            }
        },
        async getCategories ({ commit }){
            try {
                commit('SET_CATEGORIES', await chuckService.getCategories())
            }
            catch(error){
                console.log(error)
            }
        }
    },
    mutations: {
        //ovde je state gore state joke, a joke State je response
        RANDOM(state, jokeState){
            state.joke = jokeState;
        },
        SET_CATEGORIES(state, categories){
            state.categories = categories;
        }
    },
    getters: {
        returnJoke(state){
            return state.joke;
        },
        returnCategories(state){
            return state.categories;
        }
    }

};

export { chuckModule };