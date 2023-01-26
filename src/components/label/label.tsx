import styles from './label.module.scss';
import classNames from 'classnames';

export interface LabelProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
    htmlFor?: string;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-labels-and-templates
 */
export const Label = ({ className, children, htmlFor }: LabelProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <label htmlFor={htmlFor} className={styles.label}>
                {children}
            </label>
        </div>
    );
};
