import * as React from "react";
import {render} from "react-dom";

interface AppProps {
  message: string
}

const App: React.FunctionComponent<AppProps> = props => (<>{props.message}</>);

render(<App message={"Hello floo!"} />, document.getElementById("root"));
