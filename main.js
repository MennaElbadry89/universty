// const R = [
//     {
//         Image: 'image\parter-imag-3.png' ,
//         b : 'Research Pillars' ,
//         p: 'Learn more about the strategy driving research for humanity' ,
//     },
//     {
//         Image: 'image\research-centers-imgf0da174d-8d2e-450a-9065-a4a3b8641a9f.png' ,
//         b : 'Research Centers' ,
//         p: 'Step into the dynamic hubs that drive scientific innovation at KFUPM' ,
//     },
//     {
//         Image: 'image\entrepreneurship-ecosystem.jpeg' ,
//         b : 'Entrepreneurship Ecosystem' ,
//         p: 'Our ecosystem connects you with mentors, funding opportunities, and a community of innovators' ,
//     },
// ]


// const D = [
//     {
//         Image: '/image/fast.png' ,
//         b : "KFUPM's Traits" ,
//         p: 'The foundation of knowledge creation, collaborative innovation, and transformative education' ,
//     },
//     {
//         Image: '/image/our_students_16-9.jpg' ,
//         b : 'The 7 Habits of KFUPM Students' ,
//         p: 'Curious minds, bold thinkers, and determined doers. Discover the habits that define all KFUPM students' ,
//     },
//     {
//         Image: '/image/ai-xaf63fbfdbcfd42ab89e6989b3febe592.png' ,
//         b : 'Ai+X™ Foundation' ,
//         p: 'Every undergraduate student in our program begins with essential Artificial Intelligence coursework before advancing to their chosen major.' ,
//     },
// ]

// const C = [
//     {
//         Image: '/image/kfupm-president.jpg' ,
//         b : 'Meet our Leadership' ,
//         p: "Get to know KFUPM's leadership team and hear our President's vision for the future" ,
//     },
//     {
//         Image: '/image/alumni_16-9.jpg' ,    
//         b : 'Alumni' ,
//         p: "Stay connected through alumni networking events, and discover ways to contribute to KFUPM's legacy" ,
//     },
//     {
//         Image: '/image/careerse5be77a9-af9c-4b8a-bb44-2a7c3aa903ad.jpg' ,       
//         b : 'Careers' ,
//         p: "Advance your career at KFUPM with rewarding opportunities and competitive benefits" ,
//     },
// ]

// const N = [
//     {
//         Image: '/image/DAY37311_1.2e16d0ba.fill-416x241.jpg' ,
//         span : 'Events' ,
//         b : 'KFUPM Returns to NAFSA 2025 in San' ,
//         p: '2025-05-31' ,
//     },
//     {
//         Image: '/image/MS3_0380_copy.2e16d0ba.fill-416x241.jpg' ,
//         span : ' Academics' ,
//         b : 'Students Win First Place in IMA Case' ,
//         p: '2025-05-29' ,
//     },
//     {
//         Image: '/image/WhatsApp_Image_1446-11-24_at_08.55.2e16d0ba.fill-416x241.jpg' ,
//         span : ' Events' ,
//         b : 'KFUPM Honored for AI Excellence at the' ,
//         p: '2025-05-22' ,
//     },
// ]

// const R_container = document.querySelector('.research .container')
// const D_container = document.querySelector('.discover .container')
// const N_container = document.querySelector('.connect .container')
// const C_container = document.querySelector('.news .container')

// function displayRcard( ){
//     let items = ''
//     for(let i = 0; i < R.length; i++){
//         items +=
//         `  <div class="card">
//                 <div class="pic">
//                     <img src="${R[i].Image}" alt="">
//                 </div>
//                 <div class="details">
//                     <b>${R[i].b}</b>
//                     <p>${R[i].p}</p>
//                 </div>
//             </div>`
//     }
//     R_container.innerHTML = items
// }
// displayRcard()

// function displayDcard( ){
//     let items = ''
//     for(let i = 0; i < D.length; i++){
//         items +=
//         `  <div class="card">
//                 <div class="pic">
//                     <img src="${D[i].Image}" alt="">
//                 </div>
//                 <div class="details">
//                     <b>${D[i].b}</b>
//                     <p>${D[i].p}</p>
//                 </div>
//             </div>`
//     }
//     D_container.innerHTML = items
// }
// displayDcard()

// function displayCcard( ){
//     let items = ''
//     for(let i = 0; i < C.length; i++){
//         items +=
//         `  <div class="card">
//                 <div class="pic">
//                     <img src="${C[i].Image}" alt="">
//                 </div>
//                 <div class="details">
//                     <b>${C[i].b}</b>
//                     <p>${C[i].p}</p>
//                 </div>
//             </div>`
//     }
//     C_container.innerHTML = items
// }
// displayCcard()

// function displayNcard( ){
//     let items = ''
//     for(let i = 0; i < N.length; i++){
//         items +=
//         `  <div class="card">
//                 <div class="pic">
//                     <img src="${N[i].Image}" alt="">
//                 </div>
//                 <div class="details">
//                     <b>${N[i].b}</b>
//                     <p>${N[i].p}</p>
//                 </div>
//             </div>`
//     }
//     N_container.innerHTML = items
// }
// displayNcard()



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

    $('.fa-bars-staggered').css({display : 'none'})
    $('nav .fa-xmark.clos').css({display : 'none'})
    
    $('.fa-plus').css({display: 'none'})
    $('.fa-minus').css({display: 'none'})
    
    $('nav .search').css({display : 'flex'})
    $('nav .middle').css({display : 'flex'})
    $('nav .E-services').css({display : 'flex'})
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