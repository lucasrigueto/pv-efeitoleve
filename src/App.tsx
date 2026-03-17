import { Header } from './components/Header';
import { ProblemSection } from './components/ProblemSection';
import { ExpertSection } from './components/ExpertSection';
import { MethodSection } from './components/MethodSection';
import { TransformationSection } from './components/TransformationSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { SocialProofSection } from './components/SocialProofSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeFaqSection } from './components/GuaranteeFaqSection';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark overflow-x-hidden pb-20 md:pb-0">
      {/* Nova ordem otimizada para narrativa de vendas */}
      <Header />
      <ProblemSection />
      <ExpertSection />
      <MethodSection />
      <TransformationSection />
      <DeliverablesSection />
      <SocialProofSection />
      <OfferSection />
      <GuaranteeFaqSection />
      <Footer />
      {/* Sticky CTA - Apenas Mobile */}
      <StickyCTA />
    </div>
  )
}

export default App
