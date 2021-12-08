import React from 'react';
import InputAdornments from './InputAdornments';
import PasswordInput from './PasswordInput';
import CustomAccordion from './CustomAccordion';
import CollapsingBox from './CollapsingBox';

function App() {
  return (
    <main>
      <section>
        <h3>Password input with show / hide icon</h3>
        <PasswordInput />
      </section>
      <section>
        <h3>Custom Accordion</h3>
        <CustomAccordion />
      </section>
      <section>
        <h3>Collapsing Box</h3>
        <CollapsingBox />
      </section>
    </main>
  );
}

export default App;