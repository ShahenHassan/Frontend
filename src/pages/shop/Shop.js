import React, { Component } from "react";
import Product from "./Product";
import CartProduct from "./CartProduct";
import "./shop.css";
import cuba from "../../components/image/cuba.jpg";
import bryani from "../../components/image/bryani.jpg";
import shfta from "../../components/image/shfta.jpg";
import yaprax from "../../components/image/yaprax.jpg";
import cunafa from "../../components/image/cunafa.jpg";
import Cake from "../../components/image/Cake.jpg";
import paghlawa from "../../components/image/paghlawa.jpg";
import water from "../../components/image/water.jpg";
import LemonTea from "../../components/image/Lemon Tea.png";
import yogurtanduwater from "../../components/image/yogurt and water.jpg";

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          title: "cuba",
          price: 40,
          img: cuba,
        },
        {
          id: 2,
          title: "bryani",
          price: 30,
          img: bryani,
        },
        {
          id: 3,
          title: "shfta",
          price: 20,
          img: shfta,
        },
        {
          id: 4,
          title: "yaprax",
          price: 50,
          img: yaprax,
        },
        {
          id: 5,
          title: "cunafa",
          price: 5,
          img: cunafa,
        },
        {
          id: 6,
          title: "Cake",
          price: 50,
          img: Cake,
        },
        {
          id: 7,
          title: "paghlawa",
          price: 50,
          img: paghlawa,
        },
        {
          id: 8,
          title: "water",
          price: 50,
          img: water,
        },
        {
          id: 9,
          title: "Lemon Tea",
          price: 50,
          img: LemonTea
        },
        {
          id: 10,
          title: "yogurt and water",
          price: 50,
          img: yogurtanduwater
        },
      ],

      shoppingCart: [],
    };

    this.addProductToCart = this.addProductToCart.bind(this);
    this.emptyShoppingCart = this.emptyShoppingCart.bind(this);
    this.removeProductFromCart = this.removeProductFromCart.bind(this);
  }

  addProductToCart(productId) {
    console.log(productId);

    let mainProduct = this.state.products.find((product) => {
      return product.id === productId;
    });

    console.log(mainProduct);

    this.setState((prevState) => {
      return {
        shoppingCart: [...prevState.shoppingCart, mainProduct],
      };
    });
  }

  emptyShoppingCart() {
    this.setState({
      shoppingCart: [],
    });
  }

  removeProductFromCart(productId) {
    let newShoppingCart = this.state.shoppingCart.filter((product) => {
      return product.id !== productId;
    });

    this.setState({
      shoppingCart: newShoppingCart,
    });
  }

  render() {
    return (
      <>
        
        <section class="container content-section">
          <div class="shop-items">
            {this.state.products.map((product) => (
              <Product {...product} onAddProduct={this.addProductToCart} />
            ))}
          </div>
        </section>
        <section class="container content-section">
          <h2 class="section-header">CART</h2>
          <div class="cart-row">
            <span class="cart-item cart-header cart-column">ITEM</span>
            <span class="cart-price cart-header cart-column">PRICE</span>
            <span class="cart-quantity cart-header cart-column">Doing</span>
          </div>
          <div class="cart-items">
            {this.state.shoppingCart.map((product) => (
              <CartProduct {...product} onRemove={this.removeProductFromCart} />
            ))}
          </div>
          <button
            class="btn btn-primary btn-purchase"
            type="button"
            onClick={this.emptyShoppingCart}
          >
            Empty Cart
          </button>
        </section>
       
      </>
    );
  }
}
