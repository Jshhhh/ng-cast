angular.module('video-player')
  .component('search', {
    bindings: {
      searchVideo: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
