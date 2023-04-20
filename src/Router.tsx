import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Cart } from "./screens/Cart";
import { Home } from "./screens/Home";
import { Success } from "./screens/Success";
import { useContext } from "react";
import { RequestContext } from "./contexts/RequestContext";

export function Router() {
  const { request } = useContext(RequestContext)

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route 
          path="/success" 
          element={
            request.adress.city !== '' 
            ? <Success /> 
            : <Cart />
          } 
        />
      </Route>
    </Routes>
  )
}