import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="center">
      <p>welcome to kingpong</p>
    </div>
  );
}
