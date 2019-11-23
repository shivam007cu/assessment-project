$(document).ready(function(){
    
    return getNews();
});



function getNews()
{


    $.ajax({
        url: "https://api.currentsapi.services/v1/search?country=IN"+"&apiKey=-GX-oOnA8wJEOw2LjxdqtopCp9MB0Y_CT6dsCkgwIzs615uR",
        type: "GET",
        dataType: "json",
        success: function(data){

            var table="";

            for(var i=0;i<data.news.length;i++)
            {
                table=table+'<div class="card mb-12" key='+i+'>';
                table=table+'<div class="row"><div class="col-mb-12"style="background-color:#bf80ff">';
                table=table+ '<div class="card-body" > <marquee><h5 class="card-title" style="text-shadow: 2px 2px #ff0000;font-size:40px;">'+data.news[i].title+'</h5></marquee>';
                table=table+ '<p class="card-text" style="font-weight:bold">'+data.news[i].description+' </p>';
                table=table+ '<p class="card-text"> <small class="text-muted" style="color:white"><p >'+data.news[i].author+'</p><p >'+data.news[i].published+'</p></small></p> </div> </div> </div>';
                // table=table+"<tr>";
                // table=table+"<td>"+(i+1)+"</td>";
                // table=table+"<td>"+data.news[i].title+"</td>";
                // table=table+"<td>"+data.news[i].author+"</td>";
                // table=table+"<td>"+data.news[i].published+"</td>";
                // table=table+"<td>"+data.news[i].description+"</td>";
                // table=table+"</tr>";
            }

            $("#output-news").html(table);
         
        }
    });

}



