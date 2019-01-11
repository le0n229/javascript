//первая часть ДЗ
var i=0
while (i<101) {
    console.log(i)
    i++
}

console.log('Конец пункта №1 ДЗ ')

//вторая и третья часть ДЗ

var basketPrices=[]//создаём пустой массив

basketPrices.push(1,2,3,4,5)//заполняем какими-то ценами
console.log(basketPrices)

function countBasketPrice(array){
    let sum=0
    for (let i4=0; i4<array.length; i4++){
        sum=sum+array[i4]
    }
    return sum
}

console.log(countBasketPrice(basketPrices))

console.log('Конец пункта №2-3 ДЗ ')

//четвёртая часть ДЗ

for (let i3=0; i3<10; console.log(i3++)){}

console.log('Конец пункта №4 ДЗ ')

//пятая часть ДЗ


for (let i2=0, x='x'; i2<21; i2++) {
      console.log(x)
    x=x+'x'
}

console.log('Конец пункта №5 ДЗ ')

