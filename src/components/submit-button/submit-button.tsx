import styles from './submit-button.module.scss';
import classNames from 'classnames';

export interface SubmitButtonProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-submit-buttons-and-templates
 */
export const SubmitButton = ({ className, children }: SubmitButtonProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button>Submit</button>
        </div>
    );
};
