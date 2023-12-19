import styled from '@emotion/styled';
export const LoaderContainer = styled.div`
    display:flex; 
    flex-direction: column;
    align-items: center; 
    text-align: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.darkblue};
        
    &>svg {
        color:  ${({ theme }) => theme.colors.blue};
        height: 10; 
width: 10;  
    
    }

`
export const Info = styled.p`
    font-size: 20px; 
    text-align: center;    
`