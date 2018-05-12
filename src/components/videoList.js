angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      method: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
