import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
padding: 2rem 0;

display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 2rem;
padding: 2rem 0;

@media (max-width: 767px) {
grid-template-columns: 1fr;
gap: 3rem;

padding: 2.5rem 0;
}

@media(min-widht: 1024px) {
grid-template-columns: repeat(4, 1fr);
gap: 4rem;
}
`;

export const List = ({children}) => {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}