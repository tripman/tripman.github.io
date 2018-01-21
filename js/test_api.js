
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.yelp.com/v3/businesses/search", false);
xhr.send({
	"term": "food",
	"location": "San Francisco"
});

console.log(xhr.status);
console.log(xhr.response);
console.log(xhr.statusText);