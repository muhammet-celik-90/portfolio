'use client'

import * as React from "react";
import { motion } from "framer-motion";

export interface ITemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: ITemplateProps) {
  return (
    <motion.div 
    initial={{ opacity: 0, translateY: "30" }} 
    animate={{ opacity: 1, translateY: "0" }}>
      {children}
    </motion.div>
  );
}
