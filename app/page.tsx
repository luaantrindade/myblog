import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import BlogPreview from "@/components/BlogPreview";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <BlogPreview />
      <Experience />
      <Contact />
    </>
  );
}