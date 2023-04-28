function predictHomePrice() {
    var LB = document.getElementById("LB").value;
    var LT = document.getElementById("LT").value;
    var KT = document.getElementById("KT").value;
    var KM = document.getElementById("KM").value;
    var GRS = document.getElementById("GRS").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/predict");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            document.getElementById("result").innerHTML = "Predicted Home Price: " + result.predicted_price;
        }
    };
    var data = JSON.stringify({ LB: LB, LT: LT, KT: KT, KM: KM, GRS: GRS });
    xhr.send(data);
}
