"use client";

import { FormEvent, useState } from "react";

type ReagentLot = {
  lot: string;
  reagent: string;
  expiry: string;
  status: string;
  notes: string;
};

export default function Home() {
  const [lots, setLots] = useState<ReagentLot[]>([
    {
      lot: "A-112",
      reagent: "Buffer Solution",
      expiry: "2026-08-14",
      status: "Compliant",
      notes: "Temperature logged",
    },
    {
      lot: "B-230",
      reagent: "Enzyme Mix",
      expiry: "2026-05-01",
      status: "Review",
      notes: "Pending quality check",
    },
    {
      lot: "C-405",
      reagent: "pH Indicator",
      expiry: "2025-12-11",
      status: "Expired",
      notes: "Remove from inventory",
    },
  ]);

  const [form, setForm] = useState<ReagentLot>({
    lot: "",
    reagent: "",
    expiry: "",
    status: "Compliant",
    notes: "",
  });

  function handleChange(field: keyof ReagentLot, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.lot || !form.reagent || !form.expiry) {
      return;
    }
    setLots((current) => [...current, form]);
    setForm({ lot: "", reagent: "", expiry: "", status: "Compliant", notes: "" });
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-10 sm:px-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-4xl font-bold tracking-tight">Reagent Lot Compliance Tracker</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Track reagent lot numbers, expiry dates, compliance status, and notes. Add a new lot using the form below.
          </p>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Current reagent lots</h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  The table updates when you add a new lot.
                </p>
              </div>
              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                {lots.length} lots tracked
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-200">
                  <tr>
                    <th className="px-5 py-4">Lot</th>
                    <th className="px-5 py-4">Reagent</th>
                    <th className="px-5 py-4">Expiry</th>
                    <th className="px-5 py-4">Status</th>
                    <th className="px-5 py-4">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-950">
                  {lots.map((item, index) => (
                    <tr key={`${item.lot}-${index}`} className="hover:bg-slate-50 dark:hover:bg-slate-900">
                      <td className="px-5 py-4 font-medium">{item.lot}</td>
                      <td className="px-5 py-4">{item.reagent}</td>
                      <td className="px-5 py-4">{item.expiry}</td>
                      <td className={`px-5 py-4 ${item.status === "Expired" ? "text-rose-700 dark:text-rose-300" : item.status === "Review" ? "text-amber-700 dark:text-amber-300" : "text-emerald-700 dark:text-emerald-300"}`}>
                        {item.status}
                      </td>
                      <td className="px-5 py-4 text-slate-600 dark:text-slate-400">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold">Add a new reagent lot</h2>
            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Lot number</span>
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
                  value={form.lot}
                  onChange={(event) => handleChange("lot", event.target.value)}
                  placeholder="Example: D-512"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Reagent</span>
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
                  value={form.reagent}
                  onChange={(event) => handleChange("reagent", event.target.value)}
                  placeholder="Example: DNA Polymerase"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Expiry date</span>
                <input
                  type="date"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
                  value={form.expiry}
                  onChange={(event) => handleChange("expiry", event.target.value)}
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Status</span>
                <select
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
                  value={form.status}
                  onChange={(event) => handleChange("status", event.target.value)}
                >
                  <option>Compliant</option>
                  <option>Review</option>
                  <option>Expired</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Notes</span>
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
                  value={form.notes}
                  onChange={(event) => handleChange("notes", event.target.value)}
                  placeholder="Example: Stored at 4°C"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-950 dark:hover:bg-slate-300"
              >
                Add lot
              </button>
            </form>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold">Next steps</h2>
          <ol className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
            <li>1. Edit the form labels or the table columns in <span className="font-semibold">src/app/page.tsx</span>.</li>
            <li>2. Save the file and watch the browser update automatically.</li>
            <li>3. Later, we can connect this form to Supabase so data is saved permanently.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
