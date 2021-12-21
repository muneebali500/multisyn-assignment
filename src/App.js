import SidebarContainer from "./components/Sidebar/SidebarContainer";

import LatestSalesOrders from "./components/LatestSalesOrders/LatestSalesOrders";
import TopSellingProducts from "./components/TopSellingProducts/TopSellingProducts";
import PurchaseOrders from "./components/PurchaseOrders/PurchaseOrders";
import Header from "./components/Header/Header";
import TasksSummary from "./components/TasksSummary/TasksSummary";
import ProductsSummary from "./components/ProductsSummary/ProductsSummary";
import ActivityTitleWrapper from "./components/ActivityTitleWrapper/ActivityTitleWrapper.jsx";

function App() {
  return (
    <div className="body">
      <div className="left">
        <SidebarContainer />
      </div>
      <div className="right">
        <Header />
        <main>
          <section className="section-top">
            <ActivityTitleWrapper />
            <TasksSummary />
          </section>
          <section className="section-center">
            <ProductsSummary />
          </section>
          <section className="section-bottom">
            <LatestSalesOrders />
            <PurchaseOrders />
            <TopSellingProducts />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
