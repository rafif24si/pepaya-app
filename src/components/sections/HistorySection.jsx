// components/sections/HistorySection.jsx
export default function HistorySection() {
  const historyItems = [
    {
      id: "PP-992-A",
      status: "Ripe",
      confidence: "98.4%",
      time: "2 mins ago",
      statusBg: "bg-primary-container/20",
      statusText: "text-primary-container",
      thumbnail: (
        <div className="w-16 h-16 rounded-lg bg-primary-container/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary-container text-2xl">
            eco
          </span>
        </div>
      ),
      borderLeft: "",
    },
    {
      id: "PP-991-B",
      status: "Unripe",
      confidence: "94.1%",
      time: "15 mins ago",
      statusBg: "bg-secondary/20",
      statusText: "text-secondary",
      thumbnail: (
        <div className="w-16 h-16 rounded-lg bg-secondary/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-secondary text-2xl">
            eco
          </span>
        </div>
      ),
      borderLeft: "",
    },
    {
      id: "PP-990-C",
      status: "Rotten",
      confidence: "89.2%",
      time: "1 hr ago",
      statusBg: "bg-tertiary/20",
      statusText: "text-tertiary",
      thumbnail: (
        <div className="w-16 h-16 rounded-lg bg-tertiary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-tertiary text-2xl">
            coronavirus
          </span>
        </div>
      ),
      borderLeft: "border-l-4 border-l-tertiary",
    },
  ];

  return (
    <section className="px-gutter py-xl bg-surface" id="history">
      <div className="max-w-container-max mx-auto w-full">
        <div className="flex justify-between items-end mb-lg">
          <div>
            <h2 className="font-display-lg text-headline-lg text-on-surface mb-2">
              Recent Scans
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Live telemetry from active field agents.
            </p>
          </div>
          <button className="text-primary-container font-label-md flex items-center gap-1 hover:opacity-80 transition-opacity hidden md:flex">
            View Full Logs
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {historyItems.map((item) => (
            <div
              key={item.id}
              className={`glass-panel p-4 rounded-xl shadow-level-1 hover:shadow-level-3 transition-all duration-300 flex items-start gap-4 cursor-pointer group ${item.borderLeft}`}
            >
              <div className="w-16 h-16 rounded-lg bg-surface-variant overflow-hidden shrink-0">
                {item.thumbnail}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-mono-data text-xs text-outline">
                    ID: {item.id}
                  </span>
                  <span
                    className={`${item.statusBg} ${item.statusText} px-2 py-0.5 rounded text-[10px] font-label-md uppercase`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="font-headline-md text-[16px] text-on-surface">
                  Confidence: {item.confidence}
                </div>
                <div className="font-body-md text-xs text-on-surface-variant mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    schedule
                  </span>{" "}
                  {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="bg-surface-variant text-on-surface-variant px-6 py-2 rounded-lg font-label-md w-full">
            View All Logs
          </button>
        </div>
      </div>
    </section>
  );
}