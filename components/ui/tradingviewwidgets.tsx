'use client'

// TradingViewWidget.jsx
import React, {  useRef, memo } from 'react';
import useTradingViewWidget from '@/hooks/usetradingviewwidget';

interface TradingViewWidgetProps {
    title: string;
    config: Record<string, unknown>;
    height?: number;
    scriptUrl?: string;
    className?: string;
}

/**
 * Renders a container for embedding a TradingView chart using the provided configuration.
 *
 * @param title - Visible or descriptive title for the widget (used by consumers or for accessibility)
 * @param config - TradingView widget configuration object passed to the initialization hook
 * @param height - Height of the widget container in pixels (defaults to 600)
 * @param scriptUrl - Optional URL of the TradingView embed script to load
 * @param className - Optional additional CSS class(es) applied to the outer container
 * @returns The React element that hosts the TradingView widget and its attribution link
 */
function TradingViewWidget({title,config,height=600,scriptUrl,className}:TradingViewWidgetProps) {
  const containerRef = useTradingViewWidget(scriptUrl,config,height);

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener nofollow" target="_blank"><span className="blue-text">AAPL stock chart</span></a><span className="trademark"> by TradingView</span></div>
    </div>
  );
}

export default memo(TradingViewWidget);