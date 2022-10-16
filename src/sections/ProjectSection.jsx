// Imports:
// Section:
import ProjectComponentdata from "../components/ProjectComponent";

// Data:
import listofprojects from "../data/projectData";

// Project section function:
const ProjectSection = () => {
  return (
    // Background:
    <div
      name="projects"
      className="w-full md:min-h-screen text-[#000000] bg-white"
    >
      <div className="max-w-7xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Title */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#000000] border-red">
            My Projects:
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {listofprojects.map((project) => (
            <ProjectComponentdata {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Export:
export default ProjectSection;
