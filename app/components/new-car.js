import Ember from 'ember';

export default Ember.Component.extend({
  addNewCar: false,
  actions: {
    showForm(){
      this.set('addNewCar',true);
    },

    saveCar(){
      var params = {
        Name: this.get('name'),
        Model: this.get('model'),
        Color: this.get('color'),
        Price: this.get('price')
      };
      this.set('addNewCar', false);
      this.sendAction('saveCar', params);
    },
  }
});
