<html>
  <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '221165111427900',
      xfbml      : true,
      version    : 'v2.8'
    });

   function onLogin(response) {
  if (response.status == 'connected') {
    FB.api('/me?fields=first_name', function(data) {
      var welcomeBlock = document.getElementById('fb-welcome');
      welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
    });
  }
}

FB.getLoginStatus(function(response) {
  // Check login status on load, and if the user is
  // already logged in, go directly to the welcome message.
  if (response.status == 'connected') {
    onLogin(response);
  } else {
    // Otherwise, show Login dialog first.
    FB.login(function(response) {
      onLogin(response);
    }, {scope: 'user_friends, email'});
  }
});
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
  
<head>
  
<meta http-equiv="Refresh" content="0;url=https://kamillustore.blogspot.com/">
</head>
 <!--<center>
<a href="https://www.facebook.com/dialog/pagetab?app_id=221165111427900&amp;next=https://apps.facebook.com/kamillustore" target="_blank">
<span style="font-size: small;">Agregar a Mi Página de Facebook</span></a></center>-->

</html>
