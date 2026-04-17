export default function AgendaPage() {
  const scheduleItems = [
    { time: '09:00', activity: 'Breakfast at Hotel', location: 'Main Dining Room' },
    { time: '10:30', activity: 'City Tour - Historic Center', location: 'Meeting Point: Lobby' },
    { time: '13:00', activity: 'Lunch - Local Cuisine', location: 'Restaurant "La Terraza"' },
    { time: '15:30', activity: 'Museum Visit', location: 'Museum of Modern Art' },
    { time: '20:00', activity: 'Welcome Dinner', location: 'Beach Club' },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-white">Agenda del Viaje</h2>
      <div className="bg-black/20 rounded-lg border border-white/20 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="p-4 text-sm font-semibold text-slate-300">Hora</th>
              <th className="p-4 text-sm font-semibold text-slate-300">Actividad</th>
              <th className="p-4 text-sm font-semibold text-slate-300">Lugar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {scheduleItems.map((item, index) => (
              <tr key={index} className="hover:bg-white/5 transition-colors">
                <td className="p-4 text-sm text-slate-400 font-mono">{item.time}</td>
                <td className="p-4 text-sm text-white">{item.activity}</td>
                <td className="p-4 text-sm text-slate-500">{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}