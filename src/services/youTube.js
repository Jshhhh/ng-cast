angular.module('video-player')
  .service('getVideos', function($http) {
    this.getData = function(callback, query = 'dogs') {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          'key': window.YOUTUBE_API_KEY,
          'q': query,
          'maxResults': 5,
          'videoEmbeddable': true,
          'type': 'video',
          'part': 'snippet'
        }
      }).then(function(data) {
        callback(data);
        console.log('Request succseful!', data);
      }, function() {
        console.log('Request NOT succseful!');
      });
    };
  });
