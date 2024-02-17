const phoneImage = document.querySelector('.phone-color-0')
const phoneImageTwo = document.querySelector('.phone-2-color-0')
const colorOptions = document.querySelectorAll('.color-option')
const optionsBorder = document.querySelectorAll('.border')

// Function To Display Different Phones and Effects On Clicks 
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

     

        //  Reliably Play Phone Swaps Animations 
         if (phoneImage.style.animationName === 'slide-in') {
            phoneImage.style.animation = "slide-in-alt 1000ms"
        } else {
            phoneImage.style.animation = "slide-in 1000ms"
        }

         if (phoneImageTwo.style.animationName === 'slide-in-2') {
            phoneImageTwo.style.animation = "slide-in-alt-2 1000ms"
        } else {
            phoneImageTwo.style.animation = "slide-in-2 1000ms"
        }
    })
}