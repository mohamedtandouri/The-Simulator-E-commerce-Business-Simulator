const About = () => {
  return <div className="min-h-screen bg-background pt-20 p-4">
      <div className="max-w-4xl mx-auto space-y-8 animate-in">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-muted-foreground">
            Learn more about our e-commerce business simulator
          </p>
        </div>

        <div className="space-y-8 ">
          <div className="   bg-card text-card-foreground rounded-lg shadow-sm    p-8 border border-border card-hover">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              We're dedicated to helping entrepreneurs understand and optimize their
              e-commerce businesses through accurate simulations and data-driven insights.
            </p>
          </div>

          <div className="   bg-card text-card-foreground rounded-lg shadow-sm    p-8 border border-border card-hover">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Advanced business simulation tools</li>
              <li>• Real-time market analysis</li>
              <li>• Cost and revenue projections</li>
              <li>• Performance optimization insights</li>
            </ul>
          </div>

          <div className="   bg-card text-card-foreground rounded-lg shadow-sm    p-8 border border-border card-hover">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground">
              Our simulator provides accurate, data-driven insights that help you make
              informed decisions about your e-commerce business. With our tools, you
              can test different scenarios and optimize your strategy before making
              real investments.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default About;