window.onload = function() {
CanvasJS.addColorSet("theme", [
"#24aecc",
"#245bcc",
"#3c24cc",
"#9324cc",
"#cc2478",
"#cc2424",
"#ffffff",
"#ccbe24",
"#24cc73",
"#2493cc",
]);

  var chart = new CanvasJS.Chart("chartContainer", {
    colorSet: "theme",
    animationEnabled: true,
    animationDuration: 1500,
    backgroundColor:'grey',
    data: [{
      indexLabelFontColor: "white",
      type: "pie",
      startAngle: 100,
      yValueFormatString: "##0.00'%'",
      indexLabel: "{label} {y}",
      dataPoints: [
        {y: 10.4, label: "Asian"},
        {y: 11.3, label: "Bi/Multiracial"},
        {y: 3.4,label: "Black"},
        {y: 8.1,label: "Hispanic"},
        {y: 1,label: "Native American"},
        {y: 0.8,label: "Hawiian/Pacific Islander"},
        {y: 60.4,label: "White"},
        {y: 2.2,label: "Prefer not to say"},
        {y: 2.4,label: "Other"}

      ]
    }]
  });
  chart.render();
}

/* New Nav JS */
