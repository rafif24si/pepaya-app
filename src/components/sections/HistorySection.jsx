import { useState } from "react";

export default function HistorySection() {
  const [filter, setFilter] = useState("all");

  const historyItems = [
    {
      id: "PP-992-A",
      status: "RIPE",
      statusLabel: "Matang",
      confidence: "98.4%",
      time: "2 min ago",
      timestamp: "Jun 22, 2026 - 14:23",
      location: "Farm A - Greenhouse 3",
      color: "orange",
      gradient: "from-orange-400 to-amber-500",
      bg: "bg-orange-50",
      text: "text-orange-600",
      icon: "task_alt",
    },
    {
      id: "PP-991-B",
      status: "UNRIPE",
      statusLabel: "Mentah",
      confidence: "94.1%",
      time: "15 min ago",
      timestamp: "Jun 22, 2026 - 14:10",
      location: "Farm B - Field 7",
      color: "green",
      gradient: "from-green-400 to-emerald-500",
      bg: "bg-green-50",
      text: "text-green-600",
      icon: "eco",
    },
    {
      id: "PP-990-C",
      status: "ROTTEN",
      statusLabel: "Busuk",
      confidence: "89.2%",
      time: "1 hour ago",
      timestamp: "Jun 22, 2026 - 13:25",
      location: "Farm C - Storage B",
      color: "red",
      gradient: "from-red-400 to-rose-500",
      bg: "bg-red-50",
      text: "text-red-600",
      icon: "warning",
    },
    {
      id: "PP-989-D",
      status: "RIPE",
      statusLabel: "Matang",
      confidence: "97.8%",
      time: "2 hours ago",
      timestamp: "Jun 22, 2026 - 12:15",
      location: "Farm A - Greenhouse 1",
      color: "orange",
      gradient: "from-orange-400 to-amber-500",
      bg: "bg-orange-50",
      text: "text-orange-600",
      icon: "task_alt",
    },
    {
      id: "PP-988-E",
      status: "UNRIPE",
      statusLabel: "Mentah",
      confidence: "91.5%",
      time: "5 hours ago",
      timestamp: "Jun 22, 2026 - 09:45",
      location: "Farm D - Nursery",
      color: "green",
      gradient: "from-green-400 to-emerald-500",
      bg: "bg-green-50",
      text: "text-green-600",
      icon: "eco",
    },
  ];

  const filteredItems = filter === "all" 
    ? historyItems 
    : historyItems.filter(item => item.status === filter);

  return (
    <section className="bg-white" id="history">
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <span className="material-symbols-outlined text-orange-500 text-sm">monitoring</span>
              <span className="text-sm font-medium text-gray-600">Activity Log</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Detection <span className="text-orange-500">History</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl">
              Recent scan records from all connected devices.
            </p>
          </div>
          
          <button className="px-6 py-3 bg-white text-gray-600 text-sm font-medium rounded-xl border border-gray-200 hover:border-orange-200 hover:text-orange-600 transition-all">
            View All Logs →
          </button>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-8">
          {[
            { value: "all", label: "All" },
            { value: "RIPE", label: "Ripe" },
            { value: "UNRIPE", label: "Unripe" },
            { value: "ROTTEN", label: "Rotten" },
          ].map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all ${
                filter === f.value
                  ? "bg-orange-500 text-white"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* History Grid */}
        <div className="space-y-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-orange-100 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-6">
                {/* Status Icon */}
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <span className={`material-symbols-outlined ${item.text} text-xl`}>
                    {item.icon}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono text-gray-400">{item.id}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${item.gradient} text-white`}>
                      {item.statusLabel}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                    <div>
                      <p className="text-xs text-gray-400">Confidence</p>
                      <p className={`text-sm font-semibold ${item.text}`}>{item.confidence}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Time</p>
                      <p className="text-sm font-medium text-gray-700">{item.time}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Date</p>
                      <p className="text-sm font-medium text-gray-700">{item.timestamp}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Location</p>
                      <p className="text-sm font-medium text-gray-700">{item.location}</p>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-gray-400 hover:text-orange-500">
                    open_in_new
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}