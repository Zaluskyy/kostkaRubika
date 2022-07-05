const cube = document.querySelector(".cube");

const cubes = []
const colors = ['green', 'red', 'blue', 'orange']

let rotateContainer;

for(let i=1; i<=27; i++){
    const cubeI = document.createElement('div');
    cubeI.classList = `cube${i}`;

    rotateContainer = document.createElement('div');
    switch(i){
        case 1:
            rotateContainer.classList.add('rotate', 'w', 'o', 'g')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 2:
            rotateContainer.classList.add('rotate', 'w', 'o')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 3:
            rotateContainer.classList.add('rotate', 'w', 'o', 'b')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 4:
            rotateContainer.classList.add('rotate', 'w', 'g')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 5:
            rotateContainer.classList.add('rotate', 'w')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 6:
            rotateContainer.classList.add('rotate', 'w', 'b')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 7:
            rotateContainer.classList.add('rotate', 'w', 'r', 'g')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 8:
            rotateContainer.classList.add('rotate', 'w', 'r')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 9:
            rotateContainer.classList.add('rotate', 'w', 'r', 'b')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;

        case 10:
            rotateContainer.classList.add('rotate', 'o', 'g')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 11:
            rotateContainer.classList.add('rotate', 'o')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 12:
            rotateContainer.classList.add('rotate', 'o', 'b')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 13:
            rotateContainer.classList.add('rotate', 'g')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 14:
            rotateContainer.classList.add('rotate')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 15:
            rotateContainer.classList.add('rotate', 'b')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 16:
            rotateContainer.classList.add('rotate', 'r', 'g')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 17:
            rotateContainer.classList.add('rotate', 'r')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 18:
            rotateContainer.classList.add('rotate', 'r', 'b')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;

        case 19:
            rotateContainer.classList.add('rotate', 'y', 'o', 'g')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 20:
            rotateContainer.classList.add('rotate', 'y', 'o')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 21:
            rotateContainer.classList.add('rotate', 'y', 'o', 'b')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 22:
            rotateContainer.classList.add('rotate', 'y', 'g')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 23:
            rotateContainer.classList.add('rotate', 'y')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 24:
            rotateContainer.classList.add('rotate', 'y', 'b')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 25:
            rotateContainer.classList.add('rotate', 'y', 'r', 'g')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 26:
            rotateContainer.classList.add('rotate', 'y', 'r')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
        case 27:
            rotateContainer.classList.add('rotate', 'y', 'r', 'b')
            rotateContainer.dataset.x = 0
            rotateContainer.dataset.y = 0
            rotateContainer.dataset.z = 0
        break;
    }

    const up = document.createElement("div")
    up.classList = `top`

    const bottom = document.createElement("div")
    bottom.classList = `bottom`

    const div = document.createElement("div")

    for(let i=0; i<4; i++){
        const span = document.createElement("span")
        span.style = `--i:${i}; --color: ${colors[i]}`
        div.appendChild(span)
    }

    rotateContainer.appendChild(up)
    rotateContainer.appendChild(bottom)
    rotateContainer.appendChild(div)

    cubeI.appendChild(rotateContainer)
    cubes.push(cubeI);
}



cubes.forEach(one=>{
    cube.appendChild(one)
})




const position = {
    rotateX: -30,
    rotateY: -30,
    rotateZ: 0,
}

const move = 45
        
const changeDirection = (direction)=>{
 
    if(direction == "left") position.rotateY += move
    else if(direction == "right") position.rotateY -= move
    else if(direction == "top") position.rotateX += move
    else if(direction == "bottom") position.rotateX -= move
    else if(direction == "+z") position.rotateZ += move
    else if(direction == "-z") position.rotateZ -= move

    cube.style.transform = `rotateX(${position.rotateX}deg) rotateY(${position.rotateY}deg) rotateZ(${position.rotateZ}deg)`
}

let rotateU = 0
let rotateD = 0
let rotateR = 0
let rotateL = 0
let rotateF = 0
let rotateB = 0

const cubeMove = (move)=>{

    let wall = ''
    let axis = ''
    let plus = true
    
    if(move=='q'||move=='w'){
        wall = 'w'
        axis = 'y'
        move=='w'?plus=true:plus=false;
    }
    if(move=='e'||move=='r'){
        wall = 'b'
        axis = 'x'
        move=='r'?plus=true:plus=false;
    }
    if(move=='t'||move=='y'){
        wall = 'r'
        axis = 'z'
        move=='y'?plus=true:plus=false;
    }
    if(move=='u'||move=='i'){
        wall = 'y'
        axis = 'y'
        move=='i'?plus=true:plus=false;
    }
    if(move=='o'||move=='p'){
        wall = 'g'
        axis = 'x'
        move=='p'?plus=true:plus=false;
    }
    if(move=='['||move==']'){
        wall = 'o'
        axis = 'z'
        move==']'?plus=true:plus=false;
    }
    
    const rotate = (document.querySelectorAll(`.${wall}`))
    
    rotate.forEach(r=>{
        if(axis=='x') r.dataset.x = plus?parseInt(r.dataset.x)+90: parseInt(r.dataset.x)-90
        else if(axis=='y') r.dataset.y = plus?parseInt(r.dataset.y)+90: parseInt(r.dataset.y)-90
        else if(axis=='z') r.dataset.z = plus?parseInt(r.dataset.z)+90: parseInt(r.dataset.z)-90

        r.style.transform = `rotateX(${r.dataset.x}deg) rotateY(${r.dataset.y}deg) rotateZ(${r.dataset.z}deg)`
    })

    
}

addEventListener("keydown", e=>{
    // console.log(e.keyCode);
    switch(e.keyCode){
        case 37:
            changeDirection("left")
        break;
        case 39:
            changeDirection("right")
        break;
        case 38:
            changeDirection("top")
        break;
        case 40:
            changeDirection("bottom")
        break;
        case 90:
            changeDirection("-z")
        break;
        case 88:
            changeDirection("+z")
        break;

        case 69:
            cubeMove('q')
        break;
        case 82:
            cubeMove('w')
        break;
        case 74:
            cubeMove('e')
        break;
        case 75:
            cubeMove('r')
        break;
        case 67:
            cubeMove('t')
        break;
        case 86:
            cubeMove('y')
        break;
        case 85:
            cubeMove('u')
        break;
        case 73:
            cubeMove('i')
        break;
        case 68:
            cubeMove('o')
        break;
        case 70:
            cubeMove('p')
        break;
        case 77:
            cubeMove('[')
        break;
        case 188:
            cubeMove(']')
        break;
    }
})
