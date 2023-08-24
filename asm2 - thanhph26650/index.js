const ListProduct = [
    {
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./image/image 26 (3).png",
        category: 1
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        price: 10,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./image/image 26 (2).png",
        category: 1
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        price: 20,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./image/image 26 (3).png",
        category: 3
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        price: 50,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./image/image 26 (4).png",
        category: 4
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        price: 60,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./image/image 26 (5).png",
        category: 5
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        price: 15,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./image/image 26.png",
        category: 6
    }
]
const ListCategory = [
    {
        id: 1,
        name: "breakfast",
        image: "./image/image 20.png"
    },
    {
        id: 2,
        name: "vegan",
        image: "./image/image 21.png"
    },
    {
        id: 3,
        name: "meat",
        image: "./image/image 22.png"
    },
    {
        id: 4,
        name: "dessert",
        image: "./image/image 23.png"
    },
    {
        id: 5,
        name: "lunch",
        image: "./image/image 24.png"
    },
    {
        id: 6,
        name: "chocolate",
        image: "./image/image 25.png"
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
                <p>
                    <img src="./icon/timer.png" alt="">
                    <span>30 Minutes</span>
                    <img src="./icon/ForkKnife.png" alt="">
                    <span>Snack</span>
                </p>
            </div>
        `
        }
 
    }
}

function showListCategory() {
    const listCategory = document.querySelector(".category__list")
    if(listCategory){
        listCategory.innerHTML = "";

    for (let item of ListCategory) {
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
    for(let item of ListCategory){
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
                <h3>${item.price}</h3>
                <p>
                    <img src="./icon/Timer.png" alt="">
                    <span>30 Minutes</span>
                    <img src="./icon/ForkKnife.png" alt="">
                    <span>Snack</span>
                    
                </p>
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