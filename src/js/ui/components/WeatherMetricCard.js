export default function WeatherMetricCard({ name, value, iconSrc }) {
  const metricCard = document.createElement("div");

  metricCard.classList.add("border-1");
  metricCard.classList.add("border-[#282828]");
  metricCard.classList.add("flex");
  metricCard.classList.add("flex-row");
  metricCard.classList.add("items-center");
  metricCard.classList.add("py-4");
  metricCard.classList.add("sm:py-5");
  metricCard.classList.add("sm:px-6");
  metricCard.classList.add("rounded");
  metricCard.classList.add("bg-[#232323]");
  metricCard.classList.add("hover:-translate-y-0.5");
  metricCard.classList.add("hover:drop-shadow");
  metricCard.classList.add("hover:bg-[#282828]");
  metricCard.classList.add("transition-all");
  metricCard.innerHTML = /*html*/ `
    <div class="flex flex-col flex-1 max-sm:items-center">
      <div class="font-medium text-[1rem] text-[#e1e1e1]">${name}</div>
      <div class="mt-2 font-bold text-[1.25rem] text-[#e1e1e1]">${value}</div>
    </div>
    <img class="max-sm:hidden" src=${iconSrc} />
  `;

  return metricCard;
}
