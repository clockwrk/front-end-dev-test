export default class HomeController {
  constructor(randomNames) {
    this.random = randomNames;
    this.name = 'World';
    this.percentagesArray = [
      {percent:240, caption:'Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor'},
      {percent:105, caption:'Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor'},
      {percent:159, caption:'Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor'}
    ]

    this.pagesArray = [
      {pageCaption:'Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. '},
      {pageCaption:'Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. '},
      {pageCaption:'Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. '},
    ]

  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
    this.name = this.random.getName();
  }
}


HomeController.$inject = ['randomNames'];
