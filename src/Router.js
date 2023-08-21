import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import Layout from "./components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
