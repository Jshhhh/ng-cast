angular.module('video-player')
  .service('getVideos', function($http) {
    this.getData = function(callback, query) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          'key': window.YOUTUBE_API_KEY,
          'q': query ? query : 'dogs',
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
  })
  .service('getDetails', function($http) {
    this.getDataDetails = function(callback, videoId) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/videos',
        params: {
          'key': window.YOUTUBE_API_KEY,
          'id': videoId,
          'videoEmbeddable': true,
          'type': 'video',
          'part': 'snippet'
        }
      }).then(function(data) {
        callback(data);
        console.log('Request Details succseful!', data);
      }, function() {
        console.log('Request Details NOT succseful!');
      });
    };
  });
