import angular from 'angular';

function description() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: '<div><h3>Lorem ipsum dolor sit amet</h3><h4>Lorem ipsum dolor sit amet lorem</h4><p>Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum. Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum ac.</p></div>'
  }
}

export default angular.module('directives.description', [])
  .directive('description', description)
  .name;
