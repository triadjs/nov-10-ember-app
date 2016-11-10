import DS from 'ember-data';

export default DS.Model.extend({
  postTitle: DS.attr(),
  postContent: DS.attr(),
  createdAt: DS.attr(),
  updatedAte: DS.attr(),
  created: Ember.computed('createdAt', function(){
    let date = this.get('createdAt');
    date = new Date(date);
    return date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  })
});
