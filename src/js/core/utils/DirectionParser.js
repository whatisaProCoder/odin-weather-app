export default function DirectionParser(angle) {
  let direction;
  if (angle >= 337.5 || angle <= 22.5) {
    direction = "North";
  } else if (angle > 22.5 && angle < 67.5) {
    direction = "North-east";
  } else if (angle > 67.5 && angle < 112.5) {
    direction = "East";
  } else if (angle > 112.5 && angle < 157.5) {
    direction = "South-east";
  } else if (angle > 157.5 && angle < 202.5) {
    direction = "South";
  } else if (angle > 202.5 && angle < 247.5) {
    direction = "South-west";
  } else if (angle > 247.5 && angle < 292.5) {
    direction = "West";
  } else if (angle > 292.5 && angle < 337.5) {
    direction = "North-west";
  }

  return direction;
}
