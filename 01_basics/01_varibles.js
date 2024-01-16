const accountId = 14410;
let accountEmail = "sharique@xyz.com";
var accountPassword = 100454;
accountCity = "Mumbai"; // value will assign but Bad Practice

let accountstate; // Undefined. varible is declared but its value is not Defined. i.e undefined

//Not Allowed. Since Constant Type Varible
// accountId = 14411; 
console.log(accountId);

/*
prefer not to use "var" 
because of its issue in block scope & functional Scope
*/

accountEmail = "ss@xyz.com"
accountPassword = 100100;
accountCity = "Pune";
console.table([accountEmail,accountPassword,accountCity,accountstate]);

