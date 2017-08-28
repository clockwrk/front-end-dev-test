export default class CarouselController {
  constructor($scope){
      $scope.myInterval = 3000;
      $scope.slides =[
        {
          image:"/img/hero-img.jpg"
        },
        {
          image:"/img/Meeting.jpg"
        },
        {
          image:"/img/Accounting.jpg"
        }
    ];
  }

}
