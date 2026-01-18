
import React from "react";
import { InputField } from "./InputField";

type SalesSectionProps = {
  productPrice: string;
  productCost: string;
  conversionRate: string;
  onFieldChange: (name: string, value: string) => void;
};

export const SalesSection = ({ 
  productPrice, 
  productCost, 
  conversionRate, 
  onFieldChange 
}: SalesSectionProps) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Sales Page</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <InputField 
        label="Product Price" 
        name="productPrice"
        value={productPrice}
        onChange={(value) => onFieldChange("productPrice", value)}
      />
      <InputField 
        label="Product Cost" 
        name="productCost"
        value={productCost}
        onChange={(value) => onFieldChange("productCost", value)}
      />
      <InputField 
        label="Conversion Rate" 
        name="conversionRate"
        value={conversionRate}
        onChange={(value) => onFieldChange("conversionRate", value)}
        suffix="%" 
      />
    </div>
  </div>
);
