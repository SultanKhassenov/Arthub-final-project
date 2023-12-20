import React, { useState } from "react";
import Products from "./Products";
function Store({ addItem }) {
  const [products, setProducts] = useState([
    {
        id: 1,
        name: "product",
        price: 1,
        urlimage:
          "",
        url: "",
      },
    {
        id: 2,
        name: "product",
        price: 1,
        urlimage:
            "",
        url: "",
    },
    {
        id: 3,
        name: "product",
        price: 1,
        urlimage:
          "",
        url: "",
      },
    {
        id: 4,
        name: "product",
        price: 1,
        urlimage:
            "",
        url: "",
    },
    {
        id: 5,
        name: "product",
        price: 1,
        urlimage:
          "",
        url: "",
      },
    {
        id: 6,
        name: "product",
        price: 1,
        urlimage:
            "",
        url: "",
    },
    {
        id: 7,
        name: "product",
        price: 1,
        urlimage:
          "",
        url: "",
      },
    {
        id: 8,
        name: "product",
        price: 1,
        urlimage:
            "",
        url: "",
    },
    {
        id: 9,
        name: "product",
        price: 1,
        urlimage:
          "",
        url: "",
      },
    {
        id: 10,
        name: "product",
        price: 1,
        urlimage:
            "",
        url: "",
    },
    {
        id: 11,
        name: "product",
        price: 1,
        urlimage:
          "",
        url: "",
      },
    {
        id: 12,
        name: "product",
        price: 1,
        urlimage:
            "",
        url: "",
    },
    {
        id: 13,
        name: "product",
        price: 1,
        urlimage:
          "",
        url: "",
    },
    {
        id: 14,
        name: "product",
        price: 1,
        urlimage:
            "",
        url: "",
    },
    {
        id: 15,
        name: "product",
        price: 1,
        urlimage:
          "",
        url: "",
    },
    {
        id: 16,
        name: "product",
        price: 1,
        urlimage:
            "",
        url: "",
    },
  ]);

  const onAdditem = (Item) => {
    addItem(Item);
  };
  return (
    <div style={{marginTop: '80px'}}>
      <Products classname="col-xs-4 col-sm-4 col-md-4 col-lg-5 col-xl-6" products={products} onAdditem={onAdditem} />
    </div>
  );
}

export default Store;
