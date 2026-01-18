
import React from "react";

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  suffix?: string;
  disabled?: boolean;
};

export const InputField = ({ 
  label, 
  name, 
  value, 
  onChange, 
  suffix = "", 
  disabled = false 
}: InputFieldProps) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-foreground">{label}</label>
    <div className="relative">
      <input
        type="text"
        className={`w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter value"
        required
        disabled={disabled}
      />
      {suffix && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
          {suffix}
        </span>
      )}
    </div>
  </div>
);
