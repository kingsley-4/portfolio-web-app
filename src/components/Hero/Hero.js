import    React  from   'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



export default function Hero() {
  
  return (
  
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My profile page 👍
        </SectionTitle>
        <SectionText>
        My name is Isaac Kingsley, I am a web developer and Database administrator.  
        </SectionText>
        
        <Button onClick={() => window.location="https://kingsleyco420@gmail.com"}> 
         Contact Me 
           </Button>
       
      </LeftSection>
    </Section>
  
  )
  



}
