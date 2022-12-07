function FedUPmath(){
    var S_S = document.getElementById("shoe_size").value;
    var DB = document.getElementById("year").value;
    var one = S_S * 2 + 5;
    var two = one * 50 - DB + 1766;

    alert(two);
}