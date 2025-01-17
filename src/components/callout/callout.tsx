import type { PropsWithChildren } from 'react';
import { variants, type CalloutVariants } from './callout-variants';

type Calloutprops = PropsWithChildren<CalloutVariants & { title: string }>;

export const Callout = ({ children, title, variant }: Calloutprops) => {
  return (
    <div className={variants({ variant })}>
      <h2 className="font-semibold">{title}</h2>
      <p>{children}</p>
    </div>
  );
};
