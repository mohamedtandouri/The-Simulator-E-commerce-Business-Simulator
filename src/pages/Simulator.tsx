
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, DollarSign, Globe, Building } from "lucide-react";

const Simulator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessType: "E-commerce/Dropshipping",
    currency: "USD",
    language: "English",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/calculator");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-xl mx-auto animate-in">
        <div className="bg-card rounded-xl shadow-sm p-8 text-card-foreground">
          <h2 className="text-2xl font-bold mb-6 text-center">Business Setup</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Type of Business
                </label>
                <select
                  className="input-field"
                  value={formData.businessType}
                  onChange={(e) =>
                    setFormData({ ...formData, businessType: e.target.value })
                  }
                >
                  <option>E-commerce/Dropshipping</option>
                  <option>COD</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Currency
                </label>
                <select
                  className="input-field"
                  value={formData.currency}
                  onChange={(e) =>
                    setFormData({ ...formData, currency: e.target.value })
                  }
                >
                  <option value="USD">US Dollar</option>
                  <option value="EUR">Euro</option>
                  <option value="MAD">Moroccan Dirham</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Language
                </label>
                <select
                  className="input-field"
                  value={formData.language}
                  onChange={(e) =>
                    setFormData({ ...formData, language: e.target.value })
                  }
                >
                  <option>English</option>
                  <option>French</option>
                  <option>Arabic</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
