import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { ButtonSubmit } from './components/button-submit/button-submit';
import { FormRow } from './components/form-row/form-row';

function App() {
    return (
        <div className={styles.App}>
            <h1>Contact Us</h1>
            <form>
                <FormRow>
                    <Label htmlFor={'name'}>
                        Name
                        <Input id={'name'} name={'name'} />
                    </Label>
                </FormRow>
                <FormRow>
                    <Label htmlFor={'email'}>
                        Email
                        <Input id={'email'} name={'email'} />
                    </Label>
                </FormRow>
                <FormRow>
                    <Label htmlFor={'message'}>
                        Message
                        <Input id={'message'} name={'message'} />
                    </Label>
                </FormRow>
                <FormRow>
                    <ButtonSubmit>Submit</ButtonSubmit>
                </FormRow>
            </form>
        </div>
    );
}

export default App;
