
import React from "react";
import { InputField } from "./InputField";

type CallCenterShippingSectionProps = {
  callCenterConfirmationRate: string;
  callCenterCost: string;
  shippingDeliverability: string;
  shippingCost: string;
  onFieldChange: (name: string, value: string) => void;
};

export const CallCenterShippingSection = ({ 
  callCenterConfirmationRate, 
  callCenterCost, 
  shippingDeliverability, 
  shippingCost, 
  onFieldChange 
}: CallCenterShippingSectionProps) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Call Center & Shipping</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <InputField 
        label="Call Center Confirmation Rate" 
        name="callCenterConfirmationRate"
        value={callCenterConfirmationRate}
        onChange={(value) => onFieldChange("callCenterConfirmationRate", value)}
        suffix="%" 
      />
      <InputField 
        label="Call Center Cost" 
        name="callCenterCost"
        value={callCenterCost}
        onChange={(value) => onFieldChange("callCenterCost", value)}
      />
      <InputField 
        label="Shipping Deliverability" 
        name="shippingDeliverability"
        value={shippingDeliverability}
        onChange={(value) => onFieldChange("shippingDeliverability", value)}
        suffix="%" 
      />
      <InputField 
        label="Shipping Cost" 
        name="shippingCost"
        value={shippingCost}
        onChange={(value) => onFieldChange("shippingCost", value)}
      />
    </div>
  </div>
);
