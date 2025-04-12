import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background px-4 py-24 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/"
          className="font-mono inline-block mb-12 hover:text-brand transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="font-mono text-4xl md:text-5xl font-bold mb-8 tracking-tighter">Privacy Policy</h1>
        
        <div className="space-y-8 font-mono">
          <section>
            <h2 className="text-xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information that you provide directly to us when using our services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Name and contact information</li>
              <li>Company details</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide and improve our services</li>
              <li>Communicate with you about your projects</li>
              <li>Send important updates and notifications</li>
              <li>Process your requests and transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:hello@blak.co" className="text-brand hover:underline">
                hello@blak.co
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">7. Updates to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated date and will be effective as soon as it is accessible.
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