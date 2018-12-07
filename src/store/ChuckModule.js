import chuckService from '../services/ChuckService.js'

const chuckModule = {
    state: {
        joke: ''
    },
    actions: {
        async joke ({ commit }){
            try{
                const response = await chuckService.getRandomJoke()
                               
                commit('RANDOM', response)                                 
            }catch(error){
                console.log(error)
            }
        }
    },
    mutations: {
        RANDOM(state, joke){
            state.joke = joke.value;
        }
    },
    getters: {
        returnJoke(state){
            return state.joke;
        }
    }

};

export { chuckModule };