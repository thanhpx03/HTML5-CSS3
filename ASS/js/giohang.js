var giohang=new Array();
 function themvaogiohang(x){
     var new1=x.parentElement.children;
     var hinh=new1[0].children[0].src ;
     var gia=new1[1].children[0].innerText;
     var tensp=new1[2].children[0].innerText;
     var sp=new Array(hinh, gia, ten);

     giohang.push(sp);
     

 }

 function showmycart(){
     var ttgh='';
     var tong=0;
     for(var i=0; i<giohang.length;i++){
         var tt=parseInt(giohang[i][1]);
         tong+=tt;
         ttgh+='<tr>'+
         '<td>'+(i+1)+'</td>'+
         '<td><img src="" '+giohang[i][0]+' width="10px" alt=""></td>'+
         '<td>'+giohang[i][1]+'</td>'+
         '<td>'+giohang[i][2]+'</td>'+
        
        ' <td>'+
             '<div>'+tt+'</div>'+
        ' </td>'+
     '</tr>';
     }

     ttgh+='<tr>'+
     '<th colspan="5">Tổng đơn hàng</th>'+
    ' <th>'+
         '<div>'+tong+'</div>'+
    ' </th>'+
' </tr>';
document.getElementById("mycart").innerHTML=ttgh;
 }
 function showcart() {
    var x = document.getElementById("showcart");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    showmycart();
}



 function showgiohang_trangthanhtoan() {
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var ttgh = '';
    var tong = 0;
    for (var i = 0; i < giohang.length; i++) {
        var tt = parseInt(giohang[i][1]) * parseInt(giohang[i][3]);
        tong += tt;
        ttgh += ' <tr>' +
            '<td>' + (i + 1) + '</td>' +
            ' <td><img src="' + giohang[i][0] + '"  alt=""></td>' +
            '<td>' + giohang[i][1] + '</td>' +
            '<td>' + giohang[i][2] + '</td>' +
            '<td>' + giohang[i][3] + '</td>' +
            '<td>' +
            ' <div>' + tt + '</div>' +
            '</td>' +
            ' </tr>';


    }
    ttgh += '<tr>' +
        '<th colspan="5">Tổng đơn hàng</th>' +
        ' <th>' +
        ' <div>' + tong + '</div>' +
        ' </th>' +

        '</tr>';
    document.getElementById("mycart").innerHTML = ttgh;

}