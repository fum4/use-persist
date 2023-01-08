export interface PersistOptions {
  key?: string;
  values: Values;
  setValues(values: Values): void;
  setToStorage?(key: string, values: string): void;
  getFromStorage?(key: string): any;
  encode?(values: Values): any;
  decode?(values: string): any;
  include?: string[];
  exclude?: string[];
}

export type ConfigOptions = Omit<PersistOptions, 'values'>;
export type PersistProps = PersistOptions;
export type Values = Record<string, any>;
