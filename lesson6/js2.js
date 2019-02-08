//корзина
var basket = []// массив для хранения объектов в корзине
var cartProducts = document.getElementById('cartProducts')//блок для вставки продуктов в корзине
var addProductButton = document.getElementsByClassName('cartlink')//кнопка добавления продуктов в корзину

//циклом перебираем все кнопки вешаем на них обработчик событий для добавления объектов в коорзину, причём чётные элементы добавляют один объект, а нечётные другой.
for (let i = 0; i < addProductButton.length; i++) {
    addProductButton[i].addEventListener('click', function () {
        let product1 = {id: 1, name: 'product1', price: 100, quantity: 1}
        let product2 = {id: 2, name: 'product2', price: 200, quantity: 1}
        let productBasket = {}
        let notInBasket = true
        if (i % 2 === 0) {
            productBasket = product1
        } else {
            productBasket = product2
        }
        if (basket.length === 0) {
            basket.push(productBasket)
        } else {
            for (let i = 0; i < basket.length; i++) { //в случае если этот объект уже есть в корзине, то увеличиваем кол-во
                if (basket[i].id === productBasket.id) {
                    basket[i].quantity++
                    notInBasket = false
                    break
                }
            }
            if (notInBasket) {
                basket.push(productBasket)
            }
        }
        alert('Вы добавили в корзину ' + productBasket.name)
        cartProducts.innerHTML = ''
        let basketTotal = 0
        let quantity = 0
        for (let i = 0; i < basket.length; i++) { //формируем корзину и пересчитываем сумму
            let cartProd = document.createElement('div')
            cartProd.classList.add('cartprod1')
            cartProd.innerHTML = '<img src="img/grey.jpg" alt="prod1"><h3>' + basket[i].name + '</h3>' + '<i class="fas fa-star ' +
                'star"></i><i class="fas fa-star star"></i><i class="fas fa-star star"></i><i class="fas fa-star star"></i><i class=' +
                '"fas fa-star-half-alt star"></i> <p class="pink">' + basket[i].quantity + ' x $' + basket[i].price + '</p>'

            cartProducts.appendChild(cartProd)
            basketTotal += (basket[i].quantity * basket[i].price)
            quantity += basket[i].quantity
            document.getElementById('total').innerText = '$' + basketTotal + ' за ' + quantity + 'предмет(а)'


        }


    })
}












