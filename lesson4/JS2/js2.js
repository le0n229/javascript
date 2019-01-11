//первая часть ДЗ

function convert(number) {
    if (number>999) {
        console.log('Вы ввели некорректное число')
    }
    else {
        let numberStr=number.toString()
        let numberObj = {
            'сотни':numberStr[0],
            'десятки': numberStr[1],
            'единицы':numberStr[2]
        }
        return numberObj
    }

}

console.log(convert(567))
console.log(convert(1000))

console.log('Конец пункта №1 ДЗ ')

//вторая часть ДЗ

var basket = {
    prod1:'price',
    prod2:'price',
        basketPrice:0,
    countPrice: function() {
        this.basketPrice=this.prod1+this.prod2
    }
}

basket.prod1=50
basket.prod2=100
basket.countPrice()
console.log(basket.basketPrice)


console.log('Конец пункта №2 ДЗ ')







