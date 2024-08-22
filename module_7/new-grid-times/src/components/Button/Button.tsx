import styles from './Button.module.css'

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button = ({ children, ...delegated }: IButtonProps) => {
  return <button {...delegated} className={`${styles.button} ${delegated?.className}`}>{children}</button>
}

export default Button;