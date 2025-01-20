import ProjectCard from "../components/ProjectCard";
import VariableWeightText from "../components/VariableWeightText";


// import Project1 from '../assets/project-1.png'
import Project2 from '../assets/project-2.png'
import Project3 from '../assets/project-3.png'

const projectsData = [
  {
    id: "01",
    title: "Job Finder Application",
    description: "Discover your dream job effortlessly with our powerful Job Finder application. Designed for efficiency, it connects job seekers with opportunities through an intuitive interface . Whether you're starting your career or looking for a change, find the perfect match with ease!",
    link: "https://github.com/AbdulWaris009",
    image: "https://media.istockphoto.com/id/1279104620/photo/top-view-of-a-white-desktop-concept-job-search.jpg?s=612x612&w=0&k=20&c=Ow_kvA2wQ4rLlqX_oFHgpjLb1JMKyPQKLOPzbu6w6qw=",  
  },
  {
    id: "02",
    title: "News React App",
    description: "Stay informed with our feature-rich News App. Get the latest updates from around the world, tailored to your interests, all in a clean and user-friendly interface. News that matters, just a tap away!",
    link: "https://github.com/AbdulWaris009",
    image: Project2,
  },
  {
    id: "03",
    title: "JS SMALL PROJECT",
    description: " Beginner friendly Project using Html,css javascript ",
    link: "https://github.com/AbdulWaris009",
    image: Project3,
  }
]

const Projects = () => {
  return (
    <div className="bg-black h-auto px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col items-center gap-5">
        <VariableWeightText
          regularText="My"
          extraboldText="Projects"
          invert
        />
        <div className="mt-8 flex flex-col gap-y-8">
          { projectsData.map(projectData => {
            return <ProjectCard 
              key={projectData.id} 
              projectData={projectData} 
            />
          })}
        </div>
      </div>
      <hr className="mb-2"/>
    </div>
    
  )
}

export default Projects;
