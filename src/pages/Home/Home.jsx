import Hero from '../../components/Hero'
import Services from "../../components/Services";
import CoreFeature from "../../components/CoreFeature";
import PartnerCompany from "../../components/PartnerCompany";
import Teams from "../../components/Teams";
import TechStack from "../../components/TechStack";
import Process from "../../components/Process";

function Home() {
  return (
    <>
      <Hero />
      <Services id="services" />
      <CoreFeature id="core-feature" />
      <PartnerCompany id="partner-company" />
      <Teams id="teams" />
      <TechStack id="tech-stack" />
      <Process id="process" />
    </>
  )
}

export default Home
