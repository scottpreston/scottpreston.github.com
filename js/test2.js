setTimeout(function() {

    var hook = document.querySelector("#testscript");
    var tableNode = hook.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    var table = document.querySelector("table");
    var trs = document.querySelectorAll("tr");

    console.log(trs)
    for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].children;
        for (var j = 0; j < tds.length; j++) {
            var td = tds[j];
            console.log(td.innerText);
        }

    }

}, 1000);