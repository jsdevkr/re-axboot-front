import * as React from 'react';
import Link from 'next/link';

import styled from '@emotion/styled';

const Button = styled.button`
  color: turquoise;
  font-size: 12px;
  border-radius: 5px;
`;
const SC = {
  Button,
};

interface IProps {}
const App: React.FC<IProps> = () => {
  return (
    <>
      <div>INDEX CONTENT</div>
      <div>INDEX CONTENT</div>
      <div>INDEX CONTENT</div>
      <div>INDEX CONTENT</div>
      <div>INDEX CONTENT</div>
      <div>INDEX CONTENT</div>
      <div>INDEX CONTENT</div>
      <div>
        <Link href="/page1">
          <a>Page1</a>
        </Link>
      </div>

      <SC.Button>Button</SC.Button>
    </>
  );
};

export default App;
