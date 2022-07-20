const productIndex = document.querySelector('.wrapper-product.swiper-wrapper');
const newIndex = watchIndex.map((n, i) => {
    return (
        productIndex.innerHTML += `<div class="product swiper-slide">
    <div class="img-product">
        <img class="img-specical" src="${n.img}" alt="">
    </div>
    <div class="wrapper-detail">
        <p class="align-detail id-product">MSP: ${n.id}</p>
        <p class="align-detail detail">${n.title}</p>
        <p class="align-detail price">1${n.coin}</p>
    </div>
    <div class="btn-product">
        <button class="align-btn btn btn-detail">Chi Tiết</button>
        <button class="align-btn-product btn btn-oder">Đặt Hàng</button>
    </div>
</div>`
    )
})
