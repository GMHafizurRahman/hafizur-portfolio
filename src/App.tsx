import { ThemeProvider } from '@/hooks/useTheme'
import { Navigation } from '@/components/navigation/Navigation'
import { HeroSection } from '@/sections/HeroSection'
import { AboutSection } from '@/sections/AboutSection'
import { ExpertiseSection } from '@/sections/ExpertiseSection'
import { ExperienceSection } from '@/sections/ExperienceSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { CapabilitiesSection } from '@/sections/CapabilitiesSection'
import { EducationSection } from '@/sections/EducationSection'
import { ValuesSection } from '@/sections/ValuesSection'
import { ContactSection } from '@/sections/ContactSection'
import { FooterSection } from '@/sections/FooterSection'

function App() {
  return (
    <ThemeProvider>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ExperienceSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <EducationSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <FooterSection />
    </ThemeProvider>
  )
}

export default App
