import { Separator } from "@/components/ui/separator";
const Legal = () => {
  return <div className="min-h-screen bg-background pt-20 pb-10 px-4">
      <div className="container mx-auto max-w-4xl       bg-card text-card-foreground rounded-lg shadow-sm    p-8 border border-border card-hover">
        <h1 className="text-3xl font-bold text-foreground mb-8">Legal Information</h1>
        <Separator className="mb-8" />
        
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground">
            This page contains important legal information about our services, terms of use, and your rights and responsibilities when using Simulator.
          </p>
          
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Company Information</h2>
          <p className="text-muted-foreground">
            Simulator is operated by [Company Name], registered under the laws of [Jurisdiction].
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content, features, and functionality of the Simulator application are owned by [Company Name] and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
        </div>
      </div>
    </div>;
};
export default Legal;