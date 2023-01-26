import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { ButtonSubmit } from './components/button-submit/button-submit';

function App() {
    return (
        <div className={styles.App}>
            <form>
                <Label htmlFor={'name'}>Name</Label>
                <Input id={'name'} name={'name'} />
                <Label htmlFor={'email'}>Email</Label>
                <Input id={'email'} name={'email'} />
                <Label htmlFor={'message'}>Message</Label>
                <Input id={'message'} name={'message'} />
                <ButtonSubmit>Submit</ButtonSubmit>
            </form>
        </div>
    );
}

export default App;
