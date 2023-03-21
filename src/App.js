import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import { F1drivers } from "./components/F1drivers";
import { HomePage } from "./components/HomePage";
import { StockPriceAAPL } from "./components/AppleStock";
import { RQF1drivers } from "./components/RQF1drivers";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { NewsFeed } from "./components/NewsFeed";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <div className="link-button">
                <Link to="/">Home</Link>
              </div>
              <div className="link-button">
                <Link to="/f1-drivers">F1 Drivers</Link>
              </div>
              <div className="link-button">
                <Link to="/rq-f1-drivers">RQ F1 Drivers</Link>
              </div>
              <div className="link-button">
                <Link to="/stock-price-aapl">AAPL Stock Price</Link>
              </div>
              <div className="link-button">
                <Link to="/news-feed">News Feed</Link>
              </div>
            </ul>
          </nav>
          <Routes>
            <Route path="/f1-drivers" element={<F1drivers />}></Route>
            <Route path="/rq-f1-drivers" element={<RQF1drivers />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/stock-price-aapl" element={<StockPriceAAPL />}></Route>
            <Route path="/news-feed" element={<NewsFeed />}></Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
