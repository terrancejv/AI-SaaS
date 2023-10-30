"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("ff98a9d7-842f-4bcc-b061-7f27c56d86a2")
  }, []);

  return null;
}