import angular from 'angular';

function percent() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    templateUrl: './directive.templates/percent.html'
  }
}

export default angular.module('directives.percent', [])
  .directive('percent', percent)
  .name;
