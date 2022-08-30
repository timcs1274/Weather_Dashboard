var city="";
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty= $("#humidity");
var currentWSpeed=$("#wind-speed");
var currentUvindex= $("#uv-index");

var APIKey="d9ddba3de900f79669d3b449fadefd3e";

function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}

function currentWeather(city){
  var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
  $.ajax({
      url:queryURL,
      method:"GET",
  }).then(function(response){
      console.log(response);
      
      var weathericon= response.weather[0].icon;
      var iconurl="https://openweathermap.org/img/wn/"+weathericon +"@2x.png";
      var date=new Date(response.dt*1000).toLocaleDateString();
      $(currentCity).html(response.name +"("+date+")" + "<img src="+iconurl+">");
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;
      $(currentTemperature).html((tempF).toFixed(2)+"&#8457");
      $(currentHumidty).html(response.main.humidity+"%");
      var ws=response.wind.speed;
      var windsmph=(ws*2.237).toFixed(1);
      $(currentWSpeed).html(windsmph+"MPH");

      UVIndex(response.coord.lon,response.coord.lat);
      forecast(response.id);
      if(response.cod==200){
          sCity=JSON.parse(localStorage.getItem("cityname"));
          console.log(sCity);
          if (sCity==null){
              sCity=[];
              sCity.push(city.toUpperCase()
              );
              localStorage.setItem("cityname",JSON.stringify(sCity));
              addToList(city);
          }
          else {
              if(find(city)>0){
                  sCity.push(city.toUpperCase());
                  localStorage.setItem("cityname",JSON.stringify(sCity));
                  addToList(city);
              }
          }
      }

      function UVIndex(ln,lt){
        var uvqURL="https://api.openweathermap.org/data/2.5/uvi?appid="+ APIKey+"&lat="+lt+"&lon="+ln;
        $.ajax({
                url:uvqURL,
                method:"GET"
                }).then(function(response){
                    $(currentUvindex).html(response.value);
                });
    }
      
  });
}

function forecast(cityid){
  var queryforcastURL="https://api.openweathermap.org/data/2.5/forecast?id="+cityid+"&appid="+APIKey;
  $.ajax({
      url:queryforcastURL,
      method:"GET"
  }).then(function(response){
      
      for (i=0;i<5;i++){
          var date= new Date((response.list[((i+1)*8)-1].dt)*1000).toLocaleDateString();
          var iconcode= response.list[((i+1)*8)-1].weather[0].icon;
          var iconurl="https://openweathermap.org/img/wn/"+iconcode+".png";
          var tempK= response.list[((i+1)*8)-1].main.temp;
          var tempF=(((tempK-273.5)*1.80)+32).toFixed(2);
          var humidity= response.list[((i+1)*8)-1].main.humidity;
      
          $("#fDate"+i).html(date);
          $("#fImg"+i).html("<img src="+iconurl+">");
          $("#fTemp"+i).html(tempF+"&#8457");
          $("#fHumidity"+i).html(humidity+"%");
      }
  });
}

$("#search-button").on("click",displayWeather);