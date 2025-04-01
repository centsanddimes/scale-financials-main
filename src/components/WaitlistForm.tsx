import React from 'react';
import { Button } from "@/components/ui/button";

const WaitlistForm: React.FC = () => {
  const handleJoinWaitlist = () => {
    // Open Google Form in a new tab
    window.open('https://docs.google.com/forms/d/1a3uhiI68s41fHOehZnqj6l_frgRvwo5bblZs5BJhimY/viewform', '_blank');
  };

  return (
    <Button 
      onClick={handleJoinWaitlist}
      className="px-8 py-6 text-lg font-medium border border-white/20 bg-transparent hover:bg-white/10 rounded-md transition-all duration-300"
    >
      Join Waitlist
    </Button>
  );
};

export default WaitlistForm;
