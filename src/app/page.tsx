export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-10 sm:px-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-4xl font-bold tracking-tight">Reagent Lot Compliance Tracker</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            This lab dashboard helps track reagent lot numbers, expiration dates, compliance status, and safety notes. You can edit this page in <span className="font-semibold">src/app/page.tsx</span>.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Current reagent lots</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Example inventory rows show what a lab tracking page could look like.
              </p>
            </div>
            <button className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-950 dark:hover:bg-slate-300">
              Add new lot
            </button>
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
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-900">
                  <td className="px-5 py-4 font-medium">A-112</td>
                  <td className="px-5 py-4">Buffer Solution</td>
                  <td className="px-5 py-4">2026-08-14</td>
                  <td className="px-5 py-4 text-emerald-700 dark:text-emerald-300">Compliant</td>
                  <td className="px-5 py-4 text-slate-600 dark:text-slate-400">Temperature logged</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-900">
                  <td className="px-5 py-4 font-medium">B-230</td>
                  <td className="px-5 py-4">Enzyme Mix</td>
                  <td className="px-5 py-4">2026-05-01</td>
                  <td className="px-5 py-4 text-amber-700 dark:text-amber-300">Review</td>
                  <td className="px-5 py-4 text-slate-600 dark:text-slate-400">Pending quality check</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-900">
                  <td className="px-5 py-4 font-medium">C-405</td>
                  <td className="px-5 py-4">pH Indicator</td>
                  <td className="px-5 py-4">2025-12-11</td>
                  <td className="px-5 py-4 text-rose-700 dark:text-rose-300">Expired</td>
                  <td className="px-5 py-4 text-slate-600 dark:text-slate-400">Remove from inventory</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold">Next steps</h2>
          <ol className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
            <li>1. Open <span className="font-semibold">src/app/page.tsx</span>.</li>
            <li>2. Change the text or add new reagent rows.</li>
            <li>3. Save the file and watch the browser update automatically.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
