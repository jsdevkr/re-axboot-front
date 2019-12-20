import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { DispatchConfigContext, ConfigContext } from "store/initialConfig";
import { ConfigActionType } from "common/@interface";

interface IProps {}
const App: React.FC<IProps> = () => {
  const dispatchConfig = useContext(DispatchConfigContext);
  const config = useContext(ConfigContext);

  return <>DASHBOARD</>;
};

export default App;
