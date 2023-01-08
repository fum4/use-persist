import usePersist, { PersistOptions } from './usePersist';

const configurePersist = (options: PersistOptions) => (values: any) => (
  usePersist({ ...options, values })
);

export type { PersistOptions };
export default configurePersist;
