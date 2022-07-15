 var student = { id: 10, phone: 01628790526, name: "abir" };
 var student2 = { id: 11, phone: 01710079354, name: "karim" };

 var phoneNum = student.phone;

 //Using array
 var phonenumberA = student2["phone"]
 console.log("Array " + phonenumberA);

 var id1 = student.id;
 console.log(id1);
 console.log(phoneNum);
 console.log(student);
 console.log(student2);
 //update
 student.phone = 0246256454;
 console.log(student.phone);
 //add new property

 student2.cenema = "Ogni";
 console.log(student2.cenema);