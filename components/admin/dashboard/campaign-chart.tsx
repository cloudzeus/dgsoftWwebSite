"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

type CampaignStat = {
  name: string;
  sentAt: string | null;
  recipients: number;
};

function shortLabel(name: string): string {
  return name.length > 18 ? name.slice(0, 16) + "…" : name;
}

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload as CampaignStat;
  return (
    <div className="bg-white border border-[#EDEBE9] rounded-lg px-3 py-2 text-xs shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
      <p className="font-semibold text-[#201F1E] mb-1 max-w-[180px] break-words">{d.name}</p>
      <p className="text-[#605E5C]">
        {d.sentAt
          ? new Date(d.sentAt).toLocaleDateString("el-GR", { day: "2-digit", month: "short", year: "numeric" })
          : "—"}
      </p>
      <p className="text-[#0078D4] font-semibold mt-1">
        {d.recipients.toLocaleString("el-GR")} παραλήπτες
      </p>
    </div>
  );
}

export function CampaignChart({ data }: { data: CampaignStat[] }) {
  if (!data.length) {
    return (
      <div className="flex items-center justify-center h-[220px] text-sm text-[#605E5C]">
        Δεν υπάρχουν αποστολές εκστρατειών ακόμα.
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }} barCategoryGap="28%">
        <CartesianGrid strokeDasharray="3 3" stroke="#EDEBE9" vertical={false} />
        <XAxis
          dataKey="name"
          tickFormatter={shortLabel}
          tick={{ fill: "#605E5C", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "#605E5C", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => v.toLocaleString("el-GR")}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0,120,212,0.06)" }} />
        <Bar dataKey="recipients" radius={[4, 4, 0, 0]} maxBarSize={56}>
          {data.map((_, i) => (
            <Cell
              key={i}
              fill={i === data.length - 1 ? "#0078D4" : "#C7E0F4"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
