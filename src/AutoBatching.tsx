import { FC, useEffect, useRef, useState } from "react";

const AutoBatching: FC = () => {
  const [count, setCount] = useState(1);
  const [flag, setFlag] = useState(false);
  const ref = useRef(0);
  ref.current += 1;
  console.log(`rendering ${ ref.current } times`);

  useEffect(() => {
    setTimeout(() => {
      setCount((c) => c + 1);
      setFlag((f) => !f);

      // flushSync(() => {
      //   setFlag((f) => !f);
      // });
    }, 1000);
  }, []);

  return <h3>Automatic Batching</h3>;
};

export default AutoBatching;
