export const URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
export const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>';

export const config = {
  headers: {
    "Accept": "application/xml",
    "Content-Type": "application/xml",
    "X-Requested-With": "XMLHttpRequest",
  },
};
