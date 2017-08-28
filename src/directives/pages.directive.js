import angular from 'angular';

function pages() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    templateUrl: './directive.templates/pages.html'
  }
}

export default angular.module('directives.pages', [])
  .directive('pages', pages)
  .name;
