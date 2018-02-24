
$(document).ready(function(){
	$('#search-box').keyup(function(){
		var queary = $('#search-box').val();
		if(queary == ""){
			queary = "shahan nedadahandeh"
		}
		console.log(queary);
		getRequest(queary);


	});


	$("").click(function(){




	});


	$(document).delegate('.videoListing', 'click', function()
	{
	
		var string = 'https://www.youtube.com/embed/'+ $(this).data("id") + "?&showinfo=0&modestbranding=1&autoplay=1&loop=1&playlist="+$(this).data("id");
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
    var html = "";
    var entries = results.items;
    console.log(entries)
    $.each(entries, function (index, value) {
        var title = value.snippet.title;
        var id = value.id.videoId;
        var thumbnail = value.snippet.thumbnails.default.url;
        html += '<div class="videoListing" data-id="'+ id +'">'
        html += '<p class="videoTitle">' + title + '</p>';
        html += '<img src="' + thumbnail + '">';
        html +=	'</div>'
    }); 
    
    $('#search-results').html(html);
}