var chart = AmCharts.makeChart("chartdiv",
    {
        "type": "serial",
        "theme": "light",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD",
        "backgroundColor": "#4B0082",
        "decimalSeparator": ",",
        "percentPrecision": 2,
        "thousandsSeparator": ".",
        "categoryAxis": {
            "parseDates": 1
        },
        "chartCursor": {
            "enabled": 1,
            "animationDuration": 0,
            "bulletSize": 3,
            "fullWidth": 1,
            "selectWithoutZooming": 1,
            "valueLineBalloonEnabled": 1,
            "zoomable": 0
        },
        "chartScrollbar": {
            "enabled": 1,
            "autoGridCount": 1,
            "backgroundColor": "#FFFFFF",
            "color": "#000000",
            "dragIcon": "dragIconRectBigBlack",
            "dragIconWidth": 36,
            "graph": "graphMAINA",
            "graphType": "line",
            "gridColor": "#AAB3B3",
            "gridCount": 1,
            "oppositeAxis": 0,
            "scrollbarHeight": 80,
            "selectedColor": "FFFFFF",
            "updateOnReleaseOnly": 1,
            "offset": 50
        },


        "dataLoader":{
            "url": "https://earnest-torte-8a0636.netlify.app/perf.csv",
            "format": "csv",
            "reverse": 1,
            "async": 1,
            "delimiter": ",",
            "useColumnNames": 1
        },


        "graphs": [
            {
                "id": "graphMAINA",
                "lineThickness": 4,
                "title": "MAINA",
                "valueField": "Maina",
                "lineColor": "green",
                "legendPeriodValueText": "[[percents.value.close]]%",
                "legendValueText": "[[percents.value]]%",
                "balloonText": "[[percents.value]]%",
            },
            {
                "id": "graphIBOV",
                "lineThickness": 2,
                "title": "IBOV",
                "valueField": "ibov",
                "lineColor": "red",
                "legendPeriodValueText": "[[percents.value.close]]%",
                "legendValueText": "[[percents.value]]%",
                "balloonText": "[[percents.value]]%",
            },
            {
                "id": "graphCDI",
                "lineThickness": 2,
                "title": "CDI",
                "valueField": "CDI",
                "lineColor": "orange",
                "legendPeriodValueText": "[[percents.value.close]]%",
                "legendValueText": "[[percents.value]]%",
                "balloonText": "[[percents.value]]%",
            },
            {
                "id": "graphUSD",
                "lineThickness": 2,
                "title": "USD",
                "valueField": "usd",
                "lineColor": "black",
                "legendPeriodValueText": "[[percents.value.close]]%",
                "legendValueText": "[[percents.value]]%",
                "balloonText": "[[percents.value]]%",
            }
        ],

        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "recalculateToPercents": 1, // or "logarithmic": true
                "title": "",
                "position":"right",
                "gridColor": "#FFFFFF",
            }
        ],
        "legend": {
            "enabled": 1,
            "useGraphSettings": 1,
            "valueWidth": 70,
            "equalWidths": 1
        },
        "listeners":[{
            "event": "zoomed",
            "method": refreshDateString
        }]
    }
);

function refreshDateString(event){
    document.getElementById("fromDate").value = dateToString(event.startDate);
    document.getElementById("toDate").value = dateToString(event.endDate);
}

function refreshDate(){
    var fromTxt = document.getElementById("fromDate").value;
    var toTxt = document.getElementById("toDate").value;

    var from = new Date(fromTxt);
    var to = new Date(toTxt);

    chart.zoomToDates(from, to);
}

function dateToString(date){
    return date.toISOString().substring(0, 10);
}

function ytd(){
    var today = new Date(chart.chartData[chart.chartData.length-1].category);

    document.getElementById("toDate").value = dateToString(today);

    today = correctDate(new Date(today.getFullYear() -1,11,31));

    document.getElementById("fromDate").value = dateToString(today);

    refreshDate();
}

function correctDate(ideal){
    var i = 0;
    do{
        i ++;
        var tempDate = new Date(chart.chartData[chart.chartData.length-i].category);
    }
    while(tempDate.getTime() > ideal.getTime());

    //console.log("Ideal: " + ideal + ", Temp Date: " + tempDate);

    return tempDate;
}

function year(amount){
    var today = new Date(chart.chartData[chart.chartData.length-1].category);

    document.getElementById("toDate").value = dateToString(today);

    today.setFullYear(today.getFullYear() - amount);
    today = correctDate(today);
    document.getElementById("fromDate").value = dateToString(today);

    refreshDate();

}

function return_max(){
    document.getElementById("toDate").value = dateToString(chart.chartData[chart.chartData.length-1].category);
    document.getElementById("fromDate").value = dateToString(chart.chartData[0].category);

    refreshDate();
}

function handleZoom(event) {
   console.log(event)
}
