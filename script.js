
  async function apisearch(namecoun)
  {
     const response = await fetch('https://newsapi.org/v2/top-headlines?country='+namecoun+'&apiKey=5078df9e54c54b4da1ba5d54a5c18dfe');
 const myJson = await response.json();
 
  var apidata=myJson
  var data='';
  console.log(myJson);
  for(var i=0;i<10;i++)
  {
    data=data+'<div class="card mb-4" key='+i+'><div class="row"><div class="col-md-4"> <img class="card-img" src='+apidata.articles[i].urlToImage+' /> </div> <div class="col-md-8"> <div class="card-body"> <h5 class="card-title">'+apidata.articles[i].title+'</h5> <p class="card-text">'+apidata.articles[i].description+' </p> <p class="card-text"> <small class="text-muted"><a href="'+apidata.articles[i].urlToImage+'">Read</a></small></p> </div> </div> </div>';
  }
  document.getElementById('newsheadline').innerHTML="<input type='hidden' id='count' value="+namecoun+" /><center><h1>LATEST NEWS</h1></center><br>"+data;
  }
 
  
  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });
  