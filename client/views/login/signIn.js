Template.signIn.events({

    'click .signInGoogle' : function(e, t){
      e.preventDefault();
      Meteor.loginWithGoogle(function(err){
        Router.go("home");
        if (err)
          console.log(err);
        else
          console.log("User is logged in with Google");
      });
      return false; 
    },
    'click .signInTwitter' : function(e, t){
      e.preventDefault();
      Meteor.loginWithTwitter(function(err){
        Router.go("home");
        if (err)
          console.log(err);
        else
          console.log("User is logged in with Twitter");
      });
      return false; 
    },
    'click .signInFacebook' : function(e, t){
      e.preventDefault();
      Meteor.loginWithFacebook(function(err){
        Router.go("home");
        if (err)
          console.log(err);
        else
          console.log("User is logged in with Facebook");
      });
      return false; 
    }

  });