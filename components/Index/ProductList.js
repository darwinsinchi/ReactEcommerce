import { Card } from "semantic-ui-react";

function ProductList({ products }) {
  function mapProductsToItems(products) {
    return products.map(product => ({
      header: product.name,
      image: product.mediaUrl,
      meta: `$${product.price}`,
      color: "teal",
      fluid: true,
      childKey: product._id,
      href: `/product?_id=${product._id}`
    }));
  }
  return (
    <Card.Group
      itemsPerRow="3"
      stackable
      //adjusts content if were viewing it in a smaller screen
      centered
      //centered makes uneven number of items center and not start at left side
      items={mapProductsToItems(products)}
    ></Card.Group>
  );
}

export default ProductList;
