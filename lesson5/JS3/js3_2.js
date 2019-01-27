//третья часть ДЗ
//добавляем 2 объекта из массива в каталог нашего магазина
let productCatalog = document.getElementById('product')
let product = [{id: 1, name: 'product1', price: 100, quantity: 1, img: 'f1img'}, {
    id: 2,
    name: 'product2',
    price: 200,
    quantity: 1,
    img: 'f2img'
}]
for (let i = 0; i < product.length; i++) {
    let productCatalogItem = document.createElement('div')
    productCatalogItem.classList.add('f1')
    productCatalogItem.innerHTML = '<a href="single.html"> <div class="' + product[i].img + ' fimg"></div> </a> <p>' + product[i].name + '</p>' +
        ' <p class="pink">$' + product[i].price + '</p>' +
        ' <div class="addcart"><button class="cartlink">Add to Cart</button></div>'
    productCatalog.appendChild(productCatalogItem)
}

