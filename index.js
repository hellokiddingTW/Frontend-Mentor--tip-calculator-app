const bill = document.querySelector('#bill')
const member = document.querySelector('#member')
const tipAmount = document.querySelector('.tipAmount')
const total = document.querySelector('.total')
const reset = document.querySelector('.reset')
let tips = document.querySelectorAll('.btnGroup button')
let customInput = document.querySelector('.custom')

let tip
let clickedNow = null


tips.forEach((item, index) => {
    item.addEventListener('click', () => {
        // index == item.getAttribute('data-num')? item.style.backgroundColor = 'red' : item.style.backgroundColor = 'yellow'
        tip = item.getAttribute('data-percent') / 100
        clickedNow = index
        customInput.value = ''
        cal(tip)
        changeBGC()
    })
})


function cal(tip) {
    reset.classList.remove('disabled')
    let billMoney = parseInt(bill.value);
    let person = parseInt(member.value);
    let amountNum = billMoney * tip / person || 0
    let totalNum = billMoney * (1 + tip) / person || 0
    tipAmount.textContent = `$${amountNum.toFixed(2)}`
    total.textContent = `$${totalNum.toFixed(2)}`
}

function changeBGC(){
    tips.forEach(item =>{
        if(item.getAttribute('data-num')== clickedNow ){
            item.style.backgroundColor = 'hsl(172, 67%, 45%)'
        }else{
            item.style.backgroundColor = '#00494d' 
        }
    })
}


function showWarning() {
    if (parseInt(member.value) <= 0) {
        document.querySelectorAll('.member label')[1].style.display = 'inline-block'
        member.classList.add('outline--warning')
    } else {
        document.querySelectorAll('.member label')[1].style.display = 'none'
        member.classList.remove('outline--warning')
        console.log('safe')
    }
}

function resetAll(){
    reset.classList.add('disabled')
    bill.value = ''
    customInput.value = ''
    clickedNow = ''
    member.value = ''
    tipAmount.textContent = `$0.00`
    total.textContent = `$0.00`
    changeBGC()
}

customInput.addEventListener('input',()=>{
    let inputValue = customInput.value
    let inputTip = Number(inputValue/100)
    console.log(inputTip)
    cal(inputTip)
    clickedNow = null
    changeBGC()
})
member.addEventListener('input', showWarning)

reset.addEventListener('click',resetAll )