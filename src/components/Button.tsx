import style from './Button.module.scss';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

// TODO: 반복문으로 변경 또는 최적화
export const Button = {
  Primary(props: ButtonProps) {
    const { onClick, label, disabled } = props;
    return (
      <button type="button" className={style.primary} onClick={onClick} disabled={disabled}>
        {label}
      </button>
    );
  },
  Secondary(props: ButtonProps) {
    const { onClick, label, disabled } = props;
    return (
      <button type="button" className={style.secondary} onClick={onClick} disabled={disabled}>
        {label}
      </button>
    );
  },
  Danger(props: ButtonProps) {
    const { onClick, label, disabled } = props;
    return (
      <button type="button" className={style.danger} onClick={onClick} disabled={disabled}>
        {label}
      </button>
    );
  },
};

Button.Primary.defaultProps = {
  disabled: false,
  onClick: () => {},
};

Button.Secondary.defaultProps = {
  disabled: false,
  onClick: () => {},
};

Button.Danger.defaultProps = {
  disabled: false,
  onClick: () => {},
};
