 export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  export const SKILLS = [
    { name: 'React', type: 'core' },
    { name: 'TypeScript', type: 'core' },
    { name: 'JavaScript (ES6+)', type: 'core' },
    { name: 'HTML5 & CSS3', type: 'core' },
  
    { name: 'Tailwind CSS', type: 'ui' },
    { name: 'Framer Motion', type: 'ui' },
    { name: 'Lucide Icons', type: 'ui' },
    { name: 'Sonner (Toasts)', type: 'ui' },
    { name: 'Responsive Design', type: 'ui' },
    { name: 'Recharts', type: 'data' },
    { name: 'Context API', type: 'data' },
    { name: 'Git & GitHub', type: 'workflow' },
    { name: 'Vite', type: 'workflow' },
    ];