angular.module('video-player')
  .component('app', {
    controller: function(getVideos) {
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0]; 
      
      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];    
      };

      getVideos.getData( (data) => {
        this.videos = data.data.items;
        this.currentVideo = data.data.items[0];
      });

      this.searchVideo = (query, event) => {
        if (event) {
          if (event.keyCode === 13) {
            getVideos.getData( (data) => {
              this.videos = data.data.items;
              this.currentVideo = data.data.items[0];
            }, query);          
          }
        } else {
          getVideos.getData( (data) => {
            this.videos = data.data.items;
            this.currentVideo = data.data.items[0];
          }, query);          
        }      
      };
    },
    templateUrl: '/src/templates/app.html',
    
  });
