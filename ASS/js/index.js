//Bắt đầu SLIDE SHOW
var hinh = document.querySelector("#hinh");
var index = 0;
var imgArr = [];
document.body.onload = function () {
    for (var i = 0; i < 3; i++) {
        imgArr[i] = new Image();
        imgArr[i].src = "image/anh" + (i + 1) + ".jpg";
    }
    _auto();

}

function _next() {
    index++;
    if (index > 2) index = 0;
    hinh.src = imgArr[index].src;
}
function _pre() {
    index--;
    if (index < 0) index = 2;
    hinh.src = imgArr[index].src;
}
var t;
function _auto() {
    clearInterval(t);
    t = setInterval("_next()", 2000);
}
//KẾT THÚC SILDE SHOW



// HIỂN THỊ FORM ĐĂNG NHẬP
document.getElementById("khac").style.display = "none";
function hienthi() {
    var khac = document.getElementById("khac");
    if (khac.style.display == "block") {
        khac.style.display = "none";
    } else {
        khac.style.display = "block";
    }

}

//kẾT THÚC FORM ĐĂNG NHẬP


//Hiển thị giỏ hàng
document.getElementById("showcart").style.display = "none";
var giohang = new Array();

/*
function themvaogiohang(x) {
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].children[0].src;
    var gia = boxsp[1].children[0].innerText;
    var tensp = boxsp[2].innerText;
    var soluong = boxsp[3].value;
    var sp = new Array(hinh, gia, tensp, soluong);

    giohang.push(sp);


    showcountsp();

    //Luuw giỏ hàng lên sesionStorage
    sessionStorage.setItem("giohang", JSON.stringify(giohang));

}

function showcountsp() {
    document.getElementById("countsp").innerHTML = giohang.length;
}
function showmycart() {
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
*/
//Kết thúc giỏ hàng

//KIỂM TRA VADILATE
function kiemtra() {
    var ok = true;
    var ho = document.formdk.ho.value;
    if (ho == "") {
        document.getElementById("loiho").innerHTML = "Không được để trống";
        ok = false;
    } else {
        document.getElementById("loiho").innerHTML = "";
    }

    var ten = document.formdk.ten.value;
    if (ten == "") {
        document.getElementById("loiten").innerHTML = "Không được để trống";
        ok = false;
    } else {
        document.getElementById("loiten").innerHTML = "";
    }

    var email = document.formdk.email.value;
    var regemail = /\w+@\w+(\.\w+){1,2}$/;
    if (email == "") {
        document.getElementById("loiemail").innerHTML = "Không được để trống";
        ok = false;
    } else if (!email.match(regemail)) {
        document.getElementById("loiemail").innerHTML = "Không đúng định dạng";
        ok = false;
    }
    else {
        document.getElementById("loiemail").innerHTML = "";
    }

    var mkmoi = document.formdk.mkmoi.value;
    var regmkmoi = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    var nhaplaimkmoi = document.formdk.nhaplaimkmoi.value;
    if (mkmoi == "") {
        document.getElementById("loimkmoi").innerHTML = "Không được để trống";
        ok = false;
    } else if (!mkmoi.match(regmkmoi)) {
        document.getElementById("loimkmoi").innerHTML = "Mật khẩu phải có ít nhất:  một ký tự viết hoa, một ký tự số và mật khẩu tổi thiểu 8 ký tự";
        ok = false;
    } else {
        document.getElementById("loimkmoi").innerHTML = "";

    }

    if (nhaplaimkmoi == "") {
        document.getElementById("loinhaplai").innerHTML = "Không được để trống";
        ok = false;
    } else if (nhaplaimkmoi !== mkmoi) {
        document.getElementById("loinhaplai").innerHTML = "Mật khẩu không trúng khớp";
        ok = false;
    } else {
        document.getElementById("loinhaplai").innerHTML = "";
    }

    if (ok) {
        alert("Đăng ký thành công");
        return true;
    } else {
        return false;
    }
}
//KẾT THÚC VADILATE




