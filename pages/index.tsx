import * as React from 'react';
import Link from 'next/link';

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
    </>
  );
};

export default App;
