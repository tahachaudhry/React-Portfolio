// Import:
// Components:
import NavbarComponent from "./components/NavbarComponent";

// Sections:
import HomeSection from "./sections/HomeSection";
import AboutMeSection from "./sections/AboutMeSection";
import ContactMeSection from "./sections/ContactMeSection";
import ProjectSection from "./sections/ProjectSection";

// App function // Loads page
function App() {
  return (
    <div>
      <NavbarComponent />;
      <HomeSection />
      <AboutMeSection />
      <ProjectSection />
      <ContactMeSection />
    </div>
  );
}

// Export here
export default App;