const ListProduct = [
    {
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "image/1.webp",
        category: 1
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        price: 10,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "image/2.webp",
        category: 2
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        price: 20,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"image/3.webp",
        category: 3
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        price: 50,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"image/4.webp",
        category: 4
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        price: 60,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"image/5.webp",
        category: 5
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        price: 15,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"image/6.webp",
        category: 6
    }
]

function showProduct(data) { //khai báo hàm, truyền vào tham số data để cần hiển thị mảng nào thì truyền vào mảng đó
    const popularList = document.querySelector(".popular-list") //tìm thẻ div có class popular-list
    if (popularList) {
        popularList.innerHTML = ""
     //clear khối sản phẩm đi để hiển thị lại dữ liệu mới
    for (let item of data) { // lặp qua mảng truyền vào tham số data
        // đổ dữ liệu vào trong thẻ div popular
        popularList.innerHTML += `
            <div class="popular__item">
            <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt=""></a>
            <h3><a href="./detail.html?id=${item.id}">${item.name}</a></h3>
        
            </div>
        `
        }
 
    }
}

function showListCategory() {
    const listCategory = document.querySelector(".category__list")
    if(listCategory){
        listCategory.innerHTML = "";

    for (let item of listCategory) {
        listCategory.innerHTML += `
            <div class="category_lists">
               <img src="${item.image}" alt="">
                <h3><a href="">${item.name}</a></h3>
            </div>`
    }
    }
}
showProduct(ListProduct) //gọi hàm ra để hiển thị sản phẩm
showListCategory()
const filterSelect = document.querySelector("#filter-select") // tìm thẻ select
function filterProduct() { //tạo hàm để thực hiện chức năng lọc 
    const over30 = ListProduct.filter(function (item){
        // khai báo biến over30 chứa dữ liệu lọc được từ mảng ListProduct
        return item.price > 30
        // return về điều kiện để lọc
    })
    const under30 = ListProduct.filter(function (item) {
        return item.price <= 30
    })
    if (filterSelect.value == 'over30') { //kiểm tra xem đang chọn vào option nào trong thẻ select
        showProduct(over30) // gọi hàm ra và truyền vào mảng lấy được bên trên để hiển thị sản phẩm tương ứng
    }
    if (filterSelect.value == 'under30') {
        showProduct(under30)

    }
    if (filterSelect.value == 'all') {
        showProduct(ListProduct)

    }
}
if (filterSelect) {
    filterSelect.addEventListener("change", filterProduct)

}
function detailProduct() {
    const prdId = new URLSearchParams(window.location.search).get('id')
    // console.log(prdId);
    if(prdId){
        const product = ListProduct.find(function(item){
            return item.id == prdId;
        })

        const detailProductDiv = document.querySelector('.detail-product')
        detailProductDiv.innerHTML = `
        <div class="product-info">
            <h2>${product.name}</h2>
            <p class="price">$ ${product.price}</p>
            <p class="desc">${product.desc}</p>
            <form action="">
                <input type="text" placeholder="Quantity">
                <button type="submit">Add To Cart</button>
            </form>
        </div>
        <div class="product-img">
            <img src="${product.image}" alt="">
        </div>
    `
    }
}
detailProduct()
function listCategory(){
    const cateList = document.querySelector('#cate-list')
    for(let item of listCategory){
        cateList.innerHTML += `
            <li><a href="./products.html?cateId=${item.id}">${item.name}</a></li>
        `
    }
}
listCategory()

function listProductPage(data){
    const listProductDiv = document.querySelector('#list-product')
    listProductDiv.innerHTML = ""
    for(let item of data){ // lặp qua mảng truyền vào tham số data

        // đổ dữ liệu vào trong thẻ div popular
        listProductDiv.innerHTML += `
            <div class="popular__item">
                <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt=""></a>
                <h3><a href="./detail.html?id=${item.id}">${item.name}</a></h3>
               
            </div>
        `         
    }
}


function reRender(){
    const cateId = new URLSearchParams(window.location.search).get('cateId')
    const productByCategory = ListProduct.filter(function(item){
        return item.category == cateId
    })   
    if(cateId){
        listProductPage(productByCategory)
    }else{
        listProductPage(ListProduct)
    }
    
}
reRender()