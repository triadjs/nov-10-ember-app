import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    createNewPost(){

      let { postTitle, postContent } = this.getProperties('postTitle', 'postContent');

      var newPost = this.get('store').createRecord('posts', {
        postTitle: postTitle,
        postContent: postContent
      });

      this.set('postTitle', '');
      this.set('postContent', '');

      newPost.save();
      
    }
  }

});
