"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail } from "lucide-react"
import { createSampleKitRequest, createConsultationRequest, openWhatsApp } from "@/lib/whatsapp"

export function CTASection() {
  const handleRequestSamples = () => {
    const message = createSampleKitRequest()
    openWhatsApp(message)
  }

  const handleScheduleConsultation = () => {
    const message = createConsultationRequest()
    openWhatsApp(message)
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-16">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-background rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-background rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground text-balance">
              Ready to elevate your packaging?
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
              Get in touch with our packaging experts today. Request a free consultation and sample kit to experience
              the NewPack difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-base h-12 px-8 group gap-2 bg-background hover:bg-background/90 text-foreground shadow-md"
                onClick={handleRequestSamples}
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                Request Free Samples
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base h-12 px-8 bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 gap-2"
                onClick={handleScheduleConsultation}
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                Schedule Consultation
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a
                  href="tel:+966565273087"
                  className="text-sm font-medium hover:text-primary-foreground transition-colors"
                >
                  +966 56 527 3087
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:sanewpack@gmail.com"
                  className="text-sm font-medium hover:text-primary-foreground transition-colors"
                >
                  sanewpack@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
