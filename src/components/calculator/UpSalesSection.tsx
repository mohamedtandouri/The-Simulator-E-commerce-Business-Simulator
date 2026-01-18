
import React from "react";
import { Switch } from "@/components/ui/switch";
import { InputField } from "./InputField";

type UpSalesSectionProps = {
  showUpSales: boolean;
  upSaleProductPrice: string;
  upSaleProductCost: string;
  upSaleConversionRate: string;
  onToggle: (value: boolean) => void;
  onFieldChange: (name: string, value: string) => void;
};

export const UpSalesSection = ({ 
  showUpSales, 
  upSaleProductPrice, 
  upSaleProductCost, 
  upSaleConversionRate, 
  onToggle, 
  onFieldChange 
}: UpSalesSectionProps) => (
  <>
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">Up Sales</h3>
      <div className="flex items-center space-x-2">
        <label className="text-sm">Enable Up Sales</label>
        <Switch
          checked={showUpSales}
          onCheckedChange={onToggle}
        />
      </div>
    </div>
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField 
          label="Product Price" 
          name="upSaleProductPrice"
          value={upSaleProductPrice}
          onChange={(value) => onFieldChange("upSaleProductPrice", value)}
          disabled={!showUpSales}
        />
        <InputField 
          label="Product Cost" 
          name="upSaleProductCost"
          value={upSaleProductCost}
          onChange={(value) => onFieldChange("upSaleProductCost", value)}
          disabled={!showUpSales}
        />
        <InputField 
          label="Conversion Rate" 
          name="upSaleConversionRate"
          value={upSaleConversionRate}
          onChange={(value) => onFieldChange("upSaleConversionRate", value)}
          suffix="%" 
          disabled={!showUpSales}
        />
      </div>
    </div>
  </>
);
