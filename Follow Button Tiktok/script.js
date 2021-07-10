const btn = document.querySelector('.circle')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')

function step2() {
    line1.style = 'transition: 1s; transform: rotate(45deg); width: 70px; margin-top: 30px;margin-left: -70px; background-color:rgb(255, 0, 98);'
    line2.style = 'transition: 1s; transform: rotate(135deg); width: 120px; margin-left: 35px; background-color:rgb(255, 0, 98);'
}

function button() {
    line1.style = 'transition: .5s; transform: rotate(45deg)'
    line2.style = 'transition: .5s; transform: rotate(135deg)'
    btn.style = 'transition: 1s; background-color: white'
    step2()
}
