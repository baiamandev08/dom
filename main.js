// console.log(document.getElementsByName('h1'))
// console.log(document.getElementsByClassName('name'))
// console.log(document.getElementById('arr'))


// let h1=document.querySelector('h1')
// let clas=document.querySelector('.name')
// let id=document.querySelector('#arr')
// console.log(h1)
// console.log(clas)
// console.log(id)


// let div=document.querySelectorAll('.title')
// console.log(div)

// let h1ClassName=document.querySelector('.H1')
// console.log(h1ClassName)
//
//
// let h1=document.querySelector('h1')
// console.log(h1)
//
// let title=document.querySelectorAll('.block .text')
// console.log(title)
//
// let id=document.querySelector('#input')
// console.log(id)


// let btn=document.querySelector('.btn')
// let h1=document.querySelector('.text')
//
// let name=['Naruto','gaara','levi']
// btn.addEventListener('click',()=>{
//     h1.innerHTML=name[Math.floor(Math.random()*name.length)]
// })
//

//
// click
// btn.addEventListener('click',()=>{
//     if (h1.style.color ==="red"){
//         h1.style.color='black'
//     }else h1.style.color ="red"
// })
//


//
// name:name
// name:name
// name:name
// let h1 = document.querySelectorAll('.name')
// let name = ['Naruto', 'gaara', 'levi']
// h1.forEach((el, idx) => {
//     return el.innerHTML += [idx + 1 + ':']+name[idx]
// })
// console.log(h1)


// random цвет
// let block = document.querySelectorAll('.blocks .block')
//
// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'indigo',
//     'violet',
//     'pink',
//     'white',
//     'black'
//
// ];
//
// block.forEach(el=>{
//     el.addEventListener('click',()=>{
//         el.style.background=colors[Math.floor(Math.random()* colors.length)]
//     })
// })

// value
// const h1Name=document.querySelector('.h1'),
//  btnO=document.querySelector('.btn'),
//  input=document.querySelector('.input')
//
// btnO.addEventListener('click',()=>{
//     h1Name.textContent += input.value
//     input.value=''
// })


const btn = document.querySelector('.menu-btn'),
    open = document.querySelector('.open'),
    closeBtn = document.querySelector('.close-btn'),
    menu = document.querySelector('.menu')

btn.addEventListener('click', () => {
    if (menu.style.display === 'none') {
        menu.style.display = 'block'
        menu.style.display = "flex"
        open.style.display = "none"
        closeBtn.style.display = "block"

    } else {
        menu.style.display = 'none'
        open.style.display = "block"
        closeBtn.style.display = "none"
    }
})


const modalBtn = document.querySelector('.modal-window'),
    windowModal = document.querySelector('.window'),
    modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', () => {
    windowModal.style.display = "block"
    windowModal.style.display = "flex"
})
modalClose.addEventListener('click', () => {
    windowModal.style.display = 'none'
})


// about


const btnOne = document.querySelector('.menu-btn-one'),
    btnTwo = document.querySelector('.menu-btn-two'),
    btnThree = document.querySelector('.menu-btn-three'),
    img = document.querySelector('.modal-img')

btnOne.addEventListener('click', () => {
    img.classList.add('modal-img')
    img.classList.remove('modal-img-two')
    img.classList.remove('modal-img-three')
    btnOne.style.background = '#04CE25'
    btnTwo.style.background = '#D9D9D9'
    btnThree.style.background = '#D9D9D9'

})

btnTwo.addEventListener('click',()=>{
    img.classList.add('modal-img-two')
    img.classList.remove('modal-img')
    img.classList.remove('modal-img-three')
    btnOne.style.background = '#D9D9D9'
    btnTwo.style.background = '#04CE25'
    btnThree.style.background = '#D9D9D9'

})

btnThree.addEventListener('click',()=>{
    img.classList.add('modal-img-three')
    img.classList.remove('modal-img')
    img.classList.remove('modal-img-two')
    btnOne.style.background = '#D9D9D9'
    btnThree.style.background = '#04CE25'
    btnTwo.style.background = '#D9D9D9'

})


const h1NameO=document.querySelector('.h1name'),
    inputBtn=document.querySelector('.input-btn')
inputOne=document.querySelector('.input')


inputBtn.addEventListener('click',()=>{
h1NameO.textContent+=inputOne.value()

})

// const h1Name=document.querySelector('.h1'),
//     btnO=document.querySelector('.btn'),
//     input=document.querySelector('.input')
//
// btnO.addEventListener('click',()=>{
//     h1Name.textContent += input.value
//     input.value=''
// })
