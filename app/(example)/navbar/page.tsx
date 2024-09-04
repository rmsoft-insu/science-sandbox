"use client";

import { useState } from "react";
import { NavigationMenuDemo } from "./_components/navi";

const NavigationPage = () => {
  return (
    <div className="flex h-full max-h-full items-center justify-center bg-slate-200">
      <NavigationMenuDemo />
    </div>
  );
};

export default NavigationPage;
