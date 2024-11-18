import StackSection from "@/components/stack-section";
import WorkSection from "@/components/work-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  return (
    <main className="mb-32 mt-10 flex flex-col gap-20 sm:mt-10 sm:gap-20">
      <StackSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
