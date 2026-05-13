import React, { useState, useLayoutEffect, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers3, Menu, X, ArrowUpRight } from "lucide-react";
import { Btn } from "./Btn";
import { Link } from "react-router-dom";
// import {navLinks} from "../../lib/constants/navLinks";
import api from "@/api/axios";


export function Header({ dark, setMode, t }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navLinks, setNavLinks] = useState([]);

  // const navLinks = ["Capabilities", "Projects", "Process", "Contact"];


  useEffect(() => {
    api.get("/nav")
      .then(res => setNavLinks(res.data))
      .catch(err => console.error("Nav fetch error:", err));
  }, []);

useLayoutEffect(() => {
  if (!isMenuOpen) return; 

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  const originalStyle = document.body.style.overflow;
  const originalPadding = document.body.style.paddingRight;

  document.body.style.overflow = 'hidden';
  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }

  return () => {
    document.body.style.overflow = originalStyle;
    document.body.style.paddingRight = originalPadding;
  };
}, [isMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-2xl transition-colors duration-500 ${t.header}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        
       
        <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <div 
            className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border lf-noise lf-scanlines overflow-hidden ${t.surfaceGlow}`}
            style={{ boxShadow: dark ? `0 0 16px ${t.glowA}25` : "none" }}
          >
            <Layers3 className={`relative z-10 h-4 w-4 ${t.neonText}`} />
          </div>
          <div className="lf-mono">
            <div className="text-[9px] tracking-[0.45em] uppercase opacity-40">HENK</div>
            <div className={`text-[11px] tracking-[0.35em] font-medium ${t.neonText}`}>LAB</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((n) => (
            <Link 
              key={n.id} 
              to={n.path}
              className={`lf-mono lf-navlink text-[10px] tracking-[0.22em] uppercase transition-colors duration-200 ${t.muted} hover:text-white`}
            >
              {n.name}
            </Link>
          ))}
        </nav>

        
        <div className="flex items-center gap-3">
          
          <button 
            onClick={() => setMode(m => m === "dark" ? "light" : "dark")}
            className={`hidden sm:block lf-mono rounded-sm border px-3 py-2 text-[10px] tracking-widest uppercase transition-all ${t.secondary}`}
          >
            {dark ? "◑ Light" : "◐ Dark"}
          </button>

          
          <button 
            className={`md:hidden p-2 transition-colors ${t.muted} hover:text-white`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </AnimatePresence>
          </button>

          
          <div className="hidden md:block">
            <Btn className={t.accent} theme={t}>
              Start a conversation <ArrowUpRight className="ml-2 h-3 w-3" />
            </Btn>
          </div>
        </div>
      </div>

      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`overflow-hidden md:hidden border-t ${t.header}`}
          >
            <nav className="flex flex-col p-8 gap-8">
            {navLinks.map((n, i) => (
              <Link
                key={n.id}
                to={n.path}
                onClick={() => setIsMenuOpen(false)}
                className={`group flex items-center transition-colors ${t.muted} hover:text-white`}
              >
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center"
                >
                  <span className="lf-mono mr-4 text-[9px] opacity-30">0{i + 1}</span>
                  <span className="lf-mono text-[11px] tracking-[0.3em] uppercase">
                    {n.name}
                  </span>
                </motion.div>
              </Link>
            ))}
              
              <motion.div 
                initial={{ scaleX: 0 }} 
                animate={{ scaleX: 1 }} 
                className={`h-[1px] w-full ${t.line} origin-left`} 
              />

              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => {
                  setMode(m => m === "dark" ? "light" : "dark");
                  setIsMenuOpen(false);
                }}
                className={`lf-mono text-left text-[10px] tracking-[0.25em] uppercase ${t.neonText}`}
              >
                {dark ? "◑ Switch to Light" : "◐ Switch to Dark"}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}