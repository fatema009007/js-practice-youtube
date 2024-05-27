const accountId = 144554
let accountEmail = "fatema009007@gmail.com"
var accountPassword ="12345"
var accountCity = "Dhaka"
var accountNumber;
/* Don't  user var because of issue of functional scope */
accountEmail ="abvs@gmail.com";
accountPassword= "4597845";
accountCity = "jashore"
console.table([accountEmail,accountPassword,accountCity, accountNumber]);