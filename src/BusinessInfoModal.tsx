import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import { User, Store, Phone, Mail } from "lucide-react";

interface BusinessInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BusinessInfoModal({ isOpen, onClose }: BusinessInfoModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    shopName: "",
    number: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose(); // close modal after submit
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg rounded-xl bg-white p-8 shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">
            Quick Business Information
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <div className="relative">
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Billu Dilwala"
                className="pr-10"
              />
              <User className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Shop Name */}
          <div className="space-y-2">
            <Label htmlFor="shopName">Shop Name</Label>
            <div className="relative">
              <Input
                id="shopName"
                value={formData.shopName}
                onChange={handleChange}
                placeholder="Billu Chai Shop"
                className="pr-10"
              />
              <Store className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Number and Email side by side */}
          <div className="flex gap-6">
            <div className="w-1/2 space-y-2">
              <Label htmlFor="number">Number</Label>
              <div className="relative">
                <Input
                  id="number"
                  type="tel"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="+91 87656 76767"
                  className="pr-10"
                />
                <Phone className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="w-1/2 space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="pr-10"
                />
                <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg py-2"
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
