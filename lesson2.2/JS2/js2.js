//первая часть ДЗ
var a = 1, b = 1, c, d;
c = ++a; console.log(c);           // 2 стандартный префиксный инкримент переменная a была 1 её увеличили на 1 и присвоили переменной c
d = b++; console.log(d);           // 1 постфиксный инкремент сначалапеременной d присвоили значение переменной b (единица) потом переменную b увеличили на 1
c = (2+ ++a); console.log(c);      // 5 на 3 строке мы уже увеличила переменную а до 2, сейчас инкрементом увеличили до 3 и прибавили 2, сумму присвоили переменной с
d = (2+ b++); console.log(d);      // 4 переменная b ранее на 4 строке была увеличена до 2, т.к. тут используется постфиксый декремент, то сначала прибавили 2, потом сумму присвоили переменной d и только потом увеличили на 1 переменную b
console.log(a);                    // 3 переменная а увеличивалась на 1 дважды на 3 и 5 строке
console.log(b);                    // 3 переменная b увеличивалась на 1 дважды на 4 и 6 строке
console.log('Конец пункта №1 ДЗ ')
//вторая часть ДЗ
var a = 2;
var x = 1 + (a *= 2);
console.log(x)                      //5 судя по всему это сокращённая запись a *= 2 от a=a*2 но описания я нигде этого не нашёл ни в методичке ни в интернете
console.log('Конец пункта №2 ДЗ ')
//третья часть ДЗ
var a, b
a=((Math.random() < 0.5) ? -1 : 1)*Math.random() //генерируем случайные значения от -1 до 1
b=((Math.random() < 0.5) ? -1 : 1)*Math.random()


if ((a>=0) && (b>=0)) {
    console.log(a-b)
}
else if ((a<0) && (b<0)) {
    console.log(a*b)
}
else {
    console.log(a+b)
}
console.log('Конец пункта №3 ДЗ ')
//четвёртая часть ДЗ
var a
a=Math.round(Math.random()*15)
// вывод чисел от а до 15 с помощью маленького цикла
output(a)
function output(z) {

    while (z<15) {
        console.log(z+1)
        z=z+1
    }

}
console.log('Второй вариант пункта №4 ДЗ ')
//не очень понимаю зачем тут использовать switch, это только увеличивает код, но раз надо то надо...
switch (a) {
    case (0): console.log('1')
    case (1): console.log('2')
    case (2): console.log('3')
    case (3): console.log('4')
    case (4): console.log('5')
    case (5): console.log('6')
    case (6): console.log('7')
    case (7): console.log('8')
    case (8): console.log('9')
    case (9): console.log('10')
    case (10): console.log('11')
    case (11): console.log('12')
    case (12): console.log('13')
    case (13): console.log('14')
    case (14): console.log('15')
        break
    default: console.log('Указано неккоректное число')

}


console.log('Конец пункта №4 ДЗ ')
//пятая часть ДЗ
var a=1, b=2
function addition (q,w) {
    return(q+w)
}
function substraction (q,w) {
    return(q-w)
}
function division (q,w) {
    return(q/w)
}
function multiplication (q,w) {
    return(q*w)
}

console.log(addition(a,b))
console.log(substraction(a,b))
console.log(division(a,b))
console.log(multiplication(a,b))

console.log('Конец пункта №5 ДЗ ')

//шестая часть ДЗ

function mathOperation(arg1, arg2, arg3) {
    switch (arg3) {
        case('add'):console.log(addition(arg1,arg2));
            break;
        case('sub'):console.log(substraction(arg1,arg2));
            break;
        case('div'):console.log(division(arg1,arg2));
            break;
        case('multi'):console.log(multiplication(arg1,arg2));
            break;
        default:console.log('Указана неккоректная операция');
            break;

    }

}

mathOperation(3, 4, 'add')
mathOperation(3, 4, 'sub')
mathOperation(3, 4, 'div')
mathOperation(3, 4, 'multi')


console.log('Конец пункта №6 ДЗ ')

//седьмая часть ДЗ

if (null==0) {
    if (null===0){console.log('null абсолютно равно 0')}//в операторе абстрактного сравнения равенств не предусмотрен случай сравнения null и числа, поэтому возвращается fslse по умолчанию, хотя если преобразовывать null в число то получаем +0 по спецификации.
    else {
        console.log('null равно 0, кроме формата')
    }

}

else if (null>0) {
    console.log('null больше 0')
}
else if (null<0) {
    console.log('null меньше 0')
}
else if (null>=0) {
    console.log('БРЕД!! Если null < 0 принимает значение false, то null >= 0 принимает значение true')
}
else    {
    console.log('null невозможно сравнить с 0')
}
if (null<=0) {
    console.log('Обратный БРЕД!!')
}

console.log('Конец пункта №7 ДЗ ')

//восьмая часть ДЗ

function power(val, pow) {
    var sum=0
    if (pow==0) {
        sum=1
    }
    else if (pow ==1) {
        sum=val
    }
    else if ((pow>1) && (Number.isInteger(pow))) {
        sum=val*(power(val, pow-1))

    }
    else {
        console.log('Введено неккоректное значение степени')
    }
    return sum
}
console.log(power(2,3.25))
console.log(power(2,10))

console.log('Конец пункта №7 ДЗ ')



