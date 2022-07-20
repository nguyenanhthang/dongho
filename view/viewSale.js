const productSale = document.querySelector('.wrapper-product-product-men');
const newWatchSales = watchSale.forEach((n) => {
    if(productSale) {
    productSale.innerHTML += `
    <a class="detail-link" href="../html/detail/index.html?id=${n.id}"><div class="product">
    <div class="img-product">
        <img class="img-specical" src="${n.img}" alt="">
    </div>
    <div class="wrapper-detail">
        <p class="align-detail id-product">MSP: ${n.id}</p>
        <p class="align-detail detail">${n.title}</p>
        <p class="align-detail price">${n.coin} VNĐ</p>
    </div>
    <div class="btn-product">
        <button class="align-btn-product btn btn-detail">Chi Tiết</button>
        <button class="align-btn-product btn btn-oder">Đặt Hàng</button>
    </div>
    </div></a>`
    }
}) 
const urlStr = window.location.href.toLowerCase();
const url = new URL(urlStr);
console.log('url',url)
const id = url.searchParams.get("id");
console.log('id',id)