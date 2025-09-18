import DynamicIconSet from "../modules/DynamicIconSet";
import { parse, format } from "date-fns";

export default function WeatherForecastCard({
  current_datetime,
  datetime,
  tempmax,
  tempmin,
  temp,
  conditions,
  iconname,
}) {
  const forecastCard = document.createElement("div");

  const dynamicIconSet = DynamicIconSet();

  conditions = conditions.split(",");

  let conditionsElement = "";
  for (let i = 0; i < conditions.length; i++) {
    if (i != conditions.length - 1)
      conditionsElement += conditions[i] + ",<br>";
    else conditionsElement += conditions[i] + "<br>";
  }

  const parsedDate = parse(datetime, "yyyy-MM-dd", new Date());
  const parsedCurrentDate = parse(current_datetime, "yyyy-MM-dd", new Date());

  const tempWidth = Math.round(((temp - tempmin) / (tempmax - tempmin)) * 100);

  forecastCard.classList.add("border-1");
  forecastCard.classList.add("border-[#282828]");
  forecastCard.classList.add("flex");
  forecastCard.classList.add("flex-row");
  forecastCard.classList.add("items-center");
  forecastCard.classList.add("p-3");
  forecastCard.classList.add("rounded");
  forecastCard.classList.add("bg-[#1E1E1E]");
  forecastCard.classList.add("hover:-translate-y-0.5");
  forecastCard.classList.add("hover:drop-shadow");
  forecastCard.classList.add("hover:bg-[#242424]");
  forecastCard.classList.add("transition-all");
  forecastCard.innerHTML = /*html*/ `
    <div class="flex flex-row items-center flex-1">
      <div class="h-12 w-13 bg-[#2d89da] p-2 rounded">
        <img class="h-full w-14" id="weather-icon" />
      </div>
      <div class="ml-3.5 text-[0.875rem] text-[#e1e1e1] font-normal leading-5">${conditionsElement}</div>
    </div>
    <div class="text-[#979797] font-medium text-[0.95rem]">${parsedDate.getDate() - parsedCurrentDate.getDate() != 1
      ? format(parsedDate, "dd/MM/yy")
      : "Tomorrow"
    }</div>
    <div class="flex flex-row items-center justify-end flex-1 max-sm:hidden">
      <div class="font-bold text-[0.8rem] w-[6ch] text-[#e1e1e1] text-center">${tempmin}°C</div>
        <div class="ml-3 mb-0.5 rounded-full h-2.25 w-24 bg-[#919191] overflow-hidden">
          <div class="h-full bg-[#e1e1e1]" style="width: ${tempWidth}%"></div>
        </div>
      <div class="ml-3 font-bold text-[0.8rem] w-[6ch] text-[#e1e1e1] text-center">${tempmax}°C</div>
    </div>
  `;

  const weatherIcon = forecastCard.querySelector("#weather-icon");
  weatherIcon.src = dynamicIconSet[iconname];

  return forecastCard;
}
