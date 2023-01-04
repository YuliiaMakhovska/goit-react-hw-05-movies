import { RotatingLines } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
    return (
        <LoaderBox>
            <RotatingLines height={80} width={80} strokeColor="purple" color="#3f51b5" />
        </LoaderBox>
    )
}
export default Loader;