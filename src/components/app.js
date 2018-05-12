angular.module('video-player')
  .component('app', {
    controller: function(getVideos) {
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];      
      
      var app = this;
      this.selectVideo = function(index) {
        app.currentVideo = window.exampleVideoData[index];    
      };

      getVideos.getData(function(data) {
        app.videos = data.data.items;
        app.currentVideo = data.data.items[0];
        console.log(this);
      });
    },
    templateUrl: '/src/templates/app.html',
    
  });
