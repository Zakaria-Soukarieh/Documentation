var pass =document.getElementById('password');
var conf =document.getElementById('confirmation');

function Test(){
    if(pass.value==conf.value){
        alert("correct");
    }
    else{
        conf.style ='border:1px solid red';
        pass.style='border:1px solid red';

    }
}