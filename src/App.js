import React from 'react'
import { Box } from "@material-ui/core";
import CartView from './views/cart-view';
import CheckoutView from './views/checkout-view';
import { AppProvider } from './context/app-context';

function App() {
  return (
    <AppProvider>
      <Box width='100vw' height='100vh' display='flex' flexDirection='row'>
        <CartView />
        <CheckoutView />
      </Box>
    </AppProvider>
  );
}

export default App;
