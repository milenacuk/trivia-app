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
    getListTrivia(category, id){
        return axios.get('category',{
            params: { id: id}
        })
    }
 }
 export const triviaService = new TriviaService();