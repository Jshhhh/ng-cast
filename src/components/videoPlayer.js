angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      currentVideo: '<'
    },  
    templateUrl: 'src/templates/videoPlayer.html'
  });
