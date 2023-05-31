
var expirationTime = 24*60*60*1000; // a day as expiration time;
var cacheKey = "data";

function getDataFromApi(){
    const response = fetch("https://swapi.dev/api/planets/1/");
    const jsonData = JSON.parse(response);
}
function viewData(){
    var cachedTime = localStorage.getItem(cacheKey +"time");
    if(Date.now()-cachedTime <= expirationTime){
        $(p).text = localStorage.getItem(cacheKey);
    }
    else{
        $(p).text = jsonData;
    }
}
function saveData(){
    localStorage.setItem(cacheKey, jsonData);
    localStorage.setItem(cachekey + "time", Date.now());
}
