import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function(){
    this.route('new', {path: '/post/new'});
    this.route('post', {path: '/post/:id'});
  });
});

export default Router;
