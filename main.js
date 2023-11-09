let white = document.querySelector('#white')
let space_grey = document.querySelector('#space_grey')
let img = document.querySelector('#photo_macbook')
let h1_buy = document.querySelector('#h1_buy')
let color_name = document.querySelector('#color_name')

white.onclick = () => {
    img.setAttribute('src', './img/macbook_white.png')

    if (h1_buy.innerText === "$2,599") {
        h1_buy.innerText = "$1,999"
    } else {
        h1_buy.innerText === "$2,599"
    }

    if (color_name.innerText === "Space Gray") {
        color_name.innerText = "White"
    } else {
        color_name.innerText === "Space Gray"
    }
}

space_grey.onclick = () => {
    img.setAttribute('src', './img/macbook_space_gray.png')

    if (h1_buy.innerText === "$1,999") {
        h1_buy.innerText = "$2,599"
    } else {
        h1_buy.innerText === "$1,999"
    }

    if (color_name.innerText === "White") {
        color_name.innerText = "Space Gray"
    } else {
        color_name.innerText === "White"
    }
}


/* let btns = document.querySelectorAll('.btn_blue')

let prev = 0

btns.forEach((btn, idx) => {
    btn.onclick = () => {
        btns[prev].classList.remove('active')
        btn.classList.add('active')

        prev = idx
    }
}) */




// let btn_price = document.querySelector('#btn_price')

// btn_price.onclick = () => {
//     if (h1_buy.innerText === "$1,999") {
//         h1_buy.innerText = "$2,199"
//     } else {
//         h1_buy.innerText === "$1,999"
//     }
// }

// let btn_price2 = document.querySelector('#btn_price2')

// btn_price2.onclick = () => {
//     if (h1_buy.innerText === "$1,999") {
//         h1_buy.innerText = "$2,599"
//     } else {
//         h1_buy.innerText === "1,999"
//     }
// }

// let btn_price3 = document.querySelector('#btn_price3')

// btn_price3.onclick = () => {
//     if (h1_buy.innerText === "$1,999") {
//         h1_buy.innerText = "$3,599"
//     } else {
//         h1_buy.innerText === "1,199"
//     }
// }