window.onload = function() {
	function getQuote() {
		fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
		  	.then(function(response) {
		    	return response.json();
			})
			.then(function(myJson) {
		    	console.log(myJson);
		    	showQuote(myJson);
			});
	};


	var myQuote = document.querySelector('.getquote');
	myQuote.addEventListener("click", function() {getQuote()});

	var quoteDiv = document.getElementById('quote');
		function showQuote(quote) {
			quoteDiv.innerHTML = '"' + quote + '"';
		}

	var tweet = document.querySelector('.twitter');
	tweet.addEventListener("click", function(quote){
		var tweetURL = 'https://twitter.com/intent/tweet?text=' + quoteDiv.innerHTML;
	  	window.open(tweetURL,'_blank');
	}, false);

	// var facebook = document.querySelector('.facebook');
	// facebook.addEventListener("click", function(quote){
	// 	var facebookURL = 'https://www.facebook.com/sharer/sharer.php?u=example.org';
	//   	window.open(facebookURL,'_blank');
	// }, false);

	var facebook = document.querySelector('.facebook');
	facebook.addEventListener("click", function(){
		FB.ui({
  		method: 'share',
  		href: 'https://developers.facebook.com/docs/',
  		quote: quoteDiv.innerHTML,
		}, function(response){});
	}, false);
};