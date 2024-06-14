import { cn } from '../sidebar/Utils';

const TechCard = ({ title, classaName, tech }) => {
  return (
    <div className="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md hover:shadow-xl bg-[#132a43] ">
      <div className="text-primary-t text-center font-medium text-lg tracking-wider">
        {title}
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center ">
        {tech.map((item, i) => (
          <div
            key={i}
            className={cn(
              'rounded-md bg-body text-xs text-primary-t p-2',
              item === 'HTML5' && 'border border-red-500/60',
              item === 'CSS' && 'border border-blue-500/60',
              item === 'Javascript' && 'border border-amber-500/60',
              item === 'React Js' && 'border border-blue-500/60',
              item === 'Tailwind' && 'border border-sky-500/60',
              item === 'Next Js 13' && 'border border-black/60',
              item === 'Gatsby Js' && 'border border-pink-500/60',
              item === 'Node Js' && 'border border-green-500/60',
              item === 'Express Js' && 'border border-gray-500/60',
              item === 'Next Auth' && 'border border-purple-500/60',
              item === 'Socket IO' && 'border border-rose-500/60',
              item === 'MongoDB' && 'border border-emerald-500/60',
              item === 'Docker' && 'border border-blue-500/60',
              item === 'Kubernetes' && 'border border-blue-500/60',
              item === 'GIT' && 'border border-orange-500/60',
              item === 'Postman' && 'border border-amber-500/60',
              item === 'Linux OS' && 'border border-purple-500/60',
              item === 'Canva' && 'border border-sky-300/60',
              item === 'Adobe XD' && 'border border-rose-300/60',
             
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
