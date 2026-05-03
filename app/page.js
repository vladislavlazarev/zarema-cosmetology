import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Pricing } from './sections/Pricing';
import { Contacts } from './sections/Contacts';

export default function Page() {
  return (
    <main className="page-fade">
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contacts />
    </main>
  );
}
