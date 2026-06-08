"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import type { CampaignStats } from "@/app/lib/actions/newsletter";

type Recipient = { status: string; email: string; error: string | null };

const FUNNEL_COLORS = ["#0078D4", "#2E9E5B", "#8B5CF6", "#E3008C"];
const DONUT_COLORS: Record<string, string> = {
  Παραδόθηκαν: "#2E9E5B",
  Απέτυχαν: "#D13438",
  Εκκρεμή: "#A19F9D",
  "Κατάργηση εγγραφής": "#F7A600",
};

function Kpi({ label, value, sub, tone }: { label: string; value: React.ReactNode; sub?: string; tone?: "ok" | "warn" | "bad" }) {
  const toneClass =
    tone === "ok" ? "text-emerald-600" : tone === "warn" ? "text-amber-600" : tone === "bad" ? "text-red-600" : "text-foreground";
  return (
    <div className="rounded-lg border bg-card p-3">
      <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className={`mt-1 text-2xl font-bold tabular-nums ${toneClass}`}>{value}</p>
      {sub && <p className="text-[11px] text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function CampaignStatsPanel({
  recipients,
  stats,
  loading,
  onClose,
}: {
  recipients: Recipient[];
  stats: CampaignStats | null;
  loading: boolean;
  onClose: () => void;
}) {
  const failedRecs = recipients.filter((r) => r.status === "failed");
  const t = stats?.totals;

  const funnelData = t
    ? [
        { name: "Εστάλησαν", value: t.sent },
        { name: "Παραδόθηκαν", value: t.delivered },
        { name: "Ανοίχτηκαν", value: t.opened },
        { name: "Κλικ", value: t.clicked },
      ]
    : [];

  const donutData = t
    ? [
        { name: "Παραδόθηκαν", value: t.delivered },
        { name: "Απέτυχαν", value: t.failed },
        { name: "Εκκρεμή", value: t.pending },
        { name: "Κατάργηση εγγραφής", value: t.unsubscribed },
      ].filter((d) => d.value > 0)
    : [];

  const timeline = (stats?.timeline ?? []).map((p) => ({
    ...p,
    label: p.t.slice(5, 16).replace("T", " "), // MM-DD HH:00
  }));

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          Στατιστικά εκστρατείας
          {loading && <Loader2Icon className="h-3.5 w-3.5 animate-spin text-muted-foreground" />}
        </CardTitle>
        <Button variant="ghost" size="sm" onClick={onClose}>
          Κλείσιμο
        </Button>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* KPI cards */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          <Kpi label="Παραλήπτες" value={t?.recipients ?? recipients.length} />
          <Kpi label="Εστάλησαν" value={t?.sent ?? 0} />
          <Kpi label="Παραδόθηκαν" value={t?.delivered ?? 0} sub={stats ? `${stats.deliveryRate}%` : undefined} tone="ok" />
          <Kpi label="Ανοίχτηκαν" value={t?.opened ?? 0} sub={stats ? `${stats.openRate}% open rate` : undefined} tone="ok" />
          <Kpi label="Κλικ" value={t?.clicked ?? 0} sub={stats ? `${stats.clickRate}% CTR` : undefined} tone="ok" />
          <Kpi label="Απέτυχαν" value={t?.failed ?? 0} tone={t && t.failed > 0 ? "bad" : undefined} />
        </div>

        {stats?.mailgunError && (
          <div className="rounded border border-amber-200 bg-amber-50 p-2 text-[11px] text-amber-800">
            Τα δεδομένα παράδοσης/ανοιγμάτων δεν φορτώθηκαν από το Mailgun: {stats.mailgunError}
          </div>
        )}

        {t && (t.sent > 0 || t.delivered > 0) && (
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Funnel */}
            <div className="rounded-lg border p-3">
              <p className="mb-2 text-xs font-semibold text-muted-foreground">Funnel παράδοσης</p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={funnelData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EDEBE9" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                  <Tooltip cursor={{ fill: "rgba(0,120,212,0.06)" }} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {funnelData.map((_, i) => (
                      <Cell key={i} fill={FUNNEL_COLORS[i % FUNNEL_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Status donut */}
            <div className="rounded-lg border p-3">
              <p className="mb-2 text-xs font-semibold text-muted-foreground">Κατάσταση παραληπτών</p>
              {donutData.length > 0 ? (
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={donutData} dataKey="value" nameKey="name" innerRadius={45} outerRadius={80} paddingAngle={2}>
                      {donutData.map((d, i) => (
                        <Cell key={i} fill={DONUT_COLORS[d.name] ?? "#0078D4"} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <p className="py-16 text-center text-xs text-muted-foreground">Δεν υπάρχουν δεδομένα.</p>
              )}
            </div>
          </div>
        )}

        {/* Opens/clicks over time */}
        {timeline.length > 1 && (
          <div className="rounded-lg border p-3">
            <p className="mb-2 text-xs font-semibold text-muted-foreground">Ανοίγματα & κλικ στον χρόνο</p>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={timeline} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EDEBE9" />
                <XAxis dataKey="label" tick={{ fontSize: 10 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Line type="monotone" dataKey="opened" name="Ανοίγματα" stroke="#2E9E5B" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="clicked" name="Κλικ" stroke="#8B5CF6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Failed recipients */}
        {failedRecs.length > 0 && (
          <div>
            <p className="mb-1 text-xs font-semibold text-red-700">Αρχείο σφαλμάτων ({failedRecs.length})</p>
            <div className="max-h-64 overflow-y-auto rounded border border-red-200 bg-red-50/50">
              <table className="w-full text-left text-[11px]">
                <thead className="sticky top-0 bg-red-100 text-red-800">
                  <tr>
                    <th className="px-2 py-1 font-semibold">Email</th>
                    <th className="px-2 py-1 font-semibold">Σφάλμα</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-red-700">
                  {failedRecs.map((r, i) => (
                    <tr key={i} className="border-t border-red-200/60 align-top">
                      <td className="px-2 py-1 whitespace-nowrap">{r.email}</td>
                      <td className="px-2 py-1 break-words">{r.error ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
