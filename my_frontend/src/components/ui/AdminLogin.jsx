import React, { useState } from "react";
import api from "@/api/axios"; 

import { themes } from "@/lib/theme";
import { Btn } from "./Btn";
import { PageBackground } from "./Layout";

const AdminLogin = ({ dark = true }) => {
  const t = dark ? themes.dark : themes.light;
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [status, setStatus] = useState({ loading: false, error: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "" });

    try {
      const res = await api.post("/admin-login", formData);
      if (res.data.ok) {
        window.location.href = "http://localhost:5000/admin";
      }
    } catch (err) {
      setStatus({ 
        loading: false, 
        error: err.response?.status === 401 ? "Invalid credentials" : "Server error" 
      });
    }
  };

  return (
    <div className={`relative min-h-screen flex items-center justify-center p-6 ${t.page}`}>
      <PageBackground dark={dark} t={t} />

      <div className={`relative z-10 w-full max-w-md p-8 rounded-sm border ${t.surfaceGlow} ${t.surface} shadow-2xl`}>
        <div className="mb-8 text-center">
          <span className={`text-[10px] uppercase tracking-[0.3em] font-bold ${t.neonText}`}>
            System Access
          </span>
          <h2 className="text-2xl font-light mt-2 tracking-tight">Admin Authentication</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={`block text-[10px] uppercase tracking-widest mb-2 ${t.muted}`}>
              Identification
            </label>
            <input
              type="text"
              required
              className={`w-full bg-[#050B0B] border ${t.line} px-4 py-3 text-sm focus:border-[#14C2C2] outline-none transition-colors`}
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>

          <div>
            <label className={`block text-[10px] uppercase tracking-widest mb-2 ${t.muted}`}>
              Access Code
            </label>
            <input
              type="password"
              required
              className={`w-full bg-[#050B0B] border ${t.line} px-4 py-3 text-sm focus:border-[#14C2C2] outline-none transition-colors`}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          {status.error && (
            <p className="text-red-400 text-[11px] uppercase tracking-tighter text-center">
              {status.error}
            </p>
          )}

          <Btn 
            type="submit" 
            theme={t} 
            className="w-full" 
            disabled={status.loading}
          >
            {status.loading ? "Verifying..." : "Initialize Session"}
          </Btn>
        </form>

        <div className={`mt-8 pt-6 border-t ${t.line} text-center`}>
          <p className={`text-[9px] uppercase tracking-[0.2em] ${status.loading ? 'animate-pulse' : t.soft}`}>
            Henk Lab // Terminal v2.6.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;