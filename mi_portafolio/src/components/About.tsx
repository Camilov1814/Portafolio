import AboutImage from '../assets/foto.jpeg';
interface AboutProps {
    title: string;
    
  }
  
  const About: React.FC<AboutProps> = ({  title }) => {
    return (
      <div className="flex flex-col md:flex-row  items-center p-8 bg-background-main">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 pt-7">
        <img 
          src={AboutImage} 
          alt="About us" 
          className="w-2/4 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">{title}</h2>
        <p className="font-body text-secondary text-lg">
          My name is <span className="text-primary font-semibold">Camilo</span>, and I'm a 21-year-old from <span className="text-primary font-semibold">Medellín, Colombia</span>. I completed my secondary education at Colombo Británico Envigado. Currently, I'm pursuing an undergraduate degree in <span className="text-primary font-semibold">Systems and Computer Engineering</span>.
        </p>
        <p className="font-body text-secondary text-lg mt-4">
          Throughout my university career, I've worked on various projects, primarily focusing on <span className="text-primary font-semibold">web development</span>.
        </p>
      </div>
      </div>
    );
  };
  
  export default About;
