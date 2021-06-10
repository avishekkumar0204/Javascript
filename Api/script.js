function showDog() {
    let xhrReq = new XMLHttpRequest();
    xhrReq.onload=function(){
        // console.log(xhrReq.response);
        // xhrReq.response will return string
        // converting string in JSON object
        let responseJSON=JSON.parse(xhrReq.response);
        let imageUrl=responseJSON.message;
        // console.log(responseJSON,imageUrl);
        $("#dog-images").attr('src',imageUrl);

    }
    xhrReq.open("get","https://dog.ceo/api/breeds/image/random");
    xhrReq.send();

}
$(".fetch-dog").click(showDog);