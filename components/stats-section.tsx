export function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
            <div className="text-sm lg:text-base text-background/80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
            <div className="text-sm lg:text-base text-background/80">Local Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
            <div className="text-sm lg:text-base text-background/80">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
            <div className="text-sm lg:text-base text-background/80">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
