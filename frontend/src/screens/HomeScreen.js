import axios from 'axios';
import Rating from '../components/Rating';
// import data from "../data.js";
const HomeScreen = {
  render: async () => {
    // const { products } = data;
    const response = await axios({
      url: 'http://localhost:5001/api/products',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response || response.statusText !== 'OK') {
      return '<div>Error in getting data</div>';
    }
    /*
        call json function to return promise, await will convert that
        promise into real data and save that data into products variable
        */
    const products = response.data;

    return `
        <ul class = "products">
            ${products.map((product) => `
                <li>
                    <div class="product">
                        <a href="/#/product/${product._id}">
                            <img src="${product.image}" alt="${product.name}"/>
                        </a>
                        <div class="product-name">
                            <a href="/#/product/${product._id}">
                                ${product.name}
                            </a>
                        </div>
                        <div class="product-rating">
                            ${Rating.render({
                                value: product.rating, 
                                text: `${product.numReviews} reviews`,
                            })}
                        </div>
                        <div class="product-brand">
                            ${product.brand}
                        </div>
                        <div class="product-price">
                            $${product.price}
                        </div>
                    </div>
                </li>
            `).join('\n')}
        `;
  },
};
export default HomeScreen;
