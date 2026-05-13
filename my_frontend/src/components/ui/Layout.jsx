import React from 'react';

export const PageBackground = ({ dark, t }) => {
  if (!dark) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div style={{ position:"absolute",top:"-15%",left:"-8%",width:"55vw",height:"55vw",borderRadius:"50%",background:`radial-gradient(circle,${t.glowB}14 0%,transparent 65%)` }} />
      <div style={{ position:"absolute",top:"35%",right:"-12%",width:"45vw",height:"45vw",borderRadius:"50%",background:`radial-gradient(circle,${t.glowA}10 0%,transparent 65%)` }} />
      <div style={{ position:"absolute",bottom:"-8%",left:"25%",width:"40vw",height:"40vw",borderRadius:"50%",background:`radial-gradient(circle,${t.glowB}08 0%,transparent 65%)` }} />
      <div style={{ position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.glowA}04 1px,transparent 1px),linear-gradient(90deg,${t.glowA}04 1px,transparent 1px)`,backgroundSize:"64px 64px" }} />
    </div>
  );
};