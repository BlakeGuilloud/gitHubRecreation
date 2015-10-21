$('.profilePic').append('<img src="' + user.avatar_url + '">');
$('.name').append(user.name);
$('.username').append(user.login);

$('.location').append("<span class='octicon octicon-location'></span>" + " " + user.location);
$('.email').append("<span class='octicon octicon-mail'></span>"+ " " + user.email);
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

// REPOS SORT OBJECTS IN ARRAY

// var nameRepo = _.map(repos, function(item){
//    return item.name
// });
// var starRepo = _.map(repos, function(item){
//    return item.updated_at
// });
filteredActivity = "";
var publicActivity = _.each(events, function(item){
  filteredActivity +=
  "<ul class = ''><li class = ''>" + item.actor.login + "</li>" +
  "<li class = ''>" + item.type + "</li>" +
  "<li class = ''>" + item.payload.ref + "</li>" +
  "<li class = ''>" + item.repo.name  + "</li></ul>";
});
$('#publicActivity').append(filteredActivity)


filteredRepos = "";
var mainRepo = _.each(repos, function(item){
  filteredRepos += "<ul class = 'repoNameInd'><li class = 'repoTitle'><a href = " + item.html_url +">" +
  item.name + "</a></li>" + "<li class = 'timeUpdated'>" +
  moment(item.updated_at).fromNow() + "</ul>" + "</li>"  +
  "<ul class = 'gazerFork'>" + "<li class = 'starGazers'>" +
  item.stargazers_count + "<span class='octicon octicon-git-branch'></span>" + "</li>" + "<li class = 'forks'>" +
  item.forks_count +
  "</li>" + "<span class='octicon octicon-star'></span>" + "<li class = 'language'>" +
  item.language + "</li>" + "</ul>";
});

$('.repoName').append(filteredRepos)


//
// var filteredRepos = repos.map(function(item){
//   return{ name: item.name,
//           stargazers: item.stargazers_count,
//           watchers: item.watchers_count,
//           updated: item.updated_at
//         }
// });

// // $('.repoName').text(nameRepo[0] + starRepo[0]);
// //
// // var compiled = _.template("<=% item.name %>");
// // $('repoName').text(compiled)
//
// // var compiled = _.template("<%= nameRepo %>", "<%= starRepo %>")
// // $('.repoName').text(compiled);
// //
// var compiled = _.each(nameRepo, function(item){
//   $('.repoName').text(item.name)
// });

    // $('.repoName').text(filteredRepos.item.name)
//


//
// var next = filteredRepos.forEach(function(item){
//   return item
// });
