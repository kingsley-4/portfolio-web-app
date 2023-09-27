
import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const GridContainer = styled.section`
display: grid;
h-screen;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;

column-gap: 6rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  grid: place-items;
  h-screen
  @media ${(props) => props.theme.breakpoints.sm} {
    
  }
`
export const BlogWell = styled.div`
border: border-green-400 border-t-4  rounded-lg p-5shadow-lg;
  
  @media ${(props) => props.theme.breakpoints.sm} {
  
  }
`;