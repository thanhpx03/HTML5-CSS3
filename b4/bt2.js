let users=["sontv8", "datlt34", "thienth", "tiennh21", "minhdq8"];
const newUser = prompt("Nhap vao ten user");
 let count = 0;
 for(let item of users){
     if(item == newUser){
         count++;
         document.write("tài khoản đăng nhập: " + newUser)
     }
 }
 if(count == 0){
    document.write("tài khoản bạn vừa nhập không tồn tại");
 }

//tha document.write(users.includes(newUser))
// if (users.includes(newUser)) {
//     document.write("tài khoản đăng nhập: " + newUser);
//   } else {
//     document.write("tài khoản bạn vừa nhập không tồn tại");
//   }
  