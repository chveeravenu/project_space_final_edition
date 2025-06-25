import { useNavigate } from 'react-router-dom';
import './Tests.css';

const Tests = () => {
  const navigate = useNavigate();

  const technologies = [
    // Programming Languages
    {
      name: 'JavaScript',
      logo: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
      description: 'The scripting language for Web pages',
      category: 'Language'
    },
    {
      name: 'Python',
      logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
      description: 'High-level programming language',
      category: 'Language'
    },
    {
      name: 'Java',
      logo: 'https://cdn.worldvectorlogo.com/logos/java-4.svg',
      description: 'Object-oriented programming language',
      category: 'Language'
    },
    {
      name: 'C++',
      logo: 'https://cdn.worldvectorlogo.com/logos/c.svg',
      description: 'General-purpose programming language',
      category: 'Language'
    },
    {
      name: 'TypeScript',
      logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
      description: 'Typed superset of JavaScript',
      category: 'Language'
    },

    // Frontend Frameworks
    {
      name: 'React',
      logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      description: 'JavaScript library for building UIs',
      category: 'Frontend'
    },
    {
      name: 'Angular',
      logo: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
      description: 'Platform for building web applications',
      category: 'Frontend'
    },
    {
      name: 'Vue',
      logo: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
      description: 'Progressive JavaScript framework',
      category: 'Frontend'
    },
    {
      name: 'Svelte',
      logo: 'https://cdn.worldvectorlogo.com/logos/svelte-1.svg',
      description: 'Component framework for UIs',
      category: 'Frontend'
    },

    // Backend Technologies
    {
      name: 'Node.js',
      logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
      description: 'JavaScript runtime environment',
      category: 'Backend'
    },
    {
      name: 'Express',
      logo: 'https://cdn.worldvectorlogo.com/logos/express-109.svg',
      description: 'Node.js web application framework',
      category: 'Backend'
    },
    {
      name: 'Django',
      logo: 'https://cdn.worldvectorlogo.com/logos/django.svg',
      description: 'Python web framework',
      category: 'Backend'
    },
    {
      name: 'Spring',
      logo: 'https://cdn.worldvectorlogo.com/logos/spring-3.svg',
      description: 'Java application framework',
      category: 'Backend'
    },

    // Databases
    {
      name: 'MongoDB',
      logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
      description: 'NoSQL document database',
      category: 'Database'
    },
    {
      name: 'MySQL',
      logo: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg',
      description: 'Relational database management system',
      category: 'Database'
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg',
      description: 'Object-relational database system',
      category: 'Database'
    },
    {
      name: 'Redis',
      logo: 'https://cdn.worldvectorlogo.com/logos/redis.svg',
      description: 'In-memory data structure store',
      category: 'Database'
    },

    // DevOps & Cloud
    {
      name: 'Docker',
      logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
      description: 'Containerization platform',
      category: 'DevOps'
    },
    {
      name: 'Kubernetes',
      logo: 'https://cdn.worldvectorlogo.com/logos/kubernets.svg',
      description: 'Container orchestration system',
      category: 'DevOps'
    },
    {
      name: 'AWS',
      logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
      description: 'Cloud computing platform',
      category: 'Cloud'
    },
    {
      name: 'Azure',
      logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-azure-2.svg',
      description: 'Microsoft cloud services',
      category: 'Cloud'
    },

    // Operating Systems
    {
      name: 'Linux',
      logo: 'https://cdn.worldvectorlogo.com/logos/linux-tux.svg',
      description: 'Open-source operating system',
      category: 'OS'
    },
    {
      name: 'Windows',
      logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg',
      description: 'Microsoft operating system',
      category: 'OS'
    },
    {
      name: 'macOS',
      logo: 'https://cdn.worldvectorlogo.com/logos/macos.svg',
      description: 'Apple operating system',
      category: 'OS'
    },
    {
      name: 'Android',
      logo: 'https://cdn.worldvectorlogo.com/logos/android.svg',
      description: 'Mobile operating system',
      category: 'OS'
    },

    // Other Technologies
    {
      name: 'Git',
      logo: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
      description: 'Version control system',
      category: 'Tools'
    },
    {
      name: 'GraphQL',
      logo: 'https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg',
      description: 'API query language',
      category: 'API'
    },
    {
      name: 'TensorFlow',
      logo: 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg',
      description: 'Machine learning framework',
      category: 'AI/ML'
    }
  ];

  // Group technologies by category
  const categories = [
    'Language', 'Frontend', 'Backend', 'Database', 
    'DevOps', 'Cloud', 'OS', 'Tools', 'API', 'AI/ML'
  ];

  const handleCardClick = (techName) => {
    navigate(`/quiz/${techName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="tests-page">
      <h1 className="page-title">Technology Stack</h1>
      
      {categories.map(category => {
        const categoryTechs = technologies.filter(tech => tech.category === category);
        if (categoryTechs.length === 0) return null;
        
        return (
          <div key={category} className="technology-section">
            <h2 className="category-title">{category}</h2>
            <div className="technology-grid">
              {categoryTechs.map((tech, index) => (
                <div 
                  key={index} 
                  className="tech-card"
                  onClick={() => handleCardClick(tech.name)}
                >
                  <div className="card-header">
                    <img src={tech.logo} alt={`${tech.name} logo`} className="tech-logo" />
                    <h3 className="tech-name">{tech.name}</h3>
                  </div>
                  <p className="tech-description">{tech.description}</p>
                  <span className="tech-category">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tests;