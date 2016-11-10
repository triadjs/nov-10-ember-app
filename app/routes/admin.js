import Ember from 'ember';

export default Ember.Route.extend({

  model(){

    return Ember.RSVP.hash({
      posts: this.get('store').findAll('posts')
    });

  },
  setupController(controller, model) {
    Ember.set(controller, 'posts', model.posts);
  }
});


