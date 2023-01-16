import axios from 'axios';
import ObserverService, {OFFER_CHANGED} from './observer.js'

let instance = null;
var offers = [];

let os = new ObserverService();

class Offers {
    constructor(){
        if (!instance){
            instance = this;
        }
        this.loadData();
        return instance;    
    }


    loadData = () => {
        axios.get('http://localhost:8080/api/all')
        .then((response) => {
            offers = response.data.offers;
            os.postNoti(OFFER_CHANGED, offers);
        })
        .catch((error) => {

        });
    }

    getAll = () => {
        return offers;
    }

    updateOffer = (data) =>{
        offers = data.data.offers;
        os.postNoti(OFFER_CHANGED, offers);
    }

}

export default Offers