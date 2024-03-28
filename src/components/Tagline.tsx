import { twMerge } from 'tailwind-merge';
import brackets from '../assets/svg/Brackets';
import { TCSSClass } from '../API';

type TProps = TCSSClass & {
  children: string;
};

const TagLine: React.FC<TProps> = ({ className, children }) => {
  return (
    <div className={twMerge('tagline flex items-center', className)}>
      {brackets('left')}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets('right')}
    </div>
  );
};

export default TagLine;
