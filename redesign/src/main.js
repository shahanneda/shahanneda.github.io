
function showModal(obj){
  $("#project-modal").modal().show();
  let repoName = obj.getAttribute('dataRepoName');

  $.get( "https://raw.githubusercontent.com/shahanneda/" + repoName+ "/master/README.md", function( data ) {
    console.log(repoName);
    console.log(data);
    $(".project-modal-body").html(marked( data));
    $(".modal-title").html(repoName);
    console.log(marked('# Test \n **testing**'));
  });
}
