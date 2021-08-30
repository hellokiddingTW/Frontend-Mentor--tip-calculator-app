const bill = document.querySelector('#bill')
const member = document.querySelector('#member')
const tipAmount = document.querySelector('.tipAmount')
const total = document.querySelector('.total')
let tips = document.querySelectorAll('.btnGroup button')
let tip



tips.forEach(item => {
    item.addEventListener('click', () => {
        tip = item.getAttribute('data-percent')/100
        // cal(tip)
        let billMoney = parseInt(bill.value) || 0 ;
        let person = parseInt(member.value) || 0 ;
        console.log(billMoney)
        console.log(person)
        console.log(tip)
        let amountNum = billMoney * tip / person
        let totalNum = billMoney * (1 + tip)  / person
        tipAmount.textContent = amountNum
        total.textContent = totalNum
    })
})


// function cal(tip) {
//     let billMoney = parseInt(bill.value) || 0 ;
//     let person = parseInt(member.value) || 0 ;
//     console.log(billMoney)
//     console.log(person)
//     console.log(tip)
//     let amountNum = billMoney * tip / person
//     let totalNum = billMoney * (1 + tip)  / person
//     tipAmount.textContent = amountNum
//     total.textContent = totalNum
// }








function showWarning() {
    if (parseInt(member.value) <= 0) {
        document.querySelectorAll('.member label')[1].style.display = 'inline-block'
        member.classList.add('outline--warning')
    } else {
        document.querySelectorAll('.member label')[1].style.display = 'none'
        console.log('safe')
    }
}


member.addEventListener('input', showWarning)