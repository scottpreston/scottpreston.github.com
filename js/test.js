//console.log('this is a test and it is working');
//var testWidgets = document.querySelectorAll(".testWidget");
//var loginToken = "";
//
//for (var i = 0; i < testWidgets.length; i++) {
//    var div = testWidgets[i];
//    div.innerHTML = div.innerHTML + ' ::this is a test ::' + new Date();
//}

function load(file, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = file + ".js";
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = function () {
        callback();
    };
}

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

            dataTable.addColumn({type: 'string', id: 'President'});
            dataTable.addColumn({type: 'date', id: 'Start'});
            dataTable.addColumn({type: 'date', id: 'End'});
            dataTable.addRows([
                ['Washington', new Date(1789, 3, 29), new Date(1797, 2, 3)],
                ['Adams', new Date(1797, 2, 3), new Date(1801, 2, 3)],
                ['Jefferson', new Date(1801, 2, 3), new Date(1809, 2, 3)]]);

            chart.draw(dataTable);
        }
    }
});

