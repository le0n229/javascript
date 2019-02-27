const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
    {id: 5, price: 50},
    {id: 6, title: 'Gamepad'},
];

const renderProduct = (title = 'Notebook', price = 3000) => {//значения по умолчанию задал, как можно упростить или сократить функции я к сожалению не вижу
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>$${price}</p>
                <button class="buy-btn btn btn-success">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    const productString = productsList.join('');//запятые были т.к. это массив, если склеить его в строку то они исчезают.
    document.querySelector('.products').innerHTML = productString;
};

renderPage(products);