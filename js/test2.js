var list = [];

setTimeout(function () {

    var hook = document.querySelector("#testscript");
    var tableNode = hook.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    var table = document.querySelector("table");
    var trs = document.querySelectorAll("tr");
    var title = "", fidelity="", collection="";
    for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].children;
        //for (var j = 0; j < tds.length; j++) {
        //    var td = tds[j];
        //    var txt = td.innerText;
        //
        //}

        if (tds[0].innerText.length>2) {
            title = tds[0].innerText;
            title = title.substr(0,title.length-1);
        }
        if (tds[1].innerText.length>2) {
            fidelity = tds[1].innerText;
            fidelity = fidelity.substr(0,fidelity.length-1);
        }
        if (tds[2].innerText.length>1) {
            collection = tds[2].innerText;
            collection = collection.substr(0,collection.length-1);
        }
        var name = title + "-" + fidelity + "-" + collection;

        var obj = {name: name, start: tds[3].innerText.substr(0,5).split(',').join(''), end: tds[4].innerText.substr(0,5).split(',').join('')};
        list.push(obj);
    }
    var div = document.createElement("div");
    div.className = "testWidget";
    div.innerText = "this is a test";
    div.style.height = "400px";
    div.style.width = "800px";
    div.style.float = "right";
    div.style.border = "1px solid silver";
    insertAfter(table, div);
    callLoader(); // loads things up


}, 1000);


function loadExt(file, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = file;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = function () {
        console.log('loadExt')
        callback();
    };
}

function callLoader() {

    loadExt("https://www.google.com/jsapi", function () {

        setTimeout(function () {
            google.load("visualization", "1", {
                callback: function () {
                    setTimeout(drawChart, 2000);
                }, packages: ["timeline"]
            });
        }, 2000);


        function drawChart() {

            var containers = document.querySelectorAll('.testWidget');
            //var container = document.querySelector(".testWidget");
            for (var i = 0; i < containers.length; i++) {
                var container = containers[i];
                var chart = new google.visualization.Timeline(container);
                container.style.height = "300px";
                console.log('drawchart2')
                var dataTable = new google.visualization.DataTable();

                dataTable.addColumn({type: 'string', id: 'Collection'});
                dataTable.addColumn({type: 'date', id: 'Start'});
                dataTable.addColumn({type: 'date', id: 'End'});
                for(var k = 1; k < list.length; k++) {
                    var row = list[k];
                    if (row.name != "") {
                        console.log(row);
                        dataTable.addRow(
                            [row.name, new Date(row.start, 1, 1), new Date(row.end, 1, 1)]
                        );
                    }
                }

                chart.draw(dataTable);
            }
        }
    });
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

