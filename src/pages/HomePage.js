import React from "react";
import { ProductConsumer } from '../context'

export default function HomePage() {
  return (
    <> <h1>HomePage</h1>
    <ProductConsumer>
      { value => <h1>{ value }</h1> }
    </ProductConsumer>
    </>
  );
}
