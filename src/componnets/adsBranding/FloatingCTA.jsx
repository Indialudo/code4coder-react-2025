import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button variant="cta" size="lg" className="shadow-2xl animate-pulse">
        Book Free Session
      </Button>
    </div>
  );
};

export default FloatingCTA;