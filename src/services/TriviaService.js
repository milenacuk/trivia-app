import axios from 'axios'
 export default class TriviaService {
    constructor() {
        axios.defaults.baseURL = 'http://jservice.io/api/'
    }
    // getRandom(){
    //     return axios.get('random/',{params: {count: 30}})
    // }
    async getRandom() {
        try {
            const response = await axios.get('random/',{
                params: {count:30}
            })
            return response.data;
        }
        catch(error) {
            console.log(error)
        }
    }
    async getCategory(){
        try{
            const response = await axios.get('categories',{
                params: { count:10}
            })
            return response.data
        }
        catch(error){
            console.log(error)
        }
    }
    async getListTrivia(id){
        try{
            const response = await axios.get('category/', {
            params: {id: id}
        })
        return response.date.clues
        }
        catch(error){
            console.log(error)
        }
        
    }
 }
 export const triviaService = new TriviaService();