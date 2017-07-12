$(document).ready(function(){
	
		//press enter
	$("#search-box").keypress(function(key){
		if (key.which==13){
			var value = $( this ).val();
			$(".wiki").html("");

			//ajax
			$.ajax({
				url: "https://en.wikipedia.org/w/api.php",
				data: {
					"action": "query",
					"format": "json",
					"prop": "extracts",
					"indexpageids": 1,
					"generator": "search",
					"exchars": "400",
					"exlimit": "max",
					"exintro": 1,
					"gsrsearch": value,
				},
				dataType: "jsonp",
				success: function(data){

					for (var count=0; count<data.query.pageids.length; count++){
						var index=data.query.pageids[count];

						var titleResult = '<div  class="title"><a target="_blank" href="https://en.wikipedia.org/wiki/'+data.query.pages[index].title+'">'+data.query.pages[index].title+'</a></div>';
						//document.querySelector(".result").insertAdjacentHTML('beforeend', titleResult);

						var textResult = '<div class="text"><a target="_blank" href="https://en.wikipedia.org/wiki/'+data.query.pages[index].title+'">'+data.query.pages[index].extract+'</a></div>';
						//document.querySelector(".result").insertAdjacentHTML('beforeend', textResult);

						var result = '<div class="result hidden">'+ titleResult +'<br>'+ textResult +'</div>';
						document.querySelector(".wiki").insertAdjacentHTML('beforeend', result);

						$(".hidden").fadeIn(700);

						// hide it then use jquery fade in effect
						//$(".wiki").html(data.query.pages[index].title); // test if it works
					}
				}
			}); //end ajax
			
			

			

		} //end if

		
	});
 
	

});