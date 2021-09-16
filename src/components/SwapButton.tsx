import { useState } from "react";

export const SwapButton = (props: {change: (text: string) => void}): JSX.Element => {
  const [active, setActive] = useState<boolean>(true);

  const swapper = () => {
    if (active) {
      props.change("Old prompt!!");
    } else {
      props.change("New Prompt!!!");
    }
    setActive(!active)
  }

  return <button onClick={() => swapper()}>Swap</button>
}