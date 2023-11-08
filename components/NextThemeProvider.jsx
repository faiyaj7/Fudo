"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import HydrationAvoid from "./HydrationAvoid";
const NextThemeProvider = ({ children }) => {
  return (
    <HydrationAvoid>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </HydrationAvoid>
  );
};

export default NextThemeProvider;
