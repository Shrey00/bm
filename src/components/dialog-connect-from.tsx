import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { toast } from "sonner";
const DialogConectUsForm = ({ setOpen }: { setOpen: () => void }) => {
  const [connectWithUsFormData, setConnectWithUsFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const navigate = useNavigate();
  function handleSubmit() {
    if (
      !connectWithUsFormData.name.trim().length ||
      !connectWithUsFormData.email.trim().length ||
      !connectWithUsFormData.message.trim().length
    ) {
        toast("Error", {
         description: "Please fill all the fields",
        });
      return;
    }
    toast("Your information has been recorded", {
      description: "We will connect to you soon!",
    });

    setOpen();
    setConnectWithUsFormData({
      name: "",
      email: "",
      message: "",
    });
  }
  function handleFormChange(e: any) {
        
    setConnectWithUsFormData({
      ...connectWithUsFormData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Connect us</DialogTitle>
      </DialogHeader>
      <div>
        <Label>Name</Label>
        <Input
          name="name"
          type="text"
          className="mt-1"
          onChange={handleFormChange}
          value={connectWithUsFormData.name}
        />
      </div>
      <div>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          className="mt-1"
          placeholder="hey@example.com"
          value={connectWithUsFormData.email}
          onChange={handleFormChange}
        />
      </div>
      <div>
        <Label>Message</Label>
        <Input
          name="message"
          type="text"
          className="mt-1"
          onChange={handleFormChange}
          value={connectWithUsFormData.message}
        />
      </div>
      <DialogFooter>
        <button
          onClick={handleSubmit}
          className="bg-[#E65454] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
        >
          Submit
        </button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DialogConectUsForm;
