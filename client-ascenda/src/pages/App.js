import Offers from '../services/offers.js'
import React, { Component } from 'react';
import Offer from '../components/offer/offer.js'
import DateForm from '../components/dateForm/dateForm.js';
import ObserverService, {OFFER_CHANGED} from '../services/observer.js';
const offers = new Offers();

let os = new ObserverService();

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {offers: []};    
    this.loadData();

  }

  componentDidMount() {
    this.loadData = this.loadData.bind(this);
    this.offersList = this.offersList.bind(this);
    this.onOfferChanged = this.onOfferChanged.bind(this);
    os.addObserver(OFFER_CHANGED, this, this.onOfferChanged);
  }
  componentWillUnmount(){
    os.removeObserver(this, OFFER_CHANGED);
  }
  loadData = async () => {
    
  }

  onOfferChanged(newOffers){
    this.setState({offers: newOffers})

  }

  offersList = () => {
    const list = this.state.offers.map((offer) =>
      <div key={offer.id}>
        <Offer title={offer.title} description={offer.description} merchants={offer.merchants} valid_to={offer.valid_to}/>
      </div>
    );    
    return list;
  }

  render() {
    return (
      <div className="container">
        
        <DateForm offers={offers}/>
        {this.offersList()}
    



    </div>
    )
    
  };
}

export default App;
