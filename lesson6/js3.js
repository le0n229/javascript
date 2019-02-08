
//вывод католога и вывод модального окна
let productCatalog = document.getElementById('product')
let product = [{id: 1, name: 'product1', price: 100, quantity: 1, imgCount: 2, img1: 'f1img', img2: 'f2img'}, {
    id: 2,
    name: 'product2',
    price: 200,
    quantity: 1,
    imgCount: 3,
    img1: 'f2img',
    img2: 'f3img',
    img3: 'f4img'
}, {id: 3, name: 'product4', price: 100, quantity: 1, imgCount: 2, img1: 'f3img', img2: 'f2img'}, {
    id: 4,
    name: 'product4',
    price: 200,
    quantity: 1,
    imgCount: 3,
    img1: 'f4img',
    img2: 'f3img',
    img3: 'f4img'
}]
for (let i = 0; i < product.length; i++) {
    let productCatalogItem = document.createElement('div')
    productCatalogItem.classList.add('f1')
    productCatalogItem.id = product[i].id;

    productCatalogItem.innerHTML = '<div class="' + product[i].img1 + ' fimg"></div>  <p>' + product[i].name + '</p>' +
        ' <p class="pink">$' + product[i].price + '</p>' +
        ' <div class="addcart"><button class="cartlink">Add to Cart</button></div>'
    productCatalog.appendChild(productCatalogItem)
}


let $img = document.getElementsByClassName('f1');//картинки на которые вешаем обработкик для вызова модального окна
let $modal = document.getElementsByClassName('modal');

//открываем модальное окно при открытии указываем id
for (let i = 0; i < $img.length; i++) {
    $img[i].addEventListener('click', function (e) {
        for (let i = 0; i < product.length; i++) {
            if (product[i].id == e.currentTarget.id) {
                $modal[0].innerHTML = '<div class="' + product[i].img1 + ' fimg size"></div>'
                $modal[0].id = product[i].id;
            }
        }
        $modal[0].classList.toggle('display');

    })


}

//считаем клики и подставляем разные картинки на основании ид объекта
var imgClick = 2;
$modal[0].addEventListener('click', function (e) {
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == e.currentTarget.id) {
            $modal[0].innerHTML = '<div id:\"' + product[i].id + '\" class="' + product[i]['img' + imgClick] + ' fimg size"></div>'
            if (imgClick === product[i].imgCount) {
                imgClick = 1;
            } else {
                imgClick++;
            }
        }
    }
})

//скрываем модальное окно
document.body.addEventListener('click', function (e) {
    if ((!(e.target).classList.contains('fimg'))) {
        $modal[0].classList.add('display');
    }
})



