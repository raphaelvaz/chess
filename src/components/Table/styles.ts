import styled from 'styled-components';


export const Container = styled.div`
    min-width: 320px;
    min-height: 320px;
    width: min(63vw, min(80vh, 560px));
    height: min(63vw, min(80vh, 560px));

    display:grid;
    grid-template-rows:repeat(8, auto);
    grid-template-columns:repeat(8, auto);
    justify-content: center;
`;