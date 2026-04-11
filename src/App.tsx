import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import NotFound from "./pages/NotFound";
import { hotels } from "./data/hotels";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {hotels.map((h) => (
        <Route
          key={h.slug}
          path={`/${h.slug}`}
          element={<HotelPage slug={h.slug} />}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
