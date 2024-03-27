import { twMerge } from 'tailwind-merge';
import { TCSSClass } from '../constants';
import TagLine from './Tagline';

type TProps = TCSSClass & {
  title?: string;
  text?: string;
  tag?: string;
};

const Heading: React.FC<TProps> = ({ className, title, text, tag }) => {
  return (
    <div className={twMerge('max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center', className)}>
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
