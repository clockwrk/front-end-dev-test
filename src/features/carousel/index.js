import ui.bootstrap from 'angular-ui-bootsrap';
// import './home.css'
//
// import angular from 'angular';
// import uirouter from 'angular-ui-router';
//
// import routing from './home.routes';
import CarouselController from './carousel.controller';
// import randomNames from '../../services/randomNames.service.js'
// import greeting from '../../directives/greeting.directive';
// import description from '../../directives/description.directive';
// import pages from '../../directives/pages.directive';
// import percent from '../../directives/percent.directive';
// import slide from '../../directives/slide.directive';


export default angular.module('app.carousel', ['ui.bootstrap'])
        // .config(routing)
        .controller('CarouselController', CarouselController)
        .name
