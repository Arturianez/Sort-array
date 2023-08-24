const wrapper = document.querySelector('.wrapper')
const button = document.querySelector('.button')

const array = ['one', 'two', 'three', 'four', 'five']

button.addEventListener('click', function(){
    const ulist = document.createElement('ul')
    const list_item = document.createElement('li')
    wrapper.append(ulist)
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        ulist.textContent = item
        ulist.append(list_item)
    }
})
// вывести все строки по клику, доделать
// попробовать через querselcetALL
