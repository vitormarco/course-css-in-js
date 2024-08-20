import { getHeight, getWidth } from './helper';
import styles from './Spacer.module.css'

interface ISpacerProps {
  size: number,
  axis?: 'vertical' | 'horizontal'
}

const Spacer = ({ size, axis = 'vertical' }: ISpacerProps) => {
  return (
    <span 
      className={styles.spacer} 
      style={{
        '--width': `${getWidth({ axis, size})}px`,
        '--min-width': `${getWidth({ axis, size})}px`,
        '--height': `${getHeight({ axis, size })}px`,
        '--min-height': `${getHeight({ axis, size })}px`,
      } as React.CSSProperties} 
    />
  );
}

export default Spacer;