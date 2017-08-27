import angular from 'angular';

function slide() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    templateUrl: './directive.templates/slide.html'
  }
}

export default angular.module('directives.slide', [])
  .directive('slide', slide)
  .name;
