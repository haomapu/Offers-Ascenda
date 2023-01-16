export const OFFER_CHANGED = "offer_changed"

var observers = {};
let instance = null;

class ObserverService{
    constructor(){
        if (!instance){
            instance = this;
        }
        return instance;
    }

    postNoti = (name, data) => {
        let obs = observers[name];
        for (let i = 0; i < obs.length; i++){
            let obj = obs[i];
            obj.callBack(data);
        }
    }

    removeObserver = (observer, name) => {
        var obs = observers[name];

        if (obs) {
            for (let i = 0; i < obs.length; i++){
                if (observer === obs[i].observer){
                    observers.splice(i, 1);
                    observers[name] = obs;
                    break;
                }
                
            }
        }
    }

    addObserver = (name, observer, callBack) => {
        let obs = observers[name];
        if (!obs){
            observers[name] = [];
        }

        let obj = {observer: observer, callBack: callBack};
        observers[name].push(obj);
    }
}

export default ObserverService