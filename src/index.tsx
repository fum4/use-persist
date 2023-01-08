import React from 'react';

import usePersist, { PersistOptions } from './usePersist';

const configurePersist = (options: ConfigOptions) => {
  const Persist = (props: PersistProps): null => {
    usePersist({ ...options, ...props });
    return null;
  };

  return {
    Persist,
    usePersist: (
      values: Record<string, any>,
      _options: ConfigOptions,
    ) => usePersist({ ...options, ..._options, values }),
  };
};

export type ConfigOptions = Omit<PersistOptions, 'values'>;
export type PersistProps = PersistOptions;
export type { PersistOptions };

export default configurePersist;
