// Variables de wods
const wods = [
    {type: '21-15-9', movements: 'Bar muscle ups <br> Burpees'},
    {type: 'Emom 30', movements: '1- 10 burpees <br> 2- 10 strict pull ups <br> 3- 10 cal assault bike'},
    {type: 'Amrap 10', movements: '7 push press 45/30 <br> 7 burpees <br> 7 oh squats 45/30k'},
    {type: '30-20-10', movements: 'Front squats 60/45 <br> Toes to bar'},
    {type: '30-20-10', movements: 'Sdb Snatch 20kg <br> Sdb Clean and jerk 20kg <br> Burpees <br> Mountain climbers'},
    {type: 'Emom 12', movements: '1- 12 burpees <br> 2- 12 thruster 45/30'},
    {type: 'For time' , movements: '100 DU <br> 80 Burpees <br> 60 Push ups <br> 40 Pull ups <br> 20 Handstand push ups'},
    {type: 'For time', movements: '150 DU <br> 125 Mountain climbers <br> 100 Thrusters 20/15 <br> 75 Push press 20/15 <br> 50 Strict Handstand push ups'},
    {type: '5 Rounds', movements: '400m run <br> 5 strict handstand push ups <br> 10 ring dips <br> 15 pull ups'},
    {type: '3 Rounds', movements: '10 Deadlift 100kg <br> 21 Push ups'},
    {type: 'Tabata', movements: '1- Hang power cleans 60/45 <br> 2- Deadlift 60/45 <br> 3- Strict Handstand push ups <br> 4- Push ups'}
]


let i = Math.floor(Math.random() * wods.length)

function mostrarWods() {
    document.getElementById('demo1').innerHTML = (wods[i].type)
    document.getElementById('demo2').innerHTML = (wods[i].movements)
}



// const contenedorWods = document.querySelector(".contenedor-wods");

// function mostrarWods() {
//     wods.forEach ( (wod) => {

//         let i = Math.floor(Math.random() * wods.length)

//         const div = document.createElement('div')        
//         div.classList.add("randomWod")

//         console.log(div)

//         const type = document.createElement('p')
//         type.classList.add('type')
//         type.innerHTML = (wods[i].type)

//         const movements = document.createElement('p')
//         movements.classList.add('movements')
//         movements.innerHTML = (wods[i].movements)
        
//         div.appendChild(type)
//         div.appendChild(movements)

//         contenedorWods.appendChild(div)
//     })
// }





