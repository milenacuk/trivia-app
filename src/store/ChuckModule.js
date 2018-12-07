import chuckService from '../services/ChuckService.js'

const chuckModule = {
    state: {
        joke: ''
    },
    actions: {
        async joke ({ commit }){
            try{
                const respose = await chuckService.getRandomJoke()
                
                    commit('RANDOM', response)
                    return response;                                  
            }catch(error){
                console.log(error)
            }
        }
    },
    mutations: {
        RANDOM(state, joke){
            state.joke = joke;
        }
    },
    getters: {
        returnJoke(state){
            return state.joke;
        }
    }

};

export { chuckModule };