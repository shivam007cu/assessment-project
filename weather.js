$(document).ready(function(){
    $("#submit-city").click(function(){
        return getCurrentWeather();
    });
});


function getCurrentWeather()
{
    var city=$("#city").val();

    if(city!="")
    {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q='+city+"&units=metric"+"&APPID=b4b313e7003170e60e98e837009b64ab",
            type: "GET",
            dataType: "json",
            success: function(data){
                var output=showWeather(data);
                $("#output-weather").html(output);
                $("#city").val("");
            }
        });
    }
    else
    {
        $("#error").html("<div class='alert alert-danger' id='error-msg'><a href='#' class='close' data-dismiss='alert'>&times;</a>Enter the city!</div>");
    }
}

function showWeather(data)
{

    return  "<h2 style='font-weight: bold; font-size: 40px; padding-top: 30px;' class='text-center'>"+data.name+"</h2><br>"+
            "<h3 style='padding-left: 30px; font-size:30px;' class='text-center'>"+data.main.temp+"&deg;C</h3>"+
            "<h3 style='padding-left: 30px; font-size:30px;' class='text-center'>"+data.weather[0].main+"<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'></h3><hr style='width: 80%;'>"+
            "<h3 style='padding-left: 30px; font-size: 20px;' class='text-center'><strong>Humidity:</strong> "+data.main.humidity+"%</h3>"+
            "<h3 style='padding-left: 30px; font-size: 20px; padding-bottom: 30px;' class='text-center'><strong>Wind Speed:</strong> "+data.wind.speed+" m/sec</h3>";
}