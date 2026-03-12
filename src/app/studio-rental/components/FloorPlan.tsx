'use client';
import React, { useState } from 'react';
import Image from "next/image";

interface Zone {
  id: string
  name: string
  dimensions: string
  image: string
}

export default function FloorPlan({ zones }: { zones: Zone[] }) {
  const [selectedZone, setSelectedZone] = useState<string | null>(null)
  const activeZone = zones.find(z => z.id === selectedZone) ?? null;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8 items-start">

        {/* LEFT COLUMN: THE MAP */}
        <div className="w-full lg:w-3/5 bg-white rounded-3xl p-4 border border-slate-200 shadow-sm overflow-hidden">
          <svg viewBox="0 0 600 820" className="w-full h-auto max-h-[70vh]">
            {/* CORRECTED POLYLINE: Covers the full L-tail including Reception */}
            <polyline
              points="5,5 595,5 595,815 218,815 218,505 5,505 5,5"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.5"
            />

            {/* Cyclorama */}
            <rect x="10" y="10" width="280" height="280" fill={selectedZone === 'zone_cyclorama' ? '#10B981' : '#F8F9FA'} stroke="#1A1A1A" strokeWidth="2" className="cursor-pointer transition-colors hover:fill-emerald-50" onClick={() => setSelectedZone('zone_cyclorama')} />
            <text x="150" y="150" textAnchor="middle" className="text-sm font-bold pointer-events-none fill-slate-700">Cyclorama</text>

            {/* Seating */}
            <rect x="10" y="295" width="85" height="119" fill={selectedZone === 'zone_seating_setup' ? '#10B981' : '#F8F9FA'} stroke="#1A1A1A" strokeWidth="2" className="cursor-pointer transition-all hover:fill-emerald-50 hover:stroke-emerald-500" onClick={() => setSelectedZone('zone_seating_setup')} />
            {/* Pantry & Equipment */}
            <rect x="10" y="419" width="102" height="76" fill={selectedZone === 'zone_pantry' ? '#10B981' : '#F8F9FA'} stroke="#1A1A1A" strokeWidth="2" className="cursor-pointer transition-all hover:fill-emerald-50 hover:stroke-emerald-500" onClick={() => setSelectedZone('zone_pantry')} />
            <rect x="117" y="419" width="102" height="76" fill={selectedZone === 'zone_equipment' ? '#10B981' : '#F8F9FA'} stroke="#1A1A1A" strokeWidth="2" className="cursor-pointer transition-all hover:fill-emerald-50 hover:stroke-emerald-500" onClick={() => setSelectedZone('zone_equipment')} />

            {/* Right Side Units */}
            <rect x="295" y="10" width="175" height="60" fill={selectedZone === 'zone_abstract_wall' ? '#10B981' : '#F8F9FA'} stroke="#1A1A1A" strokeWidth="2" className="cursor-pointer transition-all hover:fill-emerald-50 hover:stroke-emerald-500" onClick={() => setSelectedZone('zone_abstract_wall')} />
            <rect x="475" y="10" width="115" height="119" fill={selectedZone === 'zone_makeup' ? '#10B981' : '#F8F9FA'} stroke="#1A1A1A" strokeWidth="2" className="cursor-pointer transition-all hover:fill-emerald-50 hover:stroke-emerald-500" onClick={() => setSelectedZone('zone_makeup')} />
            <rect x="505" y="134" width="85" height="85" fill={selectedZone === 'zone_changing_room' ? '#10B981' : '#F8F9FA'} stroke="#1A1A1A" strokeWidth="2" className="cursor-pointer transition-all hover:fill-emerald-50 hover:stroke-emerald-500" onClick={() => setSelectedZone('zone_changing_room')} />
            <rect x="505" y="224" width="85" height="204" fill={selectedZone === 'zone_royal_setup' ? '#10B981' : '#F8F9FA'} stroke="#1A1A1A" strokeWidth="2" className="cursor-pointer transition-all hover:fill-emerald-50 hover:stroke-emerald-500" onClick={() => setSelectedZone('zone_royal_setup')} />
            <rect x="505" y="433" width="85" height="170" fill={selectedZone === 'zone_orange_niche_wall' ? '#10B981' : '#F8F9FA'} stroke="#1A1A1A" strokeWidth="2" className="cursor-pointer transition-all hover:fill-emerald-50 hover:stroke-emerald-500" onClick={() => setSelectedZone('zone_orange_niche_wall')} />

            {/* Bottom Tail */}
            <rect x="420" y="608" width="170" height="34" fill={selectedZone === 'zone_staircase' ? '#10B981' : '#F8F9FA'} stroke="#1A1A1A" strokeWidth="2" className="cursor-pointer transition-all hover:fill-emerald-50 hover:stroke-emerald-500" onClick={() => setSelectedZone('zone_staircase')} />
            <rect x="420" y="647" width="170" height="153" fill={selectedZone === 'zone_office' ? '#10B981' : '#F8F9FA'} stroke="#1A1A1A" strokeWidth="2" className="cursor-pointer transition-all hover:fill-emerald-50 hover:stroke-emerald-500" onClick={() => setSelectedZone('zone_office')} />
            <rect x="223" y="509" width="85" height="153" fill={selectedZone === 'zone_waiting' ? '#10B981' : '#F8F9FA'} stroke="#1A1A1A" strokeWidth="2" className="cursor-pointer transition-all hover:fill-emerald-50 hover:stroke-emerald-500" onClick={() => setSelectedZone('zone_waiting')} />

            {/* Floating Icons */}
            {[1, 2, 3, 4, 5, 6].map((num, i) => (
              <g key={`mb-${num}`} className="cursor-pointer" onClick={() => setSelectedZone(`zone_floating_${num}`)}>
                <circle
                  cx={num <= 3 ? 330 : 400}
                  cy={220 + (i % 3) * 50}
                  r="20"
                  fill={selectedZone === `zone_floating_${num}` ? '#10B981' : 'white'}
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray="4"
                />
                <text
                  x={num <= 3 ? 330 : 400}
                  y={220 + (i % 3) * 50}
                  textAnchor="middle"
                  dy=".3em"
                  className={`text-[8px] font-bold ${selectedZone === `zone_floating_${num}` ? 'fill-white' : 'fill-emerald-700'}`}
                >
                  MB{num}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* RIGHT COLUMN: DETAILS & LEGEND */}
        <div className="w-full lg:w-2/5 space-y-4 sticky top-4">
          <div className="bg-slate-900 text-white rounded-3xl shadow-lg overflow-hidden min-h-[400px]">
            {selectedZone ? (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                {/* IMAGE PREVIEW COMPONENT */}
                <div className="h-56 w-full bg-slate-800 relative">
                  {activeZone && (
                    <Image
                      src={activeZone.image}
                      alt={activeZone.name}
                      fill
                      sizes="(max-width:1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  )}
                  <div className="absolute bottom-4 left-4 bg-emerald-500 text-white text-[10px] px-2 py-1 rounded font-bold uppercase">
                    Live View
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Selected Zone</span>
                  <h3 className="text-2xl font-bold mt-1">{activeZone?.name}</h3>
                  <p className="text-slate-400 mt-2 italic">Dimensions: <span className="text-white not-italic">{activeZone?.dimensions}</span></p>

                  <div className="mt-6 flex flex-col gap-3">
                    <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold transition-all">
                      <a
                        href={`https://wa.me/919731741573?text=Hi, I'd like to book the ${activeZone?.name} setup at SoulFrame Studio`}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold transition-all block text-center"
                      >
                        Book {activeZone?.name}
                      </a>
                    </button>
                    <button onClick={() => setSelectedZone(null)} className="text-xs text-slate-500 hover:text-white transition-colors underline">
                      Return to Map
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-[400px] flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm">Click any area on the studio map to view live setup photos and booking options.</p>
              </div>
            )}
          </div>

          {/* STUDIO KEY (LEGEND) */}
          <div className="bg-white border border-slate-200 p-6 rounded-3xl hidden lg:block shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-tighter">Studio Overview</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px]">
              {zones.slice(0, 10).map(z => (
                <div
                  key={z.id}
                  className={`flex items-center gap-2 cursor-pointer transition-colors ${selectedZone === z.id ? 'text-emerald-600 font-bold' : 'text-slate-500 hover:text-slate-800'}`}
                  onClick={() => setSelectedZone(z.id)}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${selectedZone === z.id ? 'bg-emerald-500 scale-125' : 'bg-slate-300'}`}></div>
                  {z.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}