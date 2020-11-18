var api = 'https://api.giphy.com/v1/gifs/search?';//link to the api library
var apiKey = '&api_key=dc6zaTOxFJmzC'; //public key
var query = '&q=jojo+memes';//gifs

function setup() {
  noCanvas();
  var url = api + apiKey + query; //combines the variables
  loadJSON(url, gotData); //loads the values
}



//receives the data
function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }
}
