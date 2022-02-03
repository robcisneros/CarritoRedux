import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Pinol",
    price: 25,
    description: "El limpiapisos",
  },
  {
    id: "p2",
    title: "Marihuanol",
    price: 58,
    description: "Cremita para todos los remedios",
  },
  {
    id: "p3",
    title: "Escoba 300",
    price: 77,
    description: "Escobiita",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
