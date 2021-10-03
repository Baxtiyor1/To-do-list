const elList = document.querySelector('.menu');
const elInput = document.querySelector('#input');
const elBtn = document.querySelector('#btn');


elBtn.addEventListener('click', () =>{
    let newLi = document.createElement('li')
    let newTextArea = document.createElement('p')
    let newCheckbox = document.createElement('input')
    let newBtn = document.createElement('button')

    newLi.classList.add('item')
    newTextArea.classList.add('item__text')
    newCheckbox.classList.add('item__checkbox')
    newCheckbox.setAttribute("type", "checkbox")
    newBtn.classList.add('item__btn', 'fas', 'fa-trash-alt', 'fa-1x')
    newBtn.setAttribute("type", "button")

    newTextArea.textContent = elInput.value.trim()

    newLi.appendChild(newCheckbox)
    newLi.appendChild(newTextArea)
    newLi.appendChild(newBtn)

    console.log(newLi)

    elList.appendChild(newLi)
})