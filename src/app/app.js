import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
import routing from './app.config';
import uirouter from 'angular-ui-router';
import uibootstrap from 'angular-ui-bootstrap';
import home from '../features/home';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router','ui.bootstrap', home])
  .config(routing)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
