import { StepsDesktop, StepsMobile , Step1Form, Step2Form, Step3Form, Step4Form, ThankYou } from './components';
import styled from 'styled-components'
import {useGlobalContext} from './context';

function App() {
  const {step} = useGlobalContext();

  return (
    <Wrapper>
      <div className="container">
        <StepsDesktop className="steps"/>
        {step === 1 && <Step1Form />}
        {step === 2 && <Step2Form />}
        {step === 3 && <Step3Form />}
        {step === 4 && <Step4Form />}
        {step === 5 && <ThankYou />}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  min-height: 100vh;
  place-items: center;

  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    background-color: var(--White);
    padding: 1rem 0 1rem 1rem;
    border-radius: 1rem;
    height: 600px;
    width: 960px;
  }

  @media (max-width: 600px){

    .container {
      grid-template-columns: 1fr;
      width: 90vw;
      height: 500px;
      padding: 0 2rem;
    }

  }
`;

export default App;