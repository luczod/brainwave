import { ReactElement } from 'react';
import SectionSvg from '../assets/svg/SectionSvg';
import { twMerge } from 'tailwind-merge';

type TSection = {
  className: string;
  id: string;
  crosses: boolean;
  crossesOffset: string;
  customPaddings: boolean;
  children: ReactElement[] | ReactElement;
};

function Section({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}: Partial<TSection>) {
  return (
    <section
      id={id}
      data-padding={!!customPaddings}
      data-crosses={!!crosses}
      className={twMerge(
        'relative data-[padding=false]:py-10 data-[padding=false]:lg:py-16 data-[padding=false]:xl:py-20 data-[crosses=true]:lg:py-32 data-[crosses=true]:xl:py-40',
        className,
      )}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={twMerge(
              'hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1  pointer-events-none lg:block xl:left-10 xl:right-10',
              crossesOffset,
            )}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </section>
  );
}

export default Section;
