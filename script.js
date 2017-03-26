$(document).ready(function(){


$(".button").on("click", function() {
		var keyWord ="text";
		var linkAPI = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + keyWord + "&callback=?";
		//$(".result").html("Result");
		$.getJSON(linkAPI, function(json) {
			$(".wiki").html(JSON.stringify(json));
		});
	});

	
	

});