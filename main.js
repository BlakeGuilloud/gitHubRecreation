/////////////////// APPENDING BASIC DATA //////////////////


$('.profilePic').append('<img src="' + user.avatar_url + '">');
$('.name').append("<h3>" + user.name  + "</h3>");
$('.username').append(user.login);

$('.location').append("<span class='octicon octicon-location'></span>" + " " + user.location);
$('.email').append("<span class='octicon octicon-mail'></span>"+ " " + "<a href = ''>" + user.email + "</a>");
$('.joinDate').append("<span class='octicon octicon-clock'></span>" + " " + moment(user.created_at).format('MMMM Do YYYY'));

$('.followers').append(user.followers);
$('.starred').append(user.followers);
$('.following').append(user.following);





/////////////////// ON CLICK FUNCTIONS ///////////////////
$('.public').click(function(){
  $('#publicActivity').show();
  $('#contributions').hide()
  $('#repos').hide();
});

$('.repositories').click(function(){
  $('#publicActivity').hide();
  $('#contributions').hide()
  $('#repos').show();
})

$('.contribs').click(function(){
  $('#publicActivity').hide();
  $('#repos').hide();
  $('#contributions').show()
})





/////////////// APPENDING DATA TO REPOS / PUBLIC ACTIVITY ///////////////
filteredActivity = "";
var publicActivity = _.each(events, function(item){
  filteredActivity +=
  "<ul class = ''><li class = ''>"
  + item.actor.login
  + "</li>"
  + "<li class = ''>"
  + item.type
  + "</li>"
  + "<li class = ''>"
  + item.payload.ref
  + "</li>"
  + "<li class = ''>"
  + item.repo.name
  + "</li></ul>";
});
$('#publicActivity').append(filteredActivity)


var filteredRepos = "";
var mainRepo = _.each(repos, function(item){
  filteredRepos += "<div class = 'fullRepo'><ul class = 'repoNameInd'><li class = 'repoTitle'><a href = "
  + item.html_url
  + ">"
  + item.name
  + "</a></li>"
  + "<li class = 'timeUpdated'>"
  + moment(item.updated_at).fromNow()
  + "</ul>"
  + "</li>"
  + "<ul class = 'gazerFork'>"
  + "<li class = 'starGazers'>"
  + item.stargazers_count
  + "<span class='octicon octicon-git-branch'></span>"
  + "</li>"
  + "<li class = 'forks'>"
  + item.forks_count
  + "</li>"
  + "<span class='octicon octicon-star'></span>"
  + "<li class = 'language'>"
  + item.language
  + "</li>"
  + "</ul>"
  + "</div>";
});



$('.repoName').append(filteredRepos)
