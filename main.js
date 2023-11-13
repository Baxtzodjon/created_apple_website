let white = document.querySelector('#white')
let space_grey = document.querySelector('#space_grey')
let img = document.querySelector('#photo_macbook')
let h1_buy = document.querySelector('#h1_buy')
let color_name = document.querySelector('#color_name')


let btns = document.querySelectorAll('.btn_blue')

let prev = 0

btns.forEach((btn, idx) => {
    btn.onclick = () => {
        btns[prev].classList.remove('active')
        btn.classList.add('active')

        if (idx === 0) {
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
        } else {
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

        prev = idx
    }
})


let btns_memory = document.querySelectorAll('.btn_TB_SSD')
let price = 1999

btns_memory.forEach(btn => {
    let price_additional = btn.querySelector('span')?.innerHTML || "0"
    btn.onclick = () => {
        h1_buy.innerHTML = (+price + +price_additional).toLocaleString('en-EN')
    }
})