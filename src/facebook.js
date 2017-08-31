//FILE NOT IMPORTED ELSEWHERE
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1918996264988847',
    cookie     : true,
    xfbml      : true,
    version    : '2.9'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

export default FB;
