window.onload = () =>

{
    document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip() {
let amount = document.querySelector('#amount').value;
let persons = document.querySelector('#persons').value;
let service = document.querySelector('#services').value;

console.log(service);
if (amount ===  "")   {
    alert("Please enter valid amount");
    return;
}
if( persons == "" )
{
    alert("Please enter valid presons");
    return;
}
if (service == 'Select' )
{
    alert("Please enter valid service");
    return;
}
if (persons === '1')
    document.querySelector('#each').style.display = 'none';
else
    document.querySelector('#each').style.display = 'block';

let total = (amount * service) / persons;
total = total.toFixed(2);


document.querySelector('.tip').style.display = 'block';
document.querySelector('#total').innerHTML = total;

} 
