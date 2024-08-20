type WidthHeightType = {
  axis?: 'horizontal' | 'vertical'
  size: number
}

export const getHeight = ({ axis, size }: WidthHeightType) => {
  return axis === 'horizontal' ? 1 : size;
}

export const getWidth = ({ axis, size }:WidthHeightType) => {
  return axis === 'vertical' ? 1 : size
}