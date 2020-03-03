function getTeams() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://api.football-data.org/v2/teams/",
    "method": "GET",
    "headers": {
      "X-Auth-Token": "cee1ec9bfa2c424bab6141c97368c6cd"
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
    $.each(response.teams, function(index, list) {
      console.log(list.name);
      // $('#teamTable').append('<p>' + list + '</p>');
      // $.each(list, function(index, now) {
        // console.log(now);
      // });
    });
  });
}

// function getTeamDetails(num) {
//   var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "http://api.football-data.org/v2/teams/" + num,
//   "method": "GET",
//   "headers": {
//     "X-Auth-Token": "cee1ec9bfa2c424bab6141c97368c6cd"
//   }
// }
//
// $.ajax(settings).done(function (response) {
//   console.log(response);
//
//   $.each(response, function(index, list) {
//     $('#result').append();
//   })
// });
//
// }
