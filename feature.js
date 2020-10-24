document.ready, function(){
    var queryUrl ="https://api.nasa.gov/planetary/apod?api_key="+ apiKey;
    var apiKey ="gYo6aP2v2kURjJFrRdzO4eOvx79sGG3ngPwy2USO";

}
$ajax({
      url: queryUrl,   
      method: "GET"
}).then (function(response){
    console.log(response)
});




req.addEventListener("load", function(){
	if(req.status == 100 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})
