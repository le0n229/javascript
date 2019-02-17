var basket = [{id: 1, name: 'product1', price: 100, quantity: 1, imgCount: 2, img1: 'f1img', img2: 'f2img'}, {
    id: 2,
    name: 'product2',
    price: 200,
    quantity: 1,
    imgCount: 3,
    img1: 'f2img',
    img2: 'f3img',
    img3: 'f4img'
}, {id: 3, name: 'product3', price: 100, quantity: 3, imgCount: 2, img1: 'f3img', img2: 'f2img'}, {
    id: 4,
    name: 'product4',
    price: 200,
    quantity: 2,
    imgCount: 3,
    img1: 'f4img',
    img2: 'f3img',
    img3: 'f4img'
}]// массив для хранения объектов в корзине
var $cartProducts = document.getElementById('cartPageProducts')//блок для вставки продуктов в корзине

function drawBasket() {
    if (basket.length === 0) {
        $cartProducts.innerHTML = ''
        let $emptyBasket = document.createElement('div')
        $emptyBasket.classList.add('emptyBasket')
        $emptyBasket.innerHTML = '<p class="pink">Корзина пуста</p>'
        $cartProducts.appendChild($emptyBasket)
        document.getElementById('total').innerText = '$0 за 0 единиц'

    } else {
        $cartProducts.innerHTML = '<div class="cartPageTitles cartPageBlock">Products</div>\n' +
            '    <div class="cartPageTitles cartPageBlock">Quantity</div>\n' +
            '    <div class="cartPageTitles cartPageBlock">Price</div>\n' +
            '    <div class="cartPageTitles cartPageBlock">Actions</div>'
        let basketTotal = 0
        let quantity = 0
        for (let i = 0; i < basket.length; i++) { //формируем корзину и пересчитываем сумму
            let $cartProd = document.createElement('div')
            $cartProd.classList.add('cartprod1')
            $cartProd.innerHTML = '<img src="img/grey.jpg" alt="prod1"><h3>' + basket[i].name + '</h3>' + '<i class="fas fa-star ' +
                'star"></i><i class="fas fa-star star"></i><i class="fas fa-star star"></i><i class="fas fa-star star"></i><i class=' +
                '"fas fa-star-half-alt star"></i>'

            $cartProducts.appendChild($cartProd)

            let $cartProdQuantity = document.createElement('div')
            $cartProdQuantity.classList.add('cartPageQuantity')
            $cartProdQuantity.classList.add('cartPageBlock')
            $cartProdQuantity.innerHTML = '<p class="pink">' + basket[i].quantity + '</p>'
            $cartProducts.appendChild($cartProdQuantity)


            let $cartProdPrice = document.createElement('div')
            $cartProdPrice.classList.add('cartPageQuantity')
            $cartProdPrice.classList.add('cartPageBlock')
            $cartProdPrice.innerHTML = '<p class="pink">$' + basket[i].price + '</p></div>'
            $cartProducts.appendChild($cartProdPrice)


            let $cartProdAction = document.createElement('div')
            $cartProdAction.classList.add('cartPageDelete')
            $cartProdAction.classList.add('cartPageBlock')
            $cartProdAction.id = basket[i].id
            $cartProdAction.innerHTML = '<p class="pink">DELETE</p></div>'

            $cartProducts.appendChild($cartProdAction)


            basketTotal += (basket[i].quantity * basket[i].price)
            quantity += basket[i].quantity
            document.getElementById('total').innerText = '$' + basketTotal + ' за ' + quantity + ' единиц'

            var $cartPageDelete = document.getElementsByClassName('cartPageDelete')
            for (let item of $cartPageDelete) {
                item.addEventListener('click', function (e) {
                    for (let i = 0; i < basket.length; i++) {
                        if (basket[i].id == e.currentTarget.id) {
                            basket.splice(i, 1)
                            drawBasket()

                        }
                    }
                })

            }

        }
    }
}

drawBasket()

var $cartPageOrder = document.getElementById('cartPageOrder')
var $cartPageOrderNext = document.getElementById('cartPageOrderNext')
var $cartPageOrderBack = document.getElementById('cartPageOrderBack')
var $cartAllProducts = document.getElementById('cartPageAllProducts')
var $cartPageContacts = document.getElementById('cartPageContacts')
var $cartPageComments = document.getElementById('cartPageComments')


$cartPageOrder.addEventListener('click', function () {
    $cartAllProducts.style.display = 'none'
    $cartPageContacts.style.display = 'block'
})

$cartPageOrderNext.addEventListener('click', function () {
    $cartPageContacts.style.display = 'none'
    $cartPageComments.style.display = 'block'
})

$cartPageOrderBack.addEventListener('click', function () {
    $cartPageContacts.style.display = 'none'
    $cartAllProducts.style.display = 'block'
})




