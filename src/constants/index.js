//API CONSTANTS
const BASE_URL = "https://khula.co.za/"; //only used in this file
export const PRODUCT_IMAGE = BASE_URL + "ProducePic/";

//DATA FUNCTIONS
export const NO_DATA = "***";
export const FIRE_TRUCKED = (name) => name.length > 10 ? name.slice(0, 8) : name;
