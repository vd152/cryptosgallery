AmCharts.ready(function () {
  var value = 70;
  var gaugeChart = new AmCharts.AmAngularGauge();

  var greenAxis = new AmCharts.GaugeAxis();
  greenAxis.axisThickness = 1;
  greenAxis.axisAlpha = 0.2;
  greenAxis.tickAlpha = 0.2;
  greenAxis.valueInterval = 50;
  greenAxis.startValue = 0;
  greenAxis.endValue = 100;
  greenAxis.startAngle = -90;
  greenAxis.endAngle = 90;
  greenAxis.fontSize = 5;
  greenAxis.labelFunction = formatValue;
  gaugeChart.addAxis(greenAxis);
  gaugeChart.fontSize = 12;

  var createNewGraugeBand = function (col, start, end) {
    var band = new AmCharts.GaugeBand();
    band.startValue = start;
    band.endValue = end;
    band.color = col;
    return band;
  };

  var arr = [];
  for (var i = 0; i < 5; i++) {
    var color;

    if (i == 0 || i == 1) color = "#cc4748";
    else if (i == 4 || i == 3) color = "#062783";
    else color = "#bcbcbc";

    var newBand;
    newBand = createNewGraugeBand(color, i * 20, (i + 1) * 20);
    arr[i] = newBand;
  }
  greenAxis.bands = arr;

  // bottom text
  greenAxis.bottomTextYOffset = -20;

  if (value >= 0 && value < 40) {
    greenAxis.setBottomText("BEARISH");
  } else if (value >= 40 && value < 60) {
    greenAxis.setBottomText("NEUTRAL");
  } else {
    greenAxis.setBottomText("BULLISH");
  }
  gaugeChart.addAxis(greenAxis);

  // current gauge arrow
  var currentArrow = new AmCharts.GaugeArrow();
  currentArrow.radius = "75%";
  currentArrow.innerRadius = 10;
  currentArrow.value = 50;
  currentArrow.nailRadius = 9;
  currentArrow.startWidth = 11.5;
  currentArrow.nailAlpha = 0;
  gaugeChart.addArrow(currentArrow);

  gaugeChart.write("chartdiv");

  currentArrow.setValue(value);
  document.getElementById("long").onclick = (e) => {
    value = 25;
    currentArrow.setValue(value);
    if (value >= 0 && value < 40) {
      greenAxis.setBottomText("BEARISH");
    } else if (value >= 40 && value < 60) {
      greenAxis.setBottomText("NEUTRAL");
    } else {
      greenAxis.setBottomText("BULLISH");
    }
  };
  document.getElementById("short").onclick = (e) => {
    value = 70;
    currentArrow.setValue(value);
    if (value >= 0 && value < 40) {
      greenAxis.setBottomText("BEARISH");
    } else if (value >= 40 && value < 60) {
      greenAxis.setBottomText("NEUTRAL");
    } else {
      greenAxis.setBottomText("BULLISH");
    }
  };
});

function formatValue(value, formattedValue, valueAxis) {
  if (value === 0) {
    return "BEARISH";
  } else if (value == 50) {
    return "NEUTRAL";
  } else if (value == 100) {
    return "BULLISH";
  } else {
    return "";
  }
}
