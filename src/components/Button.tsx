import style from './Button.module.scss';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface DefaultButtonProps extends ButtonProps {
  name: string;
}

function DefaultButton(props: DefaultButtonProps) {
  const {
    onClick, label, disabled = false, name,
  } = props;

  return (
    <button type="button" className={style[name]} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

// TODO: 반복문으로 변경 또는 최적화
const Button = {
  Primary(props: ButtonProps) {
    return <DefaultButton {...props} name="primary" />;
  },
  Secondary(props: ButtonProps) {
    return <DefaultButton {...props} name="secondary" />;
  },
  Danger(props: ButtonProps) {
    return <DefaultButton {...props} name="danger" />;
  },
};

export default Button;
