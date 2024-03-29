const { formatNumber } = require("./format_num");
const { colors } = require("./colors");

export const drawMap = (apiData) => {
  const stateTotal = apiData;

  const weekElement = document.getElementById("week");

  const dateObj = new Date(apiData.week);
  const fullDate = dateObj.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (apiData.allData) {
    weekElement.innerText = `Uptil week of ${fullDate}`;
  } else {
    weekElement.innerText = `Week of ${fullDate}`;
  }

  const map = new Datamap({
    scope: "usa",
    element: document.getElementById("map"),
    responsive: true,
    geographyConfig: {
      highlightBorderColor: "rgb(59, 177, 255)",
      popupTemplate: (geo) => {
        return [
          '<div class="hoverinfo"><strong>',
          '<p class="state-name"><strong>',
          geo.properties.name,
          "</strong></p>",
          '<p class="green-text"><strong>',
          " 1st Dose " + formatNumber(stateTotal[geo.id]._1st_dose_allocations),
          "</strong></p>",
          '<p class="blue-text"><strong>',
          " 2nd Dose " + formatNumber(stateTotal[geo.id]._2nd_dose_allocations),
          "</strong></div>",
        ].join("");
      },
      highlightBorderWidth: 2,
    },
    fills: colors,
    data: stateTotal,
  });

  window.addEventListener("resize", function (event) {
    map.resize();
  });

  map.labels({
    labelColor: "white",
    fontFamily: "Roboto",
    fontSize: 14,
  });
};
