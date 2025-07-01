

const plus = document.querySelectorAll('.fa-plus')
const minus = document.querySelectorAll('.fa-minus')
const bars = document.querySelector('.fa-bars-staggered')
const clos = document.querySelector('nav .fa-xmark.clos')
const middle = document.querySelector('nav .middle')
const ul = document.querySelector('nav .middle ul ')

const search = document.querySelector('nav .search')
const services = document.querySelector('nav .E-services')
const dropdwon = document.querySelectorAll('nav .middle ul li .dropdown')


// bars.addEventListener('click', function(){
//     bars.style.border = '2px solid black'
//     bars.style.display = 'none'
//     clos.style.display = 'flex'
//     clos.style.border = '2px solid black'

//     middle.style.display = 'flex'
//     search.style.display = 'flex'
//     ul.style.display = 'flex'
//     services.style.display = 'flex'
// })

// clos.addEventListener('click', function(){
//     bars.style.border = 'none'
//     bars.style.display = 'flex'
//     clos.style.display = 'none'

//     middle.style.display = 'none'
//     search.style.display = 'none'
//     services.style.display = 'none'
// })

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
//   $(this).parent().parent().next().slideDown()

})


const studyContainer = document.querySelector('.mainpage .main-container .container')
const navigationMenu = document.querySelector('.mainpage .navigation')
const home = document.querySelector('.mainpage .home')



$('nav .middle ul .search .dropdown .fa-xmark').click(()=>{

  $('nav .middle ul .search .dropdown').hide()
  
        $('nav .middle ul .search').mouseout(()=>{
          $('nav .middle ul .search .dropdown').removeAttr('style')
        })
          })


function displayCard(){
    let item = ''
    
    for(let i = 0 ; i < C.length ; i++){
    
    item += 
            `   <div class="card">
                    <div class="image">
                        <img src="${C[i].imag}" alt="">
                    </div>
                    <div class="details">
                        <a href="#">${C[i].a}</a>
                        <p>${C[i].p}</p>
                    </div>
                </div>`
} 
    studyContainer.innerHTML = item

}


home.addEventListener('click', () =>{
    window.location.assign('index.html')
})


navigationMenu.addEventListener('click', ()=>{
    // home.style.display = 'flex'
    $('.mainpage .home').slideToggle()
 
})
window.addEventListener('resize', ()=>{
       if(window.innerWidth > 991){
       $('.mainpage .home').css({display : 'flex'})  
    }else{
       $('.mainpage .home').css({display : 'none'})  

    }
})