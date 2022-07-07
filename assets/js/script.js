//https://api.openweathermap.org/data/2.5/onecall?lat={40.47}&lon={73.58}&exclude={part}&appid={API key}
var nycCall = "https://api.openweathermap.org/data/2.5/onecall?lat=40.47&lon=73.58&exclude=minutely,hourly&appid=d9ddba3de900f79669d3b449fadefd3e"
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

//local storage
var saved_1 = $("#recent1");
saved_1.on("click", function(event) {
      event.preventDefault();
      var searchBTN1 = $("#recent1").val()
      localStorage.setItem("recent1",);
    });

    var saved_2 = $("#recent2");
saved_2.on("click", function(event) {
      event.preventDefault();
      var searchBTN2 = $("#recent2").val()
      localStorage.setItem("recent2",);
    });

    var saved_3 = $("#recent3");
saved_3.on("click", function(event) {
      event.preventDefault();
      var searchBTN3 = $("#recent3").val()
      localStorage.setItem("recent3",);
    });

    var saved_4 = $("#recent4");
saved_4.on("click", function(event) {
      event.preventDefault();
      var searchBTN4 = $("#recent4").val()
      localStorage.setItem("recent4",);
    });

    var saved_5 = $("#recent5");
saved_5.on("click", function(event) {
      event.preventDefault();
      var searchBTN5 = $("#recent5").val()
      localStorage.setItem("recent5",);
    });

    var saved_6 = $("#recent6");
saved_6.on("click", function(event) {
      event.preventDefault();
      var searchBTN6 = $("#recent6").val()
      localStorage.setItem("recent6",);
    });

    var saved_7 = $("#recent7");
saved_7.on("click", function(event) {
      event.preventDefault();
      var searchBTN7 = $("#recent7").val()
      localStorage.setItem("recent7",);
    });

    var saved_8 = $("#recent8");
saved_8.on("click", function(event) {
      event.preventDefault();
      var searchBTN8 = $("#recent8").val()
      localStorage.setItem("recent8",);
    });

   