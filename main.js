
const down = document.querySelector('.fa-caret-down')
const plus = document.querySelectorAll('.fa-plus')
const minus = document.querySelectorAll('.fa-minus')
const bars = document.querySelector('.fa-bars-staggered')
const clos = document.querySelector('nav .fa-xmark.clos')
const middle = document.querySelector('nav .middle')
const ul = document.querySelector('nav .middle ul ')
const li = document.querySelectorAll('nav .middle ul li')


const search = document.querySelector('nav .search')
const closse = document.querySelector('nav .middle ul .search .dropdown .fa-xmark')
const searchdropdwon = document.querySelector('nav .middle ul .search .dropdown')

const services = document.querySelector('nav .E-services')
const dropdwon = document.querySelectorAll('nav .middle ul li .dropdown')
const slidRight = document.querySelector('.stories .container .fa-chevron-right')
const slidLeft = document.querySelector('.stories .container .fa-chevron-left')
const slidCard = document.querySelectorAll('.stories .container .card')

$('nav .middle ul .search .dropdown .fa-xmark').click(()=>{

  $('nav .middle ul .search .dropdown').hide()
  
        $('nav .middle ul .search').mouseout(()=>{
          $('nav .middle ul .search .dropdown').removeAttr('style')
        })
})

function resetNav(){

    $('.fa-bars-staggered').hide() //css({display : 'none'})
    $('nav .fa-xmark.clos').hide()  //css({display : 'none'})
    
    $('.fa-plus').hide()  //css({display: 'none'})
    $('.fa-minus').hide()   //css({display: 'none'})
    
    $('nav .search').show()  //css({display : 'flex'})
    $('nav .middle').show()  //css({display : 'flex'})
    $('nav .E-services').show() //css({display : 'flex'})
}

$(window).resize(function(){
    
    if(window.innerWidth >= 991){
       resetNav()
   }else{
    $('.fa-bars-staggered').css({border : 'none'}).css({display : 'flex'})
    $('.fa-plus').css({display: 'flex'})
    // $('.fa-minus').css({display: 'flex'})
    $('nav .middle').css({display : 'none'})
    $('nav .search').css({display : 'none'})
    $('nav .middle ul ').css({display : 'none'})
    $('nav .E-services').css({display : 'none'})
   }
})

$(document).ready(function(){
    if(window.innerWidth >= 991){
       resetNav()
    }
})

$('.fa-bars-staggered').click(function(){

    $('.fa-bars-staggered').css({border : '2px solid black'}).css({display : 'none'})
    $('nav .fa-xmark.clos').css({display : 'flex'}).css({border : '2px solid black'})
  
    $('nav .middle').css({display : 'flex'})
    $('nav .search').css({display : 'flex'})
    $('nav .middle ul ').css({display : 'flex'})
    $('nav .E-services').css({display : 'flex'})
    $('.fa-plus').css({display: 'flex'})

})
    
$('nav .fa-xmark.clos').click(function(){

    $('nav .fa-xmark.clos').css({display : 'none'})
    $('.fa-bars-staggered').css({border : '2px solid black'}).css({display : 'flex'})
   
   
    // $('.fa-plus').css({display: 'none'})
    // $('.fa-minus').css({display: 'none'})

    $('nav .middle').css({display : 'none'})
    $('nav .search').css({display : 'none'})
    // $('nav .search ul').css({display : 'none'}) 
    $('nav .E-services').css({display : 'none'})
})


$('.fa-plus').click(function(e){
  e.preventDefault()
  $(this).css({display : 'none'})
  $(this).next().css({display : 'flex'})

  $('nav .middle ul li .dropdown').not(this).not($('nav .middle ul .search .dropdown')).slideUp()
//   $('nav .middle ul .search .dropdown').css({display : 'flex'})
  $(this).parent().parent().next().slideDown()

})

$('.fa-minus').click(function(e){
  e.preventDefault()
  $(this).css({display : 'none'})
  $(this).prev().css({display : 'flex'})

  $('nav .middle ul li .dropdown').not($('nav .middle ul .search .dropdown')).slideUp()
//   $('nav .middle ul .search .dropdown').css({display : 'flex'})

})



if(window.innerWidth <= 991){
  $('.stories .container .slide').addClass('slider')
}else{
  $('.stories .container .slide').removeClass('slider')  
}

$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow :  '.fa-chevron-right',
    nextArrow :  '.fa-chevron-left' ,
    autoplay : true ,
    autoplaySpeed : 1500 , 
    responsive: [
      {   breakpoint: 990,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         prevArrow : false,
         nextArrow : false ,
        }
       },
    ]
  });
});