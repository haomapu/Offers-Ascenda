import apiService from "../services/api.service.js";

const offerController = {
    getAllOffer: async (req, res) => {     
        const result = await apiService.fetchAPI();
        res.render("home",{
            offers: result,
        })
    },

    apiAll: async (req, res) => {     
        const result = await apiService.fetchAPI();
        res.send(result)
    },

    getFilterOffer: async (req, res) => {
        let fetch = await apiService.fetchAPI();
        let date = new Date('2020-04-12');
        let offers = fetch.offers;
        const oneDay = 86400000;
        for (let i = 0; i < offers.length; i++){
            if (offers[i].category === 3){
                offers.splice(i, 1);
                i--;
                continue;
            }

            if (new Date(offers[i].valid_to).getTime() - date.getTime() < oneDay * 5){
                offers.splice(i, 1);
                i--;
                continue;
            }
            if (offers[i].merchants.length >= 2){
                offers[i].merchants.sort((a, b) => a.distance - b.distance)
                offers[i].merchants.splice(1, offers[i].merchants.length);
                continue;
            }
        }

        offers.sort((first, second) =>  {
            return first.merchants[0].distance - second.merchants[0].distance
        })

        const result = []

        result.push(offers[0])

        for (let i = 1; i < offers.length;i++){
            if (offers[i].category !== offers[0].category){
                result.push(offers[i])
                break;
            }
        }
        const resOffers = {
            offers: result
        }
        res.render("home", {
            offers: resOffers
        });        
    },
    
    apiFilter: async (req, res) => {
        let fetch = await apiService.fetchAPI();
        let date = new Date('2020-04-12');
        let offers = fetch.offers;
        const oneDay = 86400000;
        for (let i = 0; i < offers.length; i++){
            if (offers[i].category === 3){
                offers.splice(i, 1);
                i--;
                continue;
            }

            if (new Date(offers[i].valid_to).getTime() - date.getTime() < oneDay * 5){
                offers.splice(i, 1);
                i--;
                continue;
            }
            if (offers[i].merchants.length >= 2){
                offers[i].merchants.sort((a, b) => a.distance - b.distance)
                offers[i].merchants.splice(1, offers[i].merchants.length);
                continue;
            }
        }

        offers.sort((first, second) =>  {
            return first.merchants[0].distance - second.merchants[0].distance
        })

        const result = []

        result.push(offers[0])

        for (let i = 1; i < offers.length;i++){
            if (offers[i].category !== offers[0].category){
                result.push(offers[i])
                break;
            }
        }

        res.send({offers: result});        
    }
}

export default offerController;