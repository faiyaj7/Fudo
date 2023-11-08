"use client";
import React, { useEffect, useState } from "react";

const HydrationAvoid = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <>{children}</>;
};

export default HydrationAvoid;
