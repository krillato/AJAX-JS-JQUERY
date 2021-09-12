// เรียกแบบ JS XML

/* const btn = document.querySelector("#request");
const textshow =document.querySelector("#bio");

const request = new XMLHttpRequest();

request.onreadystatechange = function(){

    if(request.readyState === 4){ //การทำงานปกติ
        textshow.style.border = "3px solid black"
        textshow.style.background = "#e8e8e8"

        if(request.status === 200){ //แทรกข้อความ
            textshow.innerHTML = request.responseText
        }
        else{
            textshow.innerHTML = 'พบข้อผิดพลาด' + request.status +" "+request.statusText;
        }
    }

}

//ดึงข้อมูลมาใช้
request.open("get","https://baconipsum.com/api/?type=meat-and-filler" );

btn.addEventListener('click', function(){

    this.style.display  = "none";
    request.send();

}); */



// เรียกแบบ JQuery

$(document).ready(function() {

    const $btn = $('#request');
    const $textshow = $('#bio');

    function WorkWork(responseText, textStatus, request) {
        
        $textshow.css('border', '3px solid black'); //แทรกcss
        $textshow.css('background' , "#e8e8e8");

        if(textStatus == 'error'){
            $textshow.text('พบข้อผิดพลาด  ' + request.status +' '+request.statusText);
        }
    }

    $btn.on('click', function() 
    {
        $(this).hide(); //ซ่อนปุ่ม

        $textshow.load('https://baconipsum.com/api/?type=meat-and-filler', WorkWork); //เชื่อมต่อ api
    });
});