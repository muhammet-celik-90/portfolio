'use client'

import * as React from "react";
import { motion } from "framer-motion";

export interface ITemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: ITemplateProps) {
  return (
    <motion.div 
    initial={{ opacity: 0, translateX: "-100" }} 
    animate={{ opacity: 1, translateX: "0" }}>
      {children}
    </motion.div>
  );
}
