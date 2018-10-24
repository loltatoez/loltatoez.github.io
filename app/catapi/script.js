function getCat(){
 // Cat API link http://aws.random.cat/meow 
  var httpreq = new XMLHttpRequest(); // Initilize the request
  httpreq.onreadystatechange = function() { // Where to put the code
    if (this.readyState == 4 && this.status == 200) { // Make sure there isn't any errors
      var response = JSON.parse(this.responseText);
      var imgLink = response.file;
      //console.log(imgLink);
      
      document.getElementById('temp').innerHTML = imgLink;
    }
  };
  httpreq.open('GET', 'http://aws.random.cat/meow', true);
  httpreq.send();
}
