angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];      

    var app = this;
    this.selectVideo = function(index) {
      app.currentVideo = window.exampleVideoData[index];    
      console.log(window.exampleVideoData[index])
       
    };
  },
  templateUrl: '/src/templates/app.html'
});
