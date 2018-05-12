angular.module('video-player')
  .component('videoDetails', {
    controller: function(getDetails) {
      
      
      this.$onInit = function() {
        this.shortDescription = this.currentVideo.snippet.description;
        this.currentDescription = this.shortDescription;
        this.showMore = true;
        this.moreOrLess = 'More';
        this.searchDetails = (videoId) => {
          getDetails.getDataDetails((data) => {
            this.longDescription = data.data.items[0].snippet.description;
          }, videoId);
        };

        this.switch = () => {
          this.showMore = !this.showMore;
          if (this.showMore) {
            this.currentDescription = this.shortDescription;
            this.moreOrLess = 'More';
          } else {
            this.currentDescription = this.longDescription;
            this.moreOrLess = 'Less';
          }
        };

        this.searchDetails(this.currentVideo.id.videoId);
      };
    },

    bindings: {
      currentVideo: '<'
    },

    template: `
      <div>   
        <div>{{$ctrl.currentDescription}}</div>
        <button ng-click="$ctrl.switch()">Show {{$ctrl.moreOrLess}}</button>
      </div>
    `
  });












