import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CompleteOrder } from "./pages/CompleteOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { OrderConfirmedPage } from "./pages/OrderComfirmed";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder" element={<CompleteOrder />} />
        <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  );
}
