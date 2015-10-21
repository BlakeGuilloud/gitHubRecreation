$('.profilePic').append('<img src="' + user.avatar_url + '">');
$('.name').append(user.name);
$('.username').append(user.login);

$('.location').append(user.location);
$('.email').append(user.email);
$('.joinDate').append(user.created_at);

$('.followers').append(user.followers);
$('.starred').append(user.followers);
$('.following').append(user.following);



// REPOS SORT OBJECTS IN ARRAY

// var nameRepo = _.map(repos, function(item){
//    return item.name
// });
// var starRepo = _.map(repos, function(item){
//    return item.updated_at
// });

filteredRepos = "";
_.each(repos, function(item){
  filteredRepos += "<ul class = 'repoNameInd'><li class = 'repoTitle'><a href = "+ item.html_url +">" +
  item.name + "</a></li>" + "<li class = 'timeUpdated'>" + moment(item.updated_at).fromNow() + "</ul>" + "</li>"  +
  "<ul class = 'gazerFork'>"+ "<li class = 'language'>" +
  item.language + "</li" + "<li class = 'starGazers'>" + item.stargazers_count + "</li>" + "<li class = 'forks'>" +
  item.forks_count + "</li>" + "</ul>";
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
