import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background px-4 py-24 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/"
          className="font-mono inline-block mb-12 hover:text-brand transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="font-mono text-4xl md:text-5xl font-bold mb-8 tracking-tighter">Terms of Service</h1>
        
        <div className="space-y-8 font-mono">
          <section>
            <h2 className="text-xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. Services</h2>
            <p className="text-muted-foreground mb-4">
              We provide web development, web scraping, AI agents, and automation services. The specific details, deliverables, and timelines for each project will be outlined in separate project agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. Client Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide accurate and complete information for your project</li>
              <li>Review and provide feedback in a timely manner</li>
              <li>Make payments according to the agreed schedule</li>
              <li>Obtain necessary rights and permissions for materials provided to us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              Upon full payment:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You own the final deliverables created specifically for your project</li>
              <li>We retain ownership of pre-existing materials and generic components</li>
              <li>We reserve the right to showcase the work in our portfolio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. Payment Terms</h2>
            <p className="text-muted-foreground">
              Payment terms, including amounts and schedules, will be specified in project agreements. Late payments may result in work suspension and additional fees.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. Confidentiality</h2>
            <p className="text-muted-foreground">
              We maintain strict confidentiality of client information and project details. Specific confidentiality terms may be outlined in separate non-disclosure agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Our liability is limited to the amount paid for services. We are not liable for indirect, consequential, or incidental damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">8. Termination</h2>
            <p className="text-muted-foreground">
              Either party may terminate services with written notice. You are responsible for payment for work completed up to the termination date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms are governed by the laws of California, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">10. Contact</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:hello@blak.co" className="text-brand hover:underline">
                hello@blak.co
              </a>
            </p>
          </section>

          <p className="text-sm text-muted-foreground pt-8">
            Last updated: April 12, 2025
          </p>
        </div>
      </div>
    </div>
  )
}