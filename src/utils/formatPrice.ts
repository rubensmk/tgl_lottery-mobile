/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
export const formatPrice = (value: number) => {
  return `R$${value.toFixed(2)}`;
};
