const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button data-id=${this.id} class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

// обернул в промис
function getRequestPromise(url) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    // window.ActiveXObject -> xhr = new ActiveXObject()
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        resolve(xhr.responseText);
      }
    };
    xhr.send();
  });
}

class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    // this._getProducts()
    //   .then((data) => {
    //     this.goods = [...data];
    //     this.render();
    //   });
    // отрисовываем наши продукты
    this._fetchProducts('catalogData.json')
      .then(() => {
        // this.goods = [...data];
        this.render();
      });
  }

  // через await получил промис
  async _fetchProducts(jsonItem) {
    const data = await getRequestPromise(`${API}/${jsonItem}`);
    this.goods = JSON.parse(data);
  }


  //   _getProducts() {
  //   return fetch(`${API}/catalogData.json`)
  //     .then(result => result.json())
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  calcSum() {
    return this.allProducts.reduce((accum, item) => accum += item.price, 0);
  }

  render() {
    const block = document.querySelector(this.container);
    for (const product of this.goods) {
      const productObj = new ProductItem(product);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML('beforeend', productObj.render());
    }
    const addBtn = [...document.querySelectorAll('.buy-btn')];
    for (const button of addBtn) {
      button.addEventListener('click', (e) => {
        for (const product of list.goods) {
          if (product.id_product === +e.target.dataset.id) {
            basket.addItem(product);
          }
        }
      });
    }
  }
}


const list = new ProductsList();
// console.log(list.calcSum());


// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Mouse', price: 20},
//     {id: 3, title: 'Keyboard', price: 200},
//     {id: 4, title: 'Gamepad', price: 50},
//     {id: 5, title: 'Chair', price: 150},
// ];
//
// const renderProduct = (product, img = 'https://placehold.it/200x150') => {
//     return `<div class="product-item">
//                 <img src="${img}" alt="Some img">
//                 <div class="desc">
//                     <h3>${product.title}</h3>
//                     <p>${product.price} $</p>
//                     <button class="buy-btn">Купить</button>
//                 </div>
//             </div>`
// };
//
// const renderPage = list => {
//     // document.querySelector('.products').innerHTML = list
//     .map(item => renderProduct(item)).join('');
//     // document.createElement()
//
//     // for (let element of list){
//         // document.getElementById().innerHTML += element;
//         // document.getElementById().insertAdjacentHTML('beforeend', element);
//     // }
// };
//
// renderPage(products);
