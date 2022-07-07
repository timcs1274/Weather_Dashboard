//https://api.openweathermap.org/data/2.5/onecall?lat={40.47}&lon={73.58}&exclude={part}&appid={API key}
var nycCall = "https://api.openweathermap.org/data/2.5/onecall?lat=40.47&lon=73.58&exclude={part}&appid=d9ddba3de900f79669d3b449fadefd3e"
console.log(nycCall)




//uv index color change
var uvValue = ""
for (i = 0; i <=2;){    
    if (uvValue) {
        $("#uv-index-container").addClass("uv-low");
    } else if (uvValue <=5) {
        $("#uv-index-container").addClass("uv-moderate");
    }
    else if (uvValue>5) {
        $("#uv-index-container").addClass("uv-high");
    }
}