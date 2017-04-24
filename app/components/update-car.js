import Ember from 'ember';

export default Ember.Component.extend({
  updateCarForm: false,
  actions: {
    updateCarForm() {
      this.set('updateCarForm', true);
    },
    update(car) {
      console.log("update-car.js")
      var params = {
        Name: this.get('name'),
        Model: this.get('model'),
        Color: this.get('color'),
        Price: this.get('price'),
      };
      this.set('updateCarForm', false);
      this.sendAction('update', car, params);
    }
  }
});
