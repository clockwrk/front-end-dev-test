import angular from 'angular';

function carousel() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    templateUrl: './public/../templates/carousel.html'
  }
}

export default angular.module('directives.carousel', [])
  .directive('carousel', carousel)
  .name;
