"use client"

import React from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Plus, Star } from "lucide-react"

/**
 * TripCard - Reusable component for trip previews
 * TASK FRT-TK-013: Trip Card Component: Visual status (Upcoming, Active, Past)
 */
export const TripCard = ({ trip }) => {
  const getStatusBadge = (status) => {
    const normalizedStatus = status?.toLowerCase()
    switch (normalizedStatus) {
      case "active":
      case "en curso":
        return <span className="bg-brand-teal/20 text-brand-teal text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-teal/30 backdrop-blur-md">En curso</span>
      case "upcoming":
      case "próximo":
        return <span className="bg-brand-sun/20 text-brand-sun text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-sun/30 backdrop-blur-md">Próximamente</span>
      case "past":
      case "finalizado":
        return <span className="bg-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">Finalizado</span>
      default:
        return <span className="bg-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">{status || 'Planeado'}</span>
    }
  }

  const formatDateRange = (start, end) => {
    if (!start) return "Fecha por definir"
    const startObj = new Date(start)
    const options = { day: 'numeric', month: 'short' }
    if (!end) return startObj.toLocaleDateString('es-ES', options)
    
    const endObj = new Date(end)
    return `${startObj.toLocaleDateString('es-ES', options)} - ${endObj.toLocaleDateString('es-ES', options)}`
  }

  return (
    <Card className="glass-card group flex flex-col border-white/5 p-0 overflow-hidden h-full">
      {/* Trip Image Header */}
      <div className="relative h-48 overflow-hidden bg-brand-night">
        <img 
          src={trip.image_url || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop"} 
          alt={trip.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" 
        />
        <div className="absolute top-4 left-4 z-10">
          {getStatusBadge(trip.status)}
        </div>
        <div className="absolute top-4 right-4 z-10">
          <Button variant="glass" size="icon" className="w-10 h-10 rounded-xl hover:text-brand-coral border-white/10 transition-colors">
            <Star className="w-5 h-5" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-night via-transparent to-transparent opacity-60" />
      </div>

      {/* Trip Content */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-coral transition-colors line-clamp-2 min-h-[4rem]">
          {trip.name}
        </h3>
        
        <div className="space-y-2 font-body flex-grow">
          <div className="flex items-center gap-3 text-slate-400 text-sm">
            <div className="p-2 rounded-lg bg-white/5"><Calendar className="w-4 h-4 text-brand-sun" /></div>
            <span>{formatDateRange(trip.start_date, trip.end_date)}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 text-sm">
            <div className="p-2 rounded-lg bg-white/5"><MapPin className="w-4 h-4 text-brand-teal" /></div>
            <span className="line-clamp-1">{trip.destination || "Destino por definir"}</span>
          </div>
        </div>

        <Button variant="outline" className="w-full h-12 mt-4 rounded-xl border-white/10 bg-white/5 text-white hover:bg-brand-coral hover:border-brand-coral hover:text-white transition-all group/btn font-body">
          Ver Detalles
          <Plus className="ml-2 w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
        </Button>
      </div>
    </Card>
  )
}
