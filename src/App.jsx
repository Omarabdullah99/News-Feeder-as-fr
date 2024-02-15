import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

import NewsCopy from "./component/News/NewsCopy";
import NewsProvider from "./provider/NewsProvider";

export default function App() {
  return (
    <div>
      <NewsProvider>
        <div>
          <Navbar />
          <NewsCopy />
          <Footer />
        </div>
      </NewsProvider>
    </div>
  );
}
