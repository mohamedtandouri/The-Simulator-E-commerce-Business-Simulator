
import React from "react";
import { Switch } from "@/components/ui/switch";
import { InputField } from "./InputField";

type LandingPageSectionProps = {
  showLandingPage: boolean;
  ctr: string;
  onToggle: (value: boolean) => void;
  onFieldChange: (name: string, value: string) => void;
};

export const LandingPageSection = ({ 
  showLandingPage, 
  ctr, 
  onToggle, 
  onFieldChange 
}: LandingPageSectionProps) => (
  <>
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">Landing Page</h3>
      <div className="flex items-center space-x-2">
        <label className="text-sm">Enable Landing Page</label>
        <Switch
          checked={showLandingPage}
          onCheckedChange={onToggle}
        />
      </div>
    </div>
    <div className="space-y-4">
      <InputField 
        label="CTR (Click Through Rate)" 
        name="ctr"
        value={ctr}
        onChange={(value) => onFieldChange("ctr", value)}
        suffix="%" 
        disabled={!showLandingPage}
      />
    </div>
  </>
);
