"use client"

import { ShoppingBag, CreditCard, BarChart3 } from "lucide-react"

export function POSLogo() {
  return (
    <div className="relative">
      {/* Círculo de fondo con gradiente */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 shadow-2xl flex items-center justify-center relative overflow-hidden">
        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full" />

        {/* Círculo interno */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-inner">
          {/* Ícono principal */}
          <ShoppingBag className="h-8 w-8 text-white drop-shadow-lg" strokeWidth={2.5} />

          {/* Íconos secundarios flotantes */}
          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
            <CreditCard className="h-3 w-3 text-white" strokeWidth={2} />
          </div>

          <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg">
            <BarChart3 className="h-3 w-3 text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Partículas decorativas */}
        <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-white/60 animate-pulse" />
        <div className="absolute bottom-3 right-3 w-1 h-1 rounded-full bg-white/40 animate-pulse delay-300" />
        <div className="absolute top-4 right-2 w-0.5 h-0.5 rounded-full bg-white/50 animate-pulse delay-700" />
      </div>

      {/* Sombra externa adicional */}
      <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl scale-110 -z-10" />

      {/* Anillo exterior animado */}
      <div className="absolute inset-0 rounded-full border-2 border-emerald-300/30 animate-ping" />
    </div>
  )
}