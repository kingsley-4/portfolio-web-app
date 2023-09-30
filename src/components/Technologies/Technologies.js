import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPython  } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end To Design and Data analysis
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js<br />
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiPython  size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experience  <br />
            Data analytics and  visualization with <br />
            Numpy<br />
            Pandas <br />
            Matplotlib etc.<br />
            Also experience with Spreadsheet and PowerBI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    
    </List>
        
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
