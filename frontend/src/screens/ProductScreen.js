import { getProduct } from '../api';
import { parseRequestURL } from '../utils';

const ProductScreen = {
  render: async () => {
    const request = parseRequestURL();
    const product = await getProduct(request.id);
    if(product.error){
      return(`<div>${product.error}</div>`);
    }
    return `<h1>${product.name}</h1>`;

  },
};
export default ProductScreen;
