class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts()
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
            {id: 5, title: 'Chair', price: 150},
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }

    priceSum() {//метод, определяющий суммарную стоимость всех товаров
        let sum = 0;
        for (product of this.goods) {
            sum += product.price;
        }
        return sum;

    }
}


class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();
list.render();

// класс корзины товаров
class Cart {
    constructor(container) {
        this.container = container;
        this.products=[];

    }

    //отрисовка
    render() {

    }

    //расчёт суммы корзины
    cartSum() {
        let sum = 0;
        for (product of this.products) {
            sum += product.price;
        }
        return sum;

    }
}

// класс элемента корзины товаров
class CartItem {
    constructor(product, img = 'https://placehold.it/200x150', amount) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
        this.amount = amount;
    }

    //отрисовка
    render() {

    }
}