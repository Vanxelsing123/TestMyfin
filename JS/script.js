
/* открытие и удаление модалки */

const formBtn = document.querySelector('.form__btn--name')
const modalForm = document.querySelector('.modal__form')
const modalBtn = document.querySelector('.table__btn')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal__content')
const modalClose = document.querySelector('.modal__close')

modalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal__active')
    modalContent.classList.add('modal__active')
    document.body.classList.add('scroll')
})


modalClose.addEventListener('click', () => {
    modal.classList.remove('modal__active');
})

document.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('modal__active');
    }
});


/* Добваление в console */

   

    formBtn.addEventListener('click', (e) => {
        e.preventDefault
        const name = document.getElementById('Name')
        const surName = document.getElementById('Surname')
        const phone = document.getElementById('Phone')
        const nameCredit = document.getElementById('consumer')
    
        const nameValue =  name.value
        const surNameValue = surName.value
        const phoneValue = phone.value
        const nameCreditValue = nameCredit.value

        name.value = ''
        surName.value = ''
        phone.value = ''
        
    
        modal.classList.remove('modal__active')

        console.log(`Имя клиента: ${nameValue}, Фамилия Клиента: ${surNameValue}, Телефон клиента: ${phoneValue}, Название кредита: ${nameCreditValue} `)
    })


