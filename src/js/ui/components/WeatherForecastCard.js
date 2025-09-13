import DynamicIconSet from "../modules/DynamicIconSet";
import { parse, format } from "date-fns";

export default function WeatherForecastCard({
  datetime,
  tempmax,
  tempmin,
  temp,
  conditions,
  iconname,
}) {
  const metricCard = document.createElement("div");

  const dynamicIconSet = DynamicIconSet().getIcons();

  conditions = conditions.split(",");

  let conditionsElement = "";
  for (let i = 0; i < conditions.length; i++) {
    if (i != conditions.length - 1)
      conditionsElement += conditions[i] + ",<br>";
    else conditionsElement += conditions[i] + "<br>";
  }

  const parsedDate = parse(datetime, "yyyy-MM-dd", new Date());

  const tempWidth = Math.round(((temp - tempmin) / (tempmax - tempmin)) * 100);

  metricCard.classList.add("border-1");
  metricCard.classList.add("border-[#282828]");
  metricCard.classList.add("flex");
  metricCard.classList.add("flex-row");
  metricCard.classList.add("items-center");
  metricCard.classList.add("p-3");
  metricCard.classList.add("rounded");
  metricCard.classList.add("bg-[#1E1E1E]");
  metricCard.classList.add("hover:-translate-y-0.5");
  metricCard.classList.add("hover:drop-shadow");
  metricCard.classList.add("hover:bg-[#282828]");
  metricCard.classList.add("transition-all");
  metricCard.innerHTML = /*html*/ `
    <div class="flex flex-row items-center flex-1">
      <div class="h-12 w-13 bg-[#2d89da] p-2 rounded">
        <img class="h-full w-14" src=${dynamicIconSet[iconname]}/>
      </div>
      <div class="ml-3.5 text-[0.875rem] text-[#e1e1e1] font-normal leading-5">${conditionsElement}</div>
    </div>
    <div class="text-[#979797] font-medium text-[0.95rem]">${
      parsedDate.getDate() - new Date().getDate() != 1
        ? format(parsedDate, "dd/MM/yy")
        : "Tomorrow"
    }</div>
    <div class="flex flex-row items-center justify-end flex-1 max-sm:hidden">
      <div class="font-bold text-[0.8rem] w-[6ch] text-[#ffffff] text-center">${tempmin}°C</div>
        <div class="ml-3 mb-0.5 rounded-full h-2.25 w-24 bg-[#919191] overflow-hidden">
          <div class="h-full bg-[#ffffff]" style="width: ${tempWidth}%"></div>
        </div>
      <div class="ml-3 font-bold text-[0.8rem] w-[6ch] text-[#ffffff] text-center">${tempmax}°C</div>
    </div>
  `;

  return metricCard;
}
