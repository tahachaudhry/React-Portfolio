// Imports:
// IonIcons import:
// Code // IOS Create icon:
import { IoIosCreate } from "react-icons/io";

// Deploy // IOS Desktop Icon:
import { IoIosDesktop } from "react-icons/io";

// Made function to call the project section:
// Listed the labels that would come up:
const ProjectComponentdata = ({
  image,
  alt,
  title,
  description,
  repositoryLink,
  deployedLink,
}) => {
  // Preview section / Images:
  return (
    <div className="card group max-w-md bg-base-100 shadow-lg rounded-lg mx-auto cursor-pointer">
      <figure className="h-48 overflow-auto">
        <img
          className="w-full h-full object-contain object-top p-4 bg-white group-hover:bg-red"
          // Preview image:
          src={image}
          // text if image does not show:
          alt={alt}
        />
      </figure>
      {/* Card body: */}
      {/* Description: */}
      <div className="card-body bg-darkgray text-white space-y-4 group-hover:bg-white group-hover:text-[#000000]">
        {/* Title: */}
        <h2 className="card-title underline font-bold">{title}</h2>
        <p className="text-md">{description}</p>
        <div className="mx-auto space-x-6">
          {/* Repository Link and Icon: */}
          {repositoryLink ? (
            <a href={repositoryLink} target="_blank" rel="noreferrer">
              <button className="btn bg-white mx-auto">
                <IoIosCreate />
              </button>
            </a>
          ) : (
            ""
          )}
          {/* Deployment Link and Icon: */}
          <a href={deployedLink} target="_blank" rel="noreferrer">
            <button className="btn bg-white mx-auto">
              <IoIosDesktop />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponentdata;
