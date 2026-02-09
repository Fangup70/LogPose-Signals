import { Button } from "@/components/ui/button";
import Tradingviewwidgets from "@/components/ui/tradingviewwidgets";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants";

const Home = () => {
  return <div className="flex min-h-screen home-wrapper">
    <section className="grid w-full gap-8 home-section"></section>
    <div className="md:col-span-1 xl:col-span-1">
      <Tradingviewwidgets
      title="Market Overview"
      config={MARKET_OVERVIEW_WIDGET_CONFIG}
      scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
      />
      
    </div>
  </div>;
};
export default Home;
