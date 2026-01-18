
import { useNavigate } from "react-router-dom";
import { Calculator } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-4xl mx-auto text-center animate-in">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            The Simulator
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-2 text-foreground">
            The best E-commerce business simulator
          </p>
          <p className="text-muted-foreground">
            Try it now and get the results you need to start your own e-commerce business
          </p>
        </div>

        <button
          onClick={() => navigate("/login")}
          className="btn-primary group inline-flex items-center gap-2"
        >
          <span>Start</span>
          <Calculator className="w-5 h-5 transition-transform group-hover:rotate-12" />
        </button>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border card-hover">
            <h3 className="text-lg font-semibold mb-2">Easy to Use</h3>
            <p className="text-muted-foreground">
              Simple interface designed for quick results
            </p>
          </div>
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border card-hover">
            <h3 className="text-lg font-semibold mb-2">Accurate Results</h3>
            <p className="text-muted-foreground">
              Based on real market data and trends
            </p>
          </div>
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border card-hover">
            <h3 className="text-lg font-semibold mb-2">Detailed Insights</h3>
            <p className="text-muted-foreground">
              Get comprehensive business metrics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
