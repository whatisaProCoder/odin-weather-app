export default function GeolocationAPI() {
  function getCoordinates() {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          },
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  }

  return { getCoordinates };
}
