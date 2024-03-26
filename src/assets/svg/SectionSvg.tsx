import { twMerge } from 'tailwind-merge';
import PlusSvg from './PlusSvg';

type TProps = {
  crossesOffset?: string;
};

const SectionSvg = ({ crossesOffset }: TProps) => {
  return (
    <>
      <PlusSvg
        className={twMerge(
          'hidden absolute -top-[0.3125rem] left-[1.5625rem] pointer-events-none lg:block xl:left-[2.1875rem]',
          crossesOffset,
        )}
      />

      <PlusSvg
        className={twMerge(
          'hidden absolute -top-[0.3125rem] right-[1.5625rem] ${crossesOffset} pointer-events-none lg:block xl:right-[2.1875rem]',
          crossesOffset,
        )}
      />
    </>
  );
};

export default SectionSvg;
