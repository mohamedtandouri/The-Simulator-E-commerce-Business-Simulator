import { Separator } from "@/components/ui/separator";
const Terms = () => {
  return <div className="min-h-screen bg-background pt-20 pb-10 px-4">
      <div className="container mx-auto max-w-4xl        bg-card text-card-foreground rounded-lg shadow-sm    p-8 border border-border card-hover">
        <h1 className="text-3xl font-bold text-foreground mb-8">Terms of Service</h1>
        <Separator className="mb-8" />
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using Simulator, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">User Responsibilities</h2>
            <p className="text-muted-foreground">
              You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Service Modifications</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice.
            </p>
          </section>
        </div>
      </div>
    </div>;
};
export default Terms;