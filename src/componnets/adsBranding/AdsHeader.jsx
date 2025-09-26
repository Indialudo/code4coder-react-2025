import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-lg font-bold">
            ak
          </div>
          <span className="text-xl font-semibold text-foreground">adkrity</span>
        </div>

        {/* Download App Button */}
        <Button variant="cta" size="sm">
          Download App
        </Button>
      </div>
    </header>
  );
};

export default Header;