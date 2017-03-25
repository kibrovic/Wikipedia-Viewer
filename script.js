$(document).ready(function(){

	function search(){
		$getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&continue=gsroffset%7C%7C&generator=search&gsrsearch=Irma&gsrlimit=10&gsroffset=10&gsrprop=snippet%7Csectiontitle", function(data){
			$(".wiki").html(JSON.stringify(data));
		});
	}

	$.ajax({
		type: "GET",
		url: "https://en.wikipedia.org/w/api.php?action=query&format=json&continue=gsroffset%7C%7C&generator=search&gsrsearch=Irma&gsrlimit=10&gsroffset=10&gsrprop=snippet%7Csectiontitle",
		success: function(data, jqXHR){
			console.log(data);
		}
	});

});