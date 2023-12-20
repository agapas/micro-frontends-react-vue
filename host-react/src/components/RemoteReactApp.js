import React, { useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const RemoteReactApp = () => {
  const ref = useRef(null);
  const { theme } = useOutletContext();

  useEffect(() => {
    /*
      // using IFFE
      (async () => {
        try {
          const { mount } = await import("rr/RemoteReactApp");
          mount(ref.current, { theme })
        } catch (err) {
          console.log(err);
        }
      })();
    */

    // an old way, but it looks shorter and more readable
    import("rr/RemoteReactApp")
      .then(({ mount }) => mount(ref.current, { theme }))
      .catch((err) => console.log(err));
  }, []);

  return <div ref={ref}></div>;
};

export default RemoteReactApp;
