angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      thumbnails: '<',
      title: '<',
      description: '<',
      selectVideo: '<',
      index: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
