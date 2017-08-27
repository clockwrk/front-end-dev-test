import angular from 'angular';

function description() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    templateUrl: './directive.templates/decription.html'
  }
}

export default angular.module('directives.greeting', [])
  .directive('description', description)
  .name;
