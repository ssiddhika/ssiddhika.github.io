import type { ReactNode } from 'react';

type SectionHeadingProps = {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  id?: string;
};

const SectionHeading = ({
  children,
  as: Tag = 'h2',
  className = '',
  id,
}: SectionHeadingProps) => {
  return (
    <Tag id={id} className={`section-heading ${className}`.trim()}>
      <span className="section-heading-star" aria-hidden="true">
        ✦
      </span>
      {children}
    </Tag>
  );
};

export default SectionHeading;
