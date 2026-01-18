import { Separator } from "@/components/ui/separator";
const FAQ = () => {
  return <div className="min-h-screen bg-background pt-20 pb-10 px-4  ">
      <div className="container mx-auto max-w-4xl                bg-card text-card-foreground rounded-lg shadow-sm    p-8 border border-border card-hover">
        <h1 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h1>
        <Separator className="mb-8" />
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">What is Simulator?</h2>
            <p className="text-muted-foreground">
              Simulator is a comprehensive e-commerce business simulation tool that helps you analyze and optimize your business metrics.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">How does the calculator work?</h2>
            <p className="text-muted-foreground">
              Our calculator uses advanced algorithms to process your business metrics and provide detailed insights into potential outcomes and optimizations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Is my data secure?</h2>
            <p className="text-muted-foreground">
              Yes, we take data security seriously. All your information is encrypted and stored securely following industry best practices.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default FAQ;