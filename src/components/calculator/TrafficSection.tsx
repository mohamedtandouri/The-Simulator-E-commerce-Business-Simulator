
import React from "react";
import { InputField } from "./InputField";

type TrafficSectionProps = {
  trafficSpending: string;
  cpc: string;
  onFieldChange: (name: string, value: string) => void;
};

export const TrafficSection = ({ trafficSpending, cpc, onFieldChange }: TrafficSectionProps) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Traffic</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <InputField 
        label="Traffic Spending" 
        name="trafficSpending"
        value={trafficSpending}
        onChange={(value) => onFieldChange("trafficSpending", value)}
      />
      <InputField 
        label="CPC (Cost Per Click)" 
        name="cpc"
        value={cpc}
        onChange={(value) => onFieldChange("cpc", value)}
      />
    </div>
  </div>
);
