import { StepsDesktop, Step1Form, Step2Form, Step3Form, Step4Form, ThankYou } from './components';
import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <div className="container">
        <StepsDesktop />
        {/* <Step1Form /> */}
        {/* <Step2Form /> */}
        {/* <Step3Form /> */}
        <Step4Form />
        {/* <ThankYou /> */}
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
