export const required = value =>
  typeof value === 'boolean'
    ? undefined
    : value
      ? undefined
      : 'Campo requerido';

export const mix = (...args) => (value = '') =>
  args.reduce((a, b) => b(value) || a, undefined);
