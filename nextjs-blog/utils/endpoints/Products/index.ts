import { EndPoint } from '@/types/index';

const Products: EndPoint = {
  getProducts: {
    uri: '/category',
    method: 'GET',
    version: '',
  },
  getSingleProduct: {
    uri: '/category/:categoryId',
    method: 'GET',
    version: '',
  },
  getAllCatalouges: {
    uri: '/catalouge',
    method: 'GET',
    version: '',
  },
  getProductsV2: {
    uri: '/product',
    method: 'GET',
    version: '',
  },
};

export default Products;
