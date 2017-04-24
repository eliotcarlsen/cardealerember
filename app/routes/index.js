import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('car');
  },
  actions: {
    saveCar(params){
      var newCar = this.store.createRecord('car', params);
      newCar.save();
      this.transitionTo('index');
    },

    destroyCar(car){
      car.destroyRecord();
      this.transitionTo('index');
    },
  }
});
