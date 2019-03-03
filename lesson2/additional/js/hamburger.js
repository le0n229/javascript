class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.seasoning = false;
        this.mayonnaise = false;

    }

    addTopping(topping) {    // Добавить добавку
        switch (topping) {
            case 'seasoning':
                this.seasoning = true;
                break;
            case 'mayonnaise':
                this.mayonnaise = true;
                break;
        }
    }

    removeTopping(topping) { // Убрать добавку
        switch (topping) {
            case 'seasoning':
                this.seasoning = false;
                break;
            case 'mayonnaise':
                this.mayonnaise = false;
                break;
        }
    }


    getSize() {              // Узнать размер гамбургера
        return this.size;
    }

    getStuffing() {          // Узнать начинку гамбургера
        return this.stuffing;
    }

    calculatePrice() {       // Узнать цену
        let price = 0;
        switch (this.size) {
            case 'big':
                price = 100;
                break;
            case 'small':
                price = 50;
                break;
            default:
                return 'Вы не указали размер!';
        }
        switch (this.stuffing) {
            case 'cheese':
                price += 10;
                break;
            case 'salad':
                price += 20;
                break;
            case 'potato':
                price += 15;
                break;
            default:
                return 'Вы не указали начинку!';
        }
        price += this.seasoning * 15 + this.mayonnaise * 20;
        return price;
    }

    calculateCalories() {    // Узнать калорийность
        let calories = 0;
        switch (this.size) {
            case 'big':
                calories = 40;
                break;
            case 'small':
                calories = 20;
                break;
            default:
                return 'Вы не указали размер!';
        }
        switch (this.stuffing) {
            case 'cheese':
                calories += 20;
                break;
            case 'salad':
                calories += 5;
                break;
            case 'potato':
                calories += 10;
                break;
            default:
                return 'Вы не указали начинку!';
        }
        calories += this.mayonnaise * 5;
        return calories;

    }
}

let hamburger1=new Hamburger('big', 'cheese');
hamburger1.addTopping('mayonnaise');
console.log(hamburger1.calculatePrice());
console.log(hamburger1.calculateCalories());