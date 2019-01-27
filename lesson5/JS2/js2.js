//первая часть ДЗ

var grid = document.createElement('div')
grid.classList.add('grid')
var rows = 1
var colls = (' ABCDEFGH')
for (let i = 0; i < 81; i++) {
    if ((i % 2 == 1) && (i > 8) && (i % 9 !== 0)) {
        var itemBlack = document.createElement('div')
        itemBlack.classList.add('item', 'black')
        itemBlack.id = 'item' + i
        grid.append(itemBlack)
    } else {
        var item = document.createElement('div')
        item.classList.add('item')
        item.id = 'item' + i
        if ((i < 9) && (i > 0)) {
            item.innerText = (colls[i])
        }
        if ((i % 9 === 0) && (i > 0)) {
            item.innerText = (rows++)
        }
        grid.appendChild(item)

    }

}

document.body.appendChild(grid)


var styleGrid = document.createElement('style')
styleGrid.type = 'text/css'
styleGrid.innerHTML = ('.grid {    display: grid;    grid-template-columns: 100px 100px 100px 100px 100px 100px 100px 100px 100px; ' +
    'grid-template-rows: 100px 100px 100px 100px 100px 100px 100px 100px 100px;}.item {\n' +
    '        border: 1px solid black;\n' +
    '    }\n' +
    '    .black {\n' +
    '        background-color: black;\n' +
    '    }')

document.head.appendChild(styleGrid)

console.log('Конец пункта №1 ДЗ ')









