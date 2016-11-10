import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    deletePost(Post){
      var postId = Post.get('id');
      var self = this;
      this.get('store').findRecord('posts', postId, { backgroundReload: false }).then(function(post) {
        post.deleteRecord();
        post.get('isDeleted'); // => true
        post.save().then(function(){
          self.transitionToRoute('admin');
        }); 

      });
    },
    updatePost(Post){

      Post.save();

    }
  }

});
