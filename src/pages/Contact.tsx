import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  return <div className="min-h-screen bg-background pt-20 p-4">
      <div className="max-w-4xl mx-auto space-y-8 animate-in">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8       bg-card text-card-foreground rounded-lg shadow-sm    p-8 border border-border card-hover">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <span>📍</span>
                <span>123 Business Street, Suite 100, CA 94105</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <span>📧</span>
                <span>contact@simulator.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <span>📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input id="name" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} placeholder="Your name" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} placeholder="Your email" required />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" value={formData.subject} onChange={e => setFormData({
                ...formData,
                subject: e.target.value
              })} placeholder="Subject" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} placeholder="Your message" className="h-32" required />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>;
};
export default Contact;