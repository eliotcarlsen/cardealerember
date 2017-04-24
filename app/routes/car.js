import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('car', params.car_id);
  },
  actions:{
    update(car, params) {
      console.log("index.js");
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          car.set(key,params[key]);
        }
      });
      car.save();
      this.transitionTo('car');
    },
  }
});
