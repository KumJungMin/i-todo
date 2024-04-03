import style from './Button.module.scss';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  action?: () => void;
}

// TODO: 반복문으로 변경 또는 최적화
export const Button = {
  Primary: function (props: ButtonProps) {
    return (
      <button type="button" className={style.primary} onClick={props.action} disabled={props.disabled}>
        {props.label}
      </button>
    );
  },
  Secondary: function (props: ButtonProps) {
    return (
      <button type="button" className={style.secondary} onClick={props.action} disabled={props.disabled}>
        {props.label}
      </button>
    );
  },
  Danger: function (props: ButtonProps) {
    return (
      <button type="button" className={style.danger} onClick={props.action} disabled={props.disabled}>
        {props.label}
      </button>
    );
  },
};
