import React, { useRef, useEffect } from "react";

const RemoteReactApp = () => {
  const ref = useRef(null);

  useEffect(async () => {
    const { mount } = await import("rr/RemoteReactApp");
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default RemoteReactApp;
