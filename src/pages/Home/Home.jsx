import Hero from '../../components/Hero'
import Services from "../../components/Services";
import CoreFeature from "../../components/CoreFeature";
import PartnerCompany from "../../components/PartnerCompany";
import Teams from "../../components/Teams";
import TechStack from "../../components/TechStack";
import Process from "../../components/Process";
import Internship from '../Internship/Internship';

function Home() {
  return (
    <>
      <Hero />
      <Services id="services" />
      <CoreFeature />
      <PartnerCompany />
      <Teams />
      <TechStack />
      <Process id="process" />
    </>
  )
}

export default Home
