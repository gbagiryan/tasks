//12
const phoneNumbers = [];
let newNum;
while (newNum !== 'stop') {
  newNum = prompt('Enter phone number');
  if (!newNum) {
    alert('try again')
  } else if (phoneNumbers.includes(newNum)) {
    alert('already exists');
  } else {
    phoneNumbers.push(newNum);
    alert('Thank you');
    break;
  }
}
