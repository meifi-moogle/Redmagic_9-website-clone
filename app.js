const phoneImage = document.querySelector('.phone-color-0')
const phoneImageTwo = document.querySelector('.phone-2-color-0')
const colorOptions = document.querySelectorAll('.color-option')
const optionsBorder = document.querySelectorAll('.border')


for (let i = 0; i < colorOptions.length; i++) {
    colorOptions[i].addEventListener('click', function() {

        phoneImage.src = `./images/phone-color-${i}.webp`
        phoneImageTwo.src = `./images/phone-2-color-${i}.webp`

        colorOptions.forEach((colorOption) => {
            colorOption.classList.remove('active')
            colorOption.classList.add('inactive')
        })

        colorOptions[i].classList.remove('inactive')
        colorOptions[i].classList.add('active')

        optionsBorder.forEach((border) => {
            border.classList.remove('active-border')
            border.classList.add('inactive-border')
        })

        optionsBorder[i].classList.remove('inactive-border')
        optionsBorder[i].classList.add('active-border')
    })
}