import * as React from 'react';

export interface IProjectCardTitleProps {
    children?: React.ReactNode;
}

export default function ProjectCardTitle ({children}: IProjectCardTitleProps) {
  return (
    <h2 className="card-title">{children}</h2>
  );
}
