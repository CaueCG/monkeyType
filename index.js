function getApi(){
    const request = new XMLHttpRequest();
    const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

    request.onload = () =>{
        const elementText = document.querySelector(" .gameMonkey p");
        const response = JSON.parse(request.responseText);
        elementText.innerHTML = response.quotes[0].text;
    }
    request.open('get',url);
    request.send();
}

getApi();


function hello(){
    console.log("hello World");
}
const divColors = document.getElementById('palleteColors');
divColors.addEventListener("click", hello);

