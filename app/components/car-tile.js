import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(car, params) {
      this.sendAction('update', car, params);
    },
    delete(car){
      if (confirm("Are you sure?")) {
        this.sendAction('destroyCar', car);
      }
    }
  }
});
