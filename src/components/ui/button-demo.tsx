import { Facebook, Github, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button className="flex-1" variant="outline" aria-label="Login with Google" size="icon">
        <span className="font-bold text-[#DB4437] dark:text-primary" aria-hidden="true">G</span>
      </Button>
      <Button className="flex-1" variant="outline" aria-label="Login with Facebook" size="icon">
        <Facebook className="text-[#1877f2] dark:text-primary" size={16} aria-hidden="true" />
      </Button>
      <Button className="flex-1" variant="outline" aria-label="Login with X" size="icon">
        <Twitter className="text-[#14171a] dark:text-primary" size={16} aria-hidden="true" />
      </Button>
      <Button className="flex-1" variant="outline" aria-label="Login with GitHub" size="icon">
        <Github className="text-black dark:text-primary" size={16} aria-hidden="true" />
      </Button>
    </div>
  );
}

export { Component };
