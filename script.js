let natural = document.querySelector('#natural')
let blue = document.querySelector('#blue')
let white = document.querySelector('#white')
let black = document.querySelector('#black')
let img = document.querySelector('#img')
let h4 = document.querySelector('#title')

natural.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845702708')
    h4.innerText = "Color - Natural Titanium"
}

blue.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845699311')
    h4.innerText = "Color - Blue Titanium"
}

white.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845706590')
    h4.innerText = "Color - White Titanium"
}

black.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845694698')
    h4.innerText = "Color - Black Titanium"
}



// modal window js code
let faqs =  document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.onclick = () => {
        faq.classList.toggle("active");
    }
})