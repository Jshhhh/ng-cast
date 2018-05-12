angular.module('video-player')
  .service('getVideos', function($http) {
    this.getData = function(callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          'key': window.YOUTUBE_API_KEY,
          'q': 'dogs',
          'maxResults': 5,
          'videoEmbeddable': true,
          'type': 'video',
          'part': 'snippet'
        }
      }).then(function(data) {
        callback(data);
        console.log("Request succeful!", data);
      }, function() {
        console.log("Request NOT succeful!");
      });
    }
  });
