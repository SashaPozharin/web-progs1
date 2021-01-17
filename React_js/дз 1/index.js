let boyClub = ['Антон', 'Максим', 'Аня', 'Василий', 'Катя']
let amongUs = boyClub.map(function (item, i){
    if (item == 'Аня'){
        console.log('Этот traitor не из нашего клуба!')
        item = 'Александр'
    }
    if (item == 'Катя'){
        console.log('Этот traitor не из нашего клуба!')
        item = 'Степан'
    }
    return item   
})
console.log(amongUs)