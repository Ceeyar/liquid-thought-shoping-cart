//API CONSTANTS
export const BASE_URL = "https://khula.co.za/";
export const PRODUCTS_URL = BASE_URL + "API/V2/Admin/?type=admin_get_produce_inventory";
export const PRODUCT_IMAGE = BASE_URL + "ProducePic/";

//DATA FUNCTIONS
export const NO_DATA = "***";
export const FIRE_TRUCKED = (name) => name.length > 10 ? name.slice(0, 8) : name;
