import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Search, 
  Instagram, 
  Youtube, 
  MessageCircle, 
  Linkedin,
  Twitter
} from "lucide-react";
import heroImage from "@/assets/hero-person.jpg";

const HeroImages = () => {
  return (
    <section className="bg-hero-gradient min-h-[80vh] py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Run{" "}
              <span className="text-primary block">Facebook</span>
              <span className="text-primary">Google</span>{" "}
              <span className="text-primary">Instagram</span>
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Ads effortlessly & Get 2X-5X result !
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-lg">
            Let AdKrity to automate your ads and target the potential customers through AI
          </p>

          <div className="space-y-4">
            <Button variant="cta" size="lg" className="text-lg">
              Book Free Session with Expert
            </Button>
            
            {/* App Store Buttons */}
            <div className="flex gap-4">
              <Button variant="download" size="sm" className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded text-black flex items-center justify-center text-xs font-bold">
                  
                </div>
                Download on the App Store
              </Button>
              <Button variant="download" size="sm" className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded text-white flex items-center justify-center text-xs">
                  ▶
                </div>
                GET IT ON Google Play
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image with Social Icons */}
        <div className="relative">
          <div className="relative z-10">
            <img 
              src={heroImage} 
              alt="Digital Growth Partner" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
              <p className="text-sm font-semibold text-center">
                Your Digital Growth<br />Partner
              </p>
            </div>
          </div>

          {/* Floating Social Icons */}
          <div className="absolute -top-4 -right-4 bg-facebook text-white p-3 rounded-full shadow-lg animate-bounce">
            <Facebook size={24} />
          </div>
          <div className="absolute top-20 -left-4 bg-google text-white p-3 rounded-full shadow-lg animate-bounce delay-100">
            <Search size={24} />
          </div>
          <div className="absolute top-40 -right-8 bg-instagram text-white p-3 rounded-full shadow-lg animate-bounce delay-200">
            <Instagram size={24} />
          </div>
          <div className="absolute bottom-32 -left-8 bg-whatsapp text-white p-3 rounded-full shadow-lg animate-bounce delay-300">
            <MessageCircle size={24} />
          </div>
          <div className="absolute bottom-16 right-4 bg-youtube text-white p-3 rounded-full shadow-lg animate-bounce delay-500">
            <Youtube size={24} />
          </div>
          <div className="absolute top-8 left-8 bg-linkedin text-white p-3 rounded-full shadow-lg animate-bounce delay-700">
            <Linkedin size={24} />
          </div>
          <div className="absolute bottom-8 left-1/3 bg-twitter text-white p-3 rounded-full shadow-lg animate-bounce delay-1000">
            <Twitter size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImages;