class BasketItem extends ProductItem {
  constructor(product, img = 'https://placehold.it/50x50') {
    super(product, img);
    this.quantity = product.quantity;
  }

  render() {
    return ` <div data-id=${this.id} class="cartItem"><div class="cartItemLeft">
 <img src="${this.img}" alt="img">
                <div class="description"><p>${this.title}</p>
                    <p>Quantity: ${this.quantity} </p>
                    <p>price: ${this.price}$</p></div></div>
                <div class="subTotal">
                    <p>${this.price * this.quantity}$</p>
                    <div data-id=${this.id} class="delete-btn" type="button">X</div>
                </div>
            </div>`;
  }
}

class BasketList {
  constructor(container = '#cartProducts') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    // отрисовываем наши продукты
    this._fetchProducts2('getBasket.json')
      .then(() => {
        this.render();
      });
  }

  async _fetchProducts2(jsonItem) {
    const response = await fetch(`${API}/${jsonItem}`);
    const data = await response.json();
    this.goods = data.contents;
  }

  render() {
    const block = document.querySelector(this.container);
    block.innerHTML = '';
    for (const product of this.goods) {
      const productObj = new BasketItem(product);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML('beforeend', productObj.render());
    }
    const deleteBtn = [...document.querySelectorAll('.delete-btn')];
    for (const button of deleteBtn) {
      button.addEventListener('click', (e) => {
        for (const product of basket.goods) {
          if (product.id_product === +e.target.dataset.id) {
            basket.removeItem(product);
          }
        }
      });
    }
  }

  addItem(product) {
    let newItem = true;
    for (const item of this.goods) {
      if (item.id_product === product.id_product) {
        item.quantity += 1;
        newItem = false;
      }
    }
    if (newItem) {
      product.quantity = 1;
      this.goods.push(product);
    }
    this.render();
  }

  removeItem(product) {
    for (let i = 0; i < this.goods.length; i += 1) {
      if (this.goods[i].id_product === product.id_product) {
        this.goods[i].quantity -= 1;
        if (this.goods[i].quantity === 0) {
          this.goods.splice(i, 1);
        }
      }
    }

    this.render();
  }
}

const basket = new BasketList();
document.addEventListener('DOMContentLoaded', async () => {
  // const deleteBtn = [...document.querySelectorAll('.delete-btn')];
  // for (const button of deleteBtn) {
  //   button.addEventListener('click', (e) => {
  //     for (const product of basket.goods) {
  //       if (product.id === e.target.dataset.id) {
  //         basket.removeItem(product);
  //       }
  //     }
  //   });
  // }
});
