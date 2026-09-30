"use client";

import { useState } from "react";
import { Mail, GitBranch, User, Video, GraduationCap, MapPin, Send, CheckCircle, Loader2, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 20) newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, replace with actual API call
    // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/luaantrindade",
      icon: GitBranch,
      color: "hover:text-foreground",
      bg: "hover:bg-background-elevated",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/luan-trindade",
      icon: User,
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-400/10",
    },
    {
      name: "Google Scholar",
      href: "https://scholar.google.com/citations?user=luan-trindade",
      icon: GraduationCap,
      color: "hover:text-amber-400",
      bg: "hover:bg-amber-400/10",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@luan-trindade",
      icon: Video,
      color: "hover:text-red-400",
      bg: "hover:bg-red-400/10",
    },
    {
      name: "Email",
      href: "mailto:luan@luantrindade.com",
      icon: Mail,
      color: "hover:text-primary",
      bg: "hover:bg-primary/10",
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h2 className="section-heading gradient-text mb-4">Let&apos;s Build Something</h2>
          <p className="section-subheading">
            Have a project in mind? Looking for collaboration? Or just want to say hi?
            I&apos;d love to hear from you. Let&apos;s create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-up delay-1">
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-border-light">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-primary" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                      placeholder="Your name"
                      disabled={status === "submitting"}
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-sm text-red-400" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                      placeholder="your@email.com"
                      disabled={status === "submitting"}
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-sm text-red-400" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`form-input ${errors.subject ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                    placeholder="What&apos;s this about?"
                    disabled={status === "submitting"}
                    aria-invalid={errors.subject ? "true" : "false"}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1.5 text-sm text-red-400" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`form-input resize-y min-h-[140px] ${errors.message ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                    placeholder="Tell me about your project, idea, or just say hello..."
                    disabled={status === "submitting"}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-sm text-red-400" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  {status === "submitting" && <Loader2 className="h-5 w-5 animate-spin" />}
                  {status !== "submitting" && <Send className="h-5 w-5" />}
                  <span>
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </span>
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 animate-fade-in" role="status">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm opacity-80">I&apos;ll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="animate-fade-in-up delay-2">
            {/* Info Card */}
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-border-light mb-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Let&apos;s Connect
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-foreground-muted">Donabate, North Dublin, Ireland 🇮🇪</p>
                    <p className="text-foreground-muted text-sm">Available for remote & hybrid roles</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:luan@luantrindade.com" className="text-primary hover:underline">luan@luantrindade.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <GitBranch className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">GitHub</h4>
                    <a href="https://github.com/luaantrindade" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/luaantrindade</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-border-light">
              <h3 className="text-xl font-bold text-foreground mb-6">Find Me Elsewhere</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-xl bg-background-elevated border border-border-light transition-all duration-300 group ${social.bg} ${social.color}`}
                    aria-label={social.name}
                  >
                    <div className="flex-shrink-0 p-2.5 rounded-lg bg-background border border-border-light group-hover:border-primary/30 transition-colors">
                      <social.icon className="h-5 w-5 text-foreground-muted group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 glass-card rounded-2xl p-6 border border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/20">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Currently Available</h4>
                  <p className="text-primary text-sm">Open to freelance, contract, and full-time opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}