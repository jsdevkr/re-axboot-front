import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { DispatchConfigContext, ConfigContext } from "../store/initialConfig";
import { ConfigActionType } from "../common/@interface";
import Card from "../components/Card";

const Button = styled.button`
  color: turquoise;
  font-size: 12px;
  border-radius: 5px;
`;
const SC = {
  Button
};

interface IProps {}
const App: React.FC<IProps> = () => {
  const dispatchConfig = useContext(DispatchConfigContext);
  const config = useContext(ConfigContext);

  return (
    <>
      <Card></Card>
      <div>INDEX CONTENT</div>
      <div>
        <Link href="/page1">
          <a>Page1</a>
        </Link>
      </div>

      <SC.Button
        onClick={() => {
          dispatchConfig({ type: ConfigActionType.SET_WIDTH, value: 800 });
        }}
      >
        Button
      </SC.Button>

      <div>
        <b>WIDTH</b> :{config.width}
      </div>
    </>
  );
};

export default App;
