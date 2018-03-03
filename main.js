 window.onload = function() {

	function getQuote() {
		fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
		  	.then(function(response) {
		    	return response.json();
			})
			.then(function(myJson) {
		    	console.log(myJson);
		    	showQuote(myJson);
		    	return myJson;
		    })
		    .then(function(myJson){
		    	var tweet = document.querySelector('.twitter');
				tweet.addEventListener("click", function(quote){
					var tweetURL = 'https://twitter.com/intent/tweet?text="' + myJson + '"';
				  	window.open(tweetURL,'_blank');
				}, false);
				return myJson;
		    })
		    .then(function(myJson){
				var facebook = document.querySelector('.facebook');
				facebook.addEventListener("click", function(){
					FB.ui({
			  		method: 'share',
			  		href: 'https://developers.facebook.com/docs/',
			  		quote: quoteDiv.innerHTML,
					}, function(response){});
				}, false);
		    })
	};

	getQuote();
	
	var myQuote = document.querySelector('.getquote');
	myQuote.addEventListener("click", function() {getQuote()});

	var quoteDiv = document.getElementById('quote');
	function showQuote(quote) {
		quoteDiv.innerHTML = '"' + quote + '"';
	}
};