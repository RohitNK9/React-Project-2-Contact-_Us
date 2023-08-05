import styles from "./Button.module.css";

const Button = ({icon,text,isoutline,...rest}) => {
  return (
    <button {...rest} className={isoutline ? styles.outline_btn :styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button