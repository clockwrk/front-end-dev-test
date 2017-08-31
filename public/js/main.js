// wrap things in an IIFE to keep them neatly isolated from other code.
(() => {
  // strict mode to prevent errors and enable some ES6 features
  'use strict'


  $.ajax({
    url: '../data/imageData.json',
    // query string parameters to append
    dataType: 'json',
    success: (data) => {
      console.log(data);
      var dataTargets = [],
          imagesArray = [];

          $.each( data, function( key, val){
            console.log('value', val)
            let key = key===0?


            dataTargets.push(`<li data-target="#myCarousel" data-slide-to="${key}" ></li>`)

            imagesArray.push(`<div class="item">
                                <img src="${val.url}" alt="${val.alt}" style="width:100%;" class="img-responsive">
                            </div>`)
          })
        // success! we got the data!
      let employee = `<li class="employee">
          <img src="${data.results[0].picture.thumbnail}" alt="Photo of ${data.results[0].name.first}" class="employee-photo">
          <div class="employee-name">${data.results[0].name.first} ${data.results[0].name.last}</div>
          <div class="employee-location">${data.results[0].location.city}, ${data.results[0].location.state}</div>
        </li>`
        $('.js-employee-list').append(employee)
      }
    })
})()
