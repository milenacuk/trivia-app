import Chuck from 'chucknorris-io'

class ChuckService{
    constructor(){
        this.client = new Chuck();
    }

    getRandomJoke(){
        return this.client.getRandomJoke()
        
    }
}
    
const chuckService = new ChuckService();
export default chuckService;