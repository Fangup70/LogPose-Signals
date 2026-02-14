import { Button } from "@/components/ui/button";
import Tradingviewwidgets from "@/components/ui/tradingviewwidgets";
import { MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants";
import { HEATMAP_WIDGET_CONFIG } from "@/lib/constants";
import { TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants";


const Home = () => {
  const scriptUrl = "https://s3.tradingview.com/external-embedding/embed-widget-";
  return <div className="flex min-h-screen home-wrapper">
    <section className="grid w-full gap-8 home-section">
    <div className="md:col-span-1 xl:col-span-1">
      <Tradingviewwidgets
      title="Market Overview"
      config={MARKET_OVERVIEW_WIDGET_CONFIG}
      scriptUrl={`${scriptUrl}market-overview.js`}
      className="custom-chart"
      height={600}
      />
      
    </div>
    <div className="md:col-span-2 xl:col-span-2">
      <Tradingviewwidgets
      title="Stock Heatmap"
      config={HEATMAP_WIDGET_CONFIG}
      scriptUrl={`${scriptUrl}stock-heatmap.js`}
      height={600}
      />
    </div>
    </section>
        <section className="grid w-full gap-8 home-section">
    <div className="h-full md:col-span-1 xl:col-span-1">
      <Tradingviewwidgets
      config={TOP_STORIES_WIDGET_CONFIG}
      scriptUrl={`${scriptUrl}timeline.js`}
      className="custom-chart"
      height={600}
      />
      
    </div>
    <div className="h-full md:col-span-1 xl:col-span-2">
      <Tradingviewwidgets
      config={MARKET_DATA_WIDGET_CONFIG}
      scriptUrl={`${scriptUrl}market-quotes.js`}
      height={600}
      />
    </div>
    </section>
  </div>;
};
export default Home;
