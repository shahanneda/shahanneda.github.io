
function showModal(obj){
  $("#project-modal").modal().show();
  let repoName = obj.getAttribute('dataRepoName');

  $.get( "https://raw.githubusercontent.com/shahanneda/" + repoName+ "/master/README.md", function( data ) {
    console.log(repoName);
    console.log(data);
    $(".project-modal-body").html(marked( data));
    $(".modal-title").html(repoName);

    $(".project-modal-body").find("img").each(function (){
      $(this).addClass("projects-img");
    });


    $(".github-button-link").attr("href", "https://github.com/shahanneda/" + repoName);


    console.log(marked('# Test \n **testing**'));
  });
}


$(document).ready(function (){
  $('.navbar-toggler').on("click", function(){ // when clicking the menu button show the menu
    console.log("dd");
    $('.navbar-collapse').toggleClass("show");
  });

  $('.navbar-link').on("click", function(){ // when clicking the menu button show the menu
    console.log("dd");
    $('.navbar-collapse').toggleClass("show");
  });

});



