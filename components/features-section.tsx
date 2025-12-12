import { Box, Leaf, Zap, Shield, TrendingUp, Clock } from "lucide-react"

const features = [
  {
    icon: Box,
    title: "Custom Solutions",
    description: "Tailored packaging designs to perfectly match your brand identity and product requirements.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable materials and production processes that reduce environmental impact.",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description: "Fast production and delivery to keep your business moving without delays.",
  },
  {
    icon: Shield,
    title: "Vision 2030 Aligned",
    description: "Supporting Saudi Arabia's Vision 2030 with sustainable, locally-focused packaging solutions.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Production",
    description: "From small batches to large-scale orders, we grow with your business needs.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service to answer questions and solve problems instantly.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Why choose NewPack?</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We combine innovation, sustainability, and reliability to deliver packaging solutions that exceed
            expectations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
