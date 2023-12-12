import React, { useRef, useEffect } from "react";

const RemoteVueApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    import("rv/RemoteVueApp")
      .then(({ mount }) => mount(ref.current))
      .catch((err) => console.log(err));
  }, []);

  return <div ref={ref}></div>;
};

export default RemoteVueApp;
