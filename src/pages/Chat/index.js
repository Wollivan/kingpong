import React, { useEffect } from "react";

export default function Chat() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="center">
      <p>chat feature coming soon</p>
    </div>
  );
}
