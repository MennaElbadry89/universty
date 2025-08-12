const R = [
    {
        Image: '/image/parter-imag-3.png' ,
        b : 'Research Pillars' ,
        p: 'Learn more about the strategy driving research for humanity' ,
    },
    {
        Image: '/image/research-centers-imgf0da174d-8d2e-450a-9065-a4a3b8641a9f.png' ,
        b : 'Research Centers' ,
        p: 'Step into the dynamic hubs that drive scientific innovation at KFUPM' ,
    },
    {
        Image: '/image/entrepreneurship-ecosystem.jpeg' ,
        b : 'Entrepreneurship Ecosystem' ,
        p: 'Our ecosystem connects you with mentors, funding opportunities, and a community of innovators' ,
    },
]
// C:\Users\tohiba\Desktop\universty\image\parter-imag-3.png
// image\parter-imag-3.png

const D = [
    {
        Image: '../image/fast.png' ,
        b : "KFUPM's Traits" ,
        p: 'The foundation of knowledge creation, collaborative innovation, and transformative education' ,
    },
    {
        Image: '../image/our_students_16-9.jpg' ,
        b : 'The 7 Habits of KFUPM Students' ,
        p: 'Curious minds, bold thinkers, and determined doers. Discover the habits that define all KFUPM students' ,
    },
    {
        Image: '../image/ai-xaf63fbfdbcfd42ab89e6989b3febe592.png' ,
        b : 'Ai+X™ Foundation' ,
        p: 'Every undergraduate student in our program begins with essential Artificial Intelligence coursework before advancing to their chosen major.' ,
    },
]


const N = [
    {
        Image: '../image/DAY37311_1.2e16d0ba.fill-416x241.jpg' ,
        span : 'Events' ,
        b : 'KFUPM Returns to NAFSA 2025 in San' ,
        p: '2025-05-31' ,
    },
    {
        Image: '../image/MS3_0380_copy.2e16d0ba.fill-416x241.jpg' ,
        span : ' Academics' ,
        b : 'Students Win First Place in IMA Case' ,
        p: '2025-05-29' ,
    },
    {
        Image: '../image/WhatsApp_Image_1446-11-24_at_08.55.2e16d0ba.fill-416x241.jpg' ,
        span : ' Events' ,
        b : 'KFUPM Honored for AI Excellence at the' ,
        p: '2025-05-22' ,
    },
]

const R_container = document.querySelector('.research .container')
const D_container = document.querySelector('.discover .container')
const N_container = document.querySelector('.connect .container')

function displaycard( ){
    let items = ''
    for(let i = 0; i < R.length; i++){
        items +=
        `  <div class="card">
                <div class="pic">
                    <img src="${R[i].Image}" alt="">
                </div>
                <div class="details">
                    <b>${R[i].b}</b>
                    <p>${R[i].p}</p>
                </div>
            </div>`
    }
    R_container.innerHTML = items
}
displaycard()
