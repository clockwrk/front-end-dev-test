import './home.css'

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames.service.js'
import greeting from '../../directives/greeting.directive';
import description from '../../directives/description.directive';
import pages from '../../directives/pages.directive';
import percent from '../../directives/percent.directive';
import slide from '../../directives/slide.directive';
import carousel from '../../directives/carousel.directive';


export default angular.module('app.home', [uirouter, randomNames, greeting, description, pages, percent, slide, carousel])
        .config(routing)
        .controller('HomeController', HomeController)
        .name
