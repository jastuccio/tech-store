import React, { Component } from "react";

//Create Provider & Consumer
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0
  }

  handleSidebar = () => {
    this.setState({sidebarOpen: !this.state.sidebarOpen})
  }

  handleCart = () => {
    this.setState({CartOpen: !this.state.cartOpen})
  }

  closeCart = () => {
    this.setState({CartOpen: false})
  }

  openCart = () => {
    this.setState({CartOpen: true})
  }

  render() {
    return (
      <ProductContext.Provider
        value = {{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
