const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">OS</span>
              </div>
              <span className="font-bold text-lg text-foreground">OS</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Innovative IT solutions with over 20 years of excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#markets" className="text-muted-foreground hover:text-primary transition-colors">
                  Markets
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Systems Integration</li>
              <li className="text-muted-foreground">IT Professional Services</li>
              <li className="text-muted-foreground">Managed Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <p className="text-muted-foreground text-sm">
              Ready to transform your IT infrastructure?
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 text-primary hover:underline"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Optimized Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
