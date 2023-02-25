import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Links } from "./pages/Links";

export function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
