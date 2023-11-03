import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <form className="mx-auto max-w-md p-4">
      {/* Top Row */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Contact Us!</h2>
      </div>

      {/* Bottom Row */}
      <div className="flex space-x-4">
        {/* Left Side */}
        <div className="w-1/2">
          <Input type="text" placeholder="First Name" className="mb-4" />
          <Input type="text" placeholder="Last Name" className="mb-4" />
          <Input type="email" placeholder="Email" className="mb-4" />
          <Input type="tel" placeholder="Phone Number" className="mb-4" />
        </div>

        {/* Right Side */}
        <div className="w-1/2">
          <Textarea placeholder="Message" className="mb-4" />
          <Button variant="bank" size='contact'>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

