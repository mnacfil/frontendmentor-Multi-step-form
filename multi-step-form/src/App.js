import { StepsDesktop, Step1Form, Step2Form, Step3Form, Step4Form, ThankYou } from './components';
import styled from 'styled-components'
import {useGlobalContext} from './context';

function App() {
  const {step} = useGlobalContext();
  return (
    <Wrapper>
      <div className="container">
        <StepsDesktop />
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
`;

export default App;