import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "iMac Book Pro 4.5 K",
    price: 25,
    description: "An apple product",
  },
  {
    id: "p2",
    title: "Dell Inspiron 7780",
    price: 58,
    description: "All in one for you lean desktop",
  },
  {
    id: "p3",
    title: "HP 205 G4",
    price: 77,
    description: "HP store product",
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
