
$(document).ready(function(){
	$('#search').keyup(function(){
		var queary = $('#search').val();
		if(queary == ""){
			queary = "shahan nedadahandeh"
		}
		console.log(queary);
		getRequest(queary);


	});


	$("").click(function(){




	});


	$("#search-results").on("click",".videoListing", function(){

		var id =  $(this).children("div").attr("data-id");
		var string = 'https://www.youtube.com/embed/'+ id + "?&showinfo=0&modestbranding=1&autoplay=1&loop=1&playlist="+id;
		$('#ytplayer').attr('src', string)
	});

});


function getRequest(searchTerm) {
    url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: 'AIzaSyAJHlbDZ1FoBMVOpCzKzFsbSVYB2S2sV1M',
        q: searchTerm,
        type:'video'
    };

    $.getJSON(url, params, function (searchTerm) {
        showResults(searchTerm);
    });
}

function showResults(results) {
    var html = '<div class="row">';
    var entries = results.items;
    console.log(entries)

    $.each(entries, function (index, value) {
        var title = value.snippet.title;
        var id = value.id.videoId;
        var thumbnail = value.snippet.thumbnails.default.url;
				var description = value.snippet.description;
				if(title.length > 40){

				}

					html +='<div class="col s12 m6 l3 videoListing">\
					<div class="card hoverable " data-id='+id+'>\
					<div class="card-image">\
				<img src="'+thumbnail+'">\
						<span class="card-title  blue lighten-2 truncate">'+title+'</span>\
					</div>\
					<div class="card-content">\
						<p class="">'+description+'</p>\
					</div>\
				</div></div>'




        // html += '<div class="videoListing" data-id="'+ id +'">'
        // html += '<p class="videoTitle">' + title + '</p>';
        // html += '<img class="videoImage" src="' + thumbnail + '">';
        // html +=	'</div>'
    });
		html+="</div>"
    $('#search-results').html(html);
}
