angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      thumbnails: '<',
      title: '<',
      description: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
