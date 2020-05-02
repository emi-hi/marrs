const API_BASE_PATH = '/shop';


const PRODUCTS = {
  DETAIL:  `${API_BASE_PATH}/:type/:id`,
  LIST :  `${API_BASE_PATH}/:type`,
};

export default PRODUCTS;