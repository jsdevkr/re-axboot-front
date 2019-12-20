import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ConfigContext } from "../store/initialConfig";

interface IProps {}
const Example: React.FC<IProps> = () => {
  const config = useContext(ConfigContext);
  return (
    <Wrap>
      Card Wrap Content
      <div>
        config: {config.height}, {config.width}
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  font-size: 20px;
`;
export default Example;
