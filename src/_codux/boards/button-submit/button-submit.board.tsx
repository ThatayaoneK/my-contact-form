import { createBoard } from '@wixc3/react-board';
import { ButtonSubmit } from '../../../components/button-submit/button-submit';

export default createBoard({
    name: 'ButtonSubmit',
    Board: () => <ButtonSubmit />
});
