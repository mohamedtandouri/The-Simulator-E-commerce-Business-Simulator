import { Separator } from "@/components/ui/separator";
const Privacy = () => {
  return <div className="min-h-screen bg-background pt-20 pb-10 px-4">
      <div className="container mx-auto max-w-4xl    bg-card text-card-foreground rounded-lg shadow-sm    p-8 border border-border card-hover">
        <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <Separator className="mb-8" />
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Data Collection</h2>
            <p className="text-muted-foreground">
              We collect information that you provide directly to us when using our services. This includes registration information, calculator inputs, and any communication you have with us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Data Usage</h2>
            <p className="text-muted-foreground">
              The information we collect is used to provide and improve our services, communicate with you, and ensure the security of our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Data Protection</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk of processing your personal data.
            </p>
          </section>
        </div>
      </div>
    </div>;
};
export default Privacy;