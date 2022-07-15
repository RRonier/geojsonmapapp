import { API } from "../utils/API";
import { config } from "../utils/utils";

export const getOsmData = () =>
  API.get("/api/0.6/map?bbox=13.31316,52.46732,13.31995,52.47089", config);
