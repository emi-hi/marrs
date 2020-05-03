const API_BASE_PATH = '/shop';


const PRODUCTS = {
  DETAIL:  `${API_BASE_PATH}/:type/:productId`,
  LIST :  `${API_BASE_PATH}/:type`,
};

export default PRODUCTS;