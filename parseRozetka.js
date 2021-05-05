(function(){

var s = []
var titles = []
var prices = []
var products = []

document.querySelectorAll('.goods-tile__picture img').forEach(img => s.push({src: img.currentSrc}))
document.querySelectorAll('.goods-tile__title').forEach(text => titles.push({title: text.innerText}))
document.querySelectorAll('.goods-tile__price-value').forEach(text => prices.push({price: text.innerText}))

s = s.slice(0,60)
titles = titles.slice(0,60)
prices = prices.slice(0,60)

// product push

for(i = 0; i < 60; i++){
    if(i % 2){
        products.push({id: i, title: titles[i].title, discont: true, new: prices[i].price, old: prices[i].price, img: s[i].src})
    }else{
        products.push({id: i, title: titles[i].title, price: prices[i].price, discont: false, img: s[i].src})
    }
}

return products 

}())