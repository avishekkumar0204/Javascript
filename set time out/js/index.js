const coupon = document.getElementById("coupon");
let yourCoupon = () => {
    coupon.innerHTML = "Loading....";
    let myVar=setTimeout(printCoupon = () => {
        coupon.innerHTML = "Use <b>AVISHEK1998</b> to get 75% discount";
    }, 2000)
    return myVar;

}
let noNeed=(myVar)=>{
    clearTimeout(myVar);
    coupon.innerHTML = "Thank you";
}