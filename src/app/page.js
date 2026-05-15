import AboutMe from "./aboutMe/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Services from "./service/page";
import SkillsPage from "./skills/page";




export default function Home() {
  return (
    <div>
      <AboutMe></AboutMe>

      <SkillsPage></SkillsPage>

      <Services></Services>

      <Projects></Projects>

      <Contact></Contact>


  
    </div>
  );
}
