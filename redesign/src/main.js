let repos;

function showModal(obj){
  $("#project-modal").modal().show();
  let repoName = obj.getAttribute('dataRepoName');
  $(".github-button-link").show();

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


function showLangModal(obj){
  $("#project-modal").modal().show();
  $(".github-button-link").hide();

  let langName = obj.getAttribute('dataLangName');

  let projects = repos.get(langName).sort(compareProjectsByDate).reverse(); // sort with custom thing for the date and reverse
  let futureHtml = "<div class='language-modal-list-container'>"


  for(let project of projects){

    let description = project.description  == null? "" : project.description;

    futureHtml += `<a href="${project.html_url}" target="_blank"> <div class="card card-body lang-project-card">\
    <h3 class="lang-project-card-title">${project.name}</h3> <p>${description} </p></div> </a>`;
  }
  futureHtml += "</div>";
  $(".modal-title").html(langName);
  $(".project-modal-body").html(futureHtml);
  

}


$(document).ready(function (){

  // NOTE: in the future, if i exceed 100 repos, I need to add a loop here to go through the different pages, by adding &page=2 or 3 or whatever
  repos = new Map();
  $.get("https://api.github.com/users/shahanneda/repos?per_page=100", function(data) {
    for(let i in data){
      let lang = data[i].language;
      if(lang == null){
        continue;
      }
      if(repos.has(lang)){
        repos.get(lang).push(data[i]);
      }else{
        repos.set(lang, [data[i]]);
      }
    }
  });

  $('.navbar-toggler').on("click", function(){ // when clicking the menu button show the menu
    console.log("dd");
    $('.navbar-collapse').toggleClass("show");
  });

  $('.navbar-link').on("click", function(){ // when clicking the menu button show the menu
    console.log("dd");
    $('.navbar-collapse').toggleClass("show");
  });


  $('#project-modal').on('hidden.bs.modal', function(){
  });
});


function compareProjectsByDate( a, b ) {
  let aDate = new Date(a.pushed_at);
  let bDate = new Date(b.pushed_at);
  if ( aDate< bDate ){
    return -1;
  }
  if ( aDate > bDate){
    return 1;
  }
  return 0;
}

