import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, DollarSign } from "lucide-react";
import ReactEChart from "echarts-for-react";
import { useEffect, useState } from "react";
import type { EChartsOption } from "echarts";
const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentOption, setCurrentOption] = useState<EChartsOption | null>(null);
  const data = location.state || {
    trafficSpending: 1000,
    productSpending: 1000,
    salesConversion: 40,
    shippingFees: 40,
    callCenterFees: 1000,
    totalRevenue: 2000,
    totalNetProfit: 500,
    businessType: "E-commerce/Dropshipping"
  };
  const results = {
    totalRevenue: data.totalRevenue,
    totalNetProfit: data.totalNetProfit,
    totalProfit: data.trafficSpending - data.productSpending,
    ordersDelivered: Math.floor(data.salesConversion * 10),
    totalProductsCost: data.productSpending,
    shippingRevenue: data.shippingFees * 100,
    callCenterCosts: data.callCenterFees
  };
  const chartData = [{
    value: results.totalRevenue,
    name: 'Total Revenue'
  }, {
    value: results.totalNetProfit,
    name: 'Total Net Profit'
  }, {
    value: results.totalProductsCost,
    name: 'Products Cost'
  }, {
    value: results.shippingRevenue,
    name: 'Shipping Revenue'
  }, {
    value: results.callCenterCosts,
    name: 'Call Center Costs'
  }];
  const defaultPalette = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'];
  const radius = ['30%', '80%'];
  const pieOption: EChartsOption = {
    series: [{
      type: 'pie',
      radius: radius,
      label: {
        show: true,
        formatter: '{b}: {c}'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 14,
          fontWeight: 'bold'
        }
      },
      data: chartData
    }],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    }
  };
  const parliamentOption: EChartsOption = {
    series: [{
      type: 'pie',
      radius: radius,
      roseType: 'area',
      label: {
        show: true,
        formatter: '{b}: {c}'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 14,
          fontWeight: 'bold'
        }
      },
      data: chartData
    }],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    }
  };
  useEffect(() => {
    setCurrentOption(pieOption);
    const interval = setInterval(() => {
      setCurrentOption(prev => prev === pieOption ? parliamentOption : pieOption);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const ResultCard = ({
    title,
    value,
    prefix = "$"
  }) => <div className="bg-card p-6 rounded-lg shadow-sm card-hover">
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
      <p className="text-2xl font-bold text-primary flex items-center">
        {prefix}
        {value.toLocaleString()}
      </p>
    </div>;
  return <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto animate-in">
        <button onClick={() => navigate(-1)} className="mb-8 text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Calculator
        </button>

        <h1 className="text-3xl font-bold mb-2">Your Results</h1>
        <p className="text-muted-foreground mb-8">
          Based on your input, here are your estimated business metrics for {data.businessType}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResultCard title="Total Revenue" value={results.totalRevenue} />
          <ResultCard title="Total Net Profit" value={results.totalNetProfit} />
          <ResultCard title="Orders Delivered" value={results.ordersDelivered} prefix="" />
          <ResultCard title="Total Products Cost" value={results.totalProductsCost} />
          {data.businessType === "COD" && <>
              <ResultCard title="Shipping Revenue" value={results.shippingRevenue} />
              <ResultCard title="Call Center Costs" value={results.callCenterCosts} />
            </>}
        </div>

        <div className="mt-12 bg-card rounded-lg p-6  ">
          <h2 className="text-2xl font-bold mb-6">Results Visualization</h2>
          <div className="w-full h-[500px]">
            {currentOption && <ReactEChart option={currentOption} style={{
            height: '100%',
            width: '100%'
          }} theme="dark" />}
          </div>
        </div>

        <div className="mt-12    bg-card text-card-foreground rounded-lg shadow-sm    p-8 border border-border card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Final Projection</h2>
              <p className="text-primary-foreground/80">
                Estimated annual revenue based on current metrics
              </p>
            </div>
            <div className="text-4xl font-bold flex items-center">
              <DollarSign className="w-8 h-8" />
              {(results.totalRevenue * 12).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Results;