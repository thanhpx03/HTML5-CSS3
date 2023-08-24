/* ham -function
ham khong co tham so
ham khong co tham so va co retrun 
ham co tham so va khong co return
ham co tham so va co return
*/
// tinh tong -fuction ()()
function tinhtong(){
 let s=10,b=5;
 let sum=a+b;
 console.log(sum);
 return sum;
}
const tiendanhde=tinhtong()+10000;
console.log(tiendanhde);
// tham so:giong nhu la bien duoc chuyen trong ham khi khoi tao
//doi so : la gia tri truyen vao ham so
function tinhtong(a,b){
   
    let sum=a+b;
 //   console.log(sum);
    return sum;
   }
   function tinhtong(){
   
    let sum=0;
 //   console.log(sum);
 for(let item of arguments){
     sum=+item;
 }
    return sum;
   }