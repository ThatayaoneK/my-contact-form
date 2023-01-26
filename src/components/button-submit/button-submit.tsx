import styles from './button-submit.module.scss';
import classNames from 'classnames';

export interface ButtonSubmitProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}

export const ButtonSubmit = ({ className, children }: ButtonSubmitProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button>{children}</button>
        </div>
    );
};
