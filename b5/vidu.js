   function validate(){
    var ten= document.formdangky.txtten.value;
    var tendd=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    var ok=true;
    var mk=document.formdangky.txtmk.value;
     if(ten==""){
         document.getElementById("loiten").innerHTML="khong de trong ten ";
         ok=false;
     }else if(!ten.match(tendd)){

     document.getElementById("loiten").innerHTML="ten k dung dinh dang";
     ok=false;

     }else document.getElementById("loiten").innerHTML="";
     if (mk==""){
         document.getElementById("loimk").innerHTML="p nhap mk";
         ok=false;
     }else if(mk.length<6){
         document.getElementById("loimk").innerHTML="mk yeu";
         ok=false;
     }else if(mk.length<8){
         document.getElementById("loimk").innerHTML="mk trung binh";
         ok=false;
     }else if(mk.length>8){
         document.getElementById("loimk").innerHTML="mk manh";
     ok=false;

     }else document.getElementById("loimk").innerHTML="";

     if(ok){
         alert("dang nhap thanh cong");
         return true;
     }else return false;



}