var student1 = {
    id: 1,
    name: 'seaim',
    age: 20,
    phone: 123456789,
    
}
var student2 = {
    id: 2,
    name: 'karim',
    age: 18,
    phone: 123456789,
    
}
//property access
//No 1
// var phone_number = student1.phone;
//No 2
var phone_number = student1["name"];
console.log(phone_number);
//update number
var update_number = ['phone'];
update_number.phone = 666666;
console.log(update_number);
student2['phone']=9999999;
console.log(student2);