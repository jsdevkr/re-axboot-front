import * as React from 'react';
import Link from 'next/link';

interface IProps {}
const Page1: React.FC<IProps> = () => {
  return (
    <>
      <div>Page1 CONTENT</div>
      <div>
        <Link href="/">
          <a>Index</a>
        </Link>
      </div>
    </>
  );
};

export default Page1;
