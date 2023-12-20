import {ThreeDots } from 'react-loader-spinner';
import {
    LoaderContainer,
    Info,
} from './Loader.styled';
function Loader( ) {
    return (
        <LoaderContainer>
            <ThreeDots
                color='#6495ED'
                height="50"
                width="50"
                radius="6"
            />            
        </LoaderContainer>         
    )
}

export default Loader;