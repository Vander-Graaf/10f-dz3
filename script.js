


 

// задание 1
function start(a, b) {

  if (a < b) {
   console.log(`${a} меньше ${b}`);
   
  } else {
   console.log(`${b} меньше ${a}`);
  }

}


start(3, 12);
// задание 1





// задание 2
function makeNumber(c, d){
return Math.pow(c, d);
}



const result = makeNumber(2, 6);
console.log(result);
// задание 2



// ↓ доп задания ↓




// задание 3
const sendSMS = (number, SMStext) => {

console.log(`Отправлено SMS на номер ${number} с текстом: ${SMStext}`);

};
 
 const number = "+996500101010";
 const SMStext = "Вы выйграли 100.000$";

 sendSMS(number, SMStext);
// задание 3





// задание 4
const bankAccount = {
   accountNumber: "49827492135",
   balance: 1000,
 
   sendTransfer: function(accountNumber, amount) {

     if (bankAccount.balance >= amount && accountNumber === bankAccount.accountNumber) {

            console.log(`Выполняется перевод на счет ${accountNumber} на сумму ${amount}$`);
            bankAccount.balance -= amount;
            console.log("Перевод выполнен успешно");
            console.log(`Новый баланс: ${bankAccount.balance}$`);

     } else if (accountNumber !== bankAccount.accountNumber)  {
       console.log("Неверный номер счёта");
     } else  {
       console.log("Недостаточно средств для перевода");
     }
   }

 };


 bankAccount.sendTransfer("49827492135", 500); 
// задание 4































































































