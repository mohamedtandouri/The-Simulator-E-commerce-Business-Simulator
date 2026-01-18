
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Calculator as CalcIcon, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { TrafficSection } from "@/components/calculator/TrafficSection";
import { LandingPageSection } from "@/components/calculator/LandingPageSection";
import { SalesSection } from "@/components/calculator/SalesSection";
import { UpSalesSection } from "@/components/calculator/UpSalesSection";
import { CallCenterShippingSection } from "@/components/calculator/CallCenterShippingSection";

const Calculator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [showUpSales, setShowUpSales] = useState(true);
  const { toast } = useToast();
  
  const businessType = location.state?.businessType || "E-commerce/Dropshipping";
  const showCallCenterAndShipping = businessType === "COD";

  const [formData, setFormData] = useState({
    trafficSpending: "",
    cpc: "",
    ctr: "",
    productPrice: "",
    productCost: "",
    conversionRate: "",
    upSaleProductPrice: "",
    upSaleProductCost: "",
    upSaleConversionRate: "",
    callCenterConfirmationRate: "",
    callCenterCost: "",
    shippingDeliverability: "",
    shippingCost: "",
  });

  const handleFieldChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Validate required fields
      const requiredFields = ['trafficSpending', 'productPrice', 'productCost', 'conversionRate'];
      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData] || isNaN(Number(formData[field as keyof typeof formData])));
      
      if (missingFields.length > 0) {
        toast({
          title: "Error",
          description: "Please fill in all required fields with valid numbers.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Validate number ranges
      const trafficSpending = Number(formData.trafficSpending);
      const productPrice = Number(formData.productPrice);
      const productCost = Number(formData.productCost);
      const conversionRate = Number(formData.conversionRate);

      if (trafficSpending < 0 || productPrice < 0 || productCost < 0) {
        toast({
          title: "Error",
          description: "Values cannot be negative.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      if (conversionRate < 0 || conversionRate > 100) {
        toast({
          title: "Error",
          description: "Conversion rate must be between 0 and 100.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      if (productCost > productPrice) {
        toast({
          title: "Warning",
          description: "Product cost is higher than product price. You will have a negative margin.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      const baseRevenue = productPrice * (conversionRate / 100);
      const upSaleRevenue = showUpSales ? 
        (Number(formData.upSaleProductPrice) * (Number(formData.upSaleConversionRate) / 100)) : 0;
      
      const totalRevenue = baseRevenue + upSaleRevenue;
      
      const baseCosts = productCost + trafficSpending;
      const upSaleCosts = showUpSales ? Number(formData.upSaleProductCost) : 0;
      const shippingAndCallCenterCosts = showCallCenterAndShipping ? 
        (Number(formData.callCenterCost) + Number(formData.shippingCost)) : 0;
      
      const totalCosts = baseCosts + upSaleCosts + shippingAndCallCenterCosts;
      
      const processedData = {
        trafficSpending: trafficSpending || 0,
        productSpending: productCost || 0,
        salesConversion: conversionRate || 0,
        shippingFees: Number(formData.shippingCost) || 0,
        callCenterFees: Number(formData.callCenterCost) || 0,
        totalRevenue: totalRevenue,
        totalNetProfit: totalRevenue - totalCosts,
        businessType: businessType
      };

      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      navigate("/results", { 
        state: processedData
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-4xl mx-auto animate-in">
        <div className="bg-card rounded-xl shadow-sm p-8">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="flex items-center gap-2 mb-2">
              <CalcIcon className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">Simulator</h1>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => {}}
            >
              <Download className="w-4 h-4" />
              Export to CSV
            </Button>
          </div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Business Calculator
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <TrafficSection
              trafficSpending={formData.trafficSpending}
              cpc={formData.cpc}
              onFieldChange={handleFieldChange}
            />

            <LandingPageSection
              showLandingPage={showLandingPage}
              ctr={formData.ctr}
              onToggle={setShowLandingPage}
              onFieldChange={handleFieldChange}
            />

            <SalesSection
              productPrice={formData.productPrice}
              productCost={formData.productCost}
              conversionRate={formData.conversionRate}
              onFieldChange={handleFieldChange}
            />

            <UpSalesSection
              showUpSales={showUpSales}
              upSaleProductPrice={formData.upSaleProductPrice}
              upSaleProductCost={formData.upSaleProductCost}
              upSaleConversionRate={formData.upSaleConversionRate}
              onToggle={setShowUpSales}
              onFieldChange={handleFieldChange}
            />

            {showCallCenterAndShipping && (
              <CallCenterShippingSection
                callCenterConfirmationRate={formData.callCenterConfirmationRate}
                callCenterCost={formData.callCenterCost}
                shippingDeliverability={formData.shippingDeliverability}
                shippingCost={formData.shippingCost}
                onFieldChange={handleFieldChange}
              />
            )}

            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
              ) : (
                <span>Calculate Results</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
