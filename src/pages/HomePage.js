import React from 'react';
import { ProductConsumer } from '../context';

export default function HomePage() {
  return (
    <>
      <ProductConsumer>
        {value => {
          console.log(value);
          return <h1>Hello from Home page</h1>;
        }}
      </ProductConsumer>
    </>
  );
}
