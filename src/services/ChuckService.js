import Chuck from 'chucknorris-io'

class ChuckService{
    constructor(){
        this.client = new Chuck();
    }

    getRandomJoke(category){
        return this.client.getRandomJoke(category)
        
    }
    getCategories(){
        return this.client.getJokeCategories();
    }
    
}
    
const chuckService = new ChuckService();
export default chuckService;