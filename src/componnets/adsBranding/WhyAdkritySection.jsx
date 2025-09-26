import { Brain, Target, TrendingUp, Zap, BarChart3, Users } from "lucide-react";

const WhyAdkritySection = () => {
  const features = [
    {
      icon: Brain,
      title: "Creative AI",
      description: "AI to automatically generate high-converting ad creatives and copy that resonate with your audience."
    },
    {
      icon: Target,
      title: "Targeting AI",
      description: "Smart AI targeting to find and reach your ideal customers across all platforms with precision."
    },
    {
      icon: TrendingUp,
      title: "Optimization AI",
      description: "Continuous AI optimization to improve your ad performance and maximize your return on investment."
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Complete campaign automation that runs your ads 24/7 without manual intervention."
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Deep insights and analytics to track performance and make data-driven decisions."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated account managers and expert support to help you achieve your goals."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why AdKrity?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We use AI at every critical aspect of your ad campaign, including design, targeting, and optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAdkritySection;