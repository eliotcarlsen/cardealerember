import DS from 'ember-data';

export default DS.Model.extend({
  Name: DS.attr(),
  Model: DS.attr(),
  Color: DS.attr(),
  Price: DS.attr(),
});
