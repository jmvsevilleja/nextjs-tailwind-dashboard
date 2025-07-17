import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Shield, 
  Users,
  BarChart3,
  Globe,
  Mail,
  Zap
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-sm mb-6">
            <Star className="w-4 h-4 mr-2 text-yellow-500" />
            Trusted by 10,000+ businesses
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Build Your SaaS
            <br />
            <span className="text-primary">Faster Than Ever</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The complete starter template for modern SaaS applications. 
            Authentication, payments, and dashboard included.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Demo
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to launch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with modern technologies and best practices for scalability and performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure Authentication",
                description: "Built-in user management with secure authentication flows and session handling."
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                description: "Comprehensive dashboard with real-time analytics and user insights."
              },
              {
                icon: Users,
                title: "Team Management",
                description: "Invite team members, manage roles, and collaborate effectively."
              },
              {
                icon: Globe,
                title: "Global CDN",
                description: "Lightning-fast performance with global content delivery network."
              },
              {
                icon: Zap,
                title: "API Integration",
                description: "RESTful APIs and webhooks for seamless third-party integrations."
              },
              {
                icon: Mail,
                title: "Email Automation",
                description: "Automated email campaigns and transactional email support."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-card border border-border/50 hover:border-border transition-colors">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that's right for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$9",
                description: "Perfect for small teams",
                features: [
                  "Up to 5 team members",
                  "10GB storage",
                  "Basic analytics",
                  "Email support"
                ],
                popular: false
              },
              {
                name: "Professional",
                price: "$29",
                description: "Best for growing businesses",
                features: [
                  "Up to 25 team members",
                  "100GB storage",
                  "Advanced analytics",
                  "Priority support",
                  "API access"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "$99",
                description: "For large organizations",
                features: [
                  "Unlimited team members",
                  "1TB storage",
                  "Custom analytics",
                  "24/7 phone support",
                  "Custom integrations",
                  "SLA guarantee"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`p-8 rounded-lg border ${plan.popular ? 'border-primary bg-primary/5' : 'border-border bg-card'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/auth/signup" className="block">
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of businesses already using SaaSify to grow their revenue.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" variant="secondary">
              Start Your Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}