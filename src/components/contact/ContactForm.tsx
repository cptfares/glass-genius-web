
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface FormValues {
  name: string;
  phone: string;
  address: string;
  subject: string;
  email: string;
  message: string;
}

const ContactForm = ({ title = "Request a Free Estimate!" }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    phone: "",
    address: "",
    subject: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent. We'll get back to you soon!");
      setFormValues({
        name: "",
        phone: "",
        address: "",
        subject: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="bg-brand-dark/95 p-6 md:p-8 rounded-md shadow-lg">
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formValues.name}
              onChange={handleChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              value={formValues.phone}
              onChange={handleChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Input
              type="text"
              name="address"
              placeholder="Address"
              value={formValues.address}
              onChange={handleChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formValues.subject}
              onChange={handleChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formValues.email}
              onChange={handleChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder="Message"
              required
              value={formValues.message}
              onChange={handleChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-brand-blue hover:bg-brand-blue/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
