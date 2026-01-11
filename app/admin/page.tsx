"use client";

import Navbar from "@/components/common/Navbar";
import { auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";
import {
  useDeleteLeadMutation,
  useGetLeadsQuery,
  useUpdateLeadMutation,
} from "@/store/adminApi";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ A1: Status filter
  const [statusFilter, setStatusFilter] = useState<
    "all" | "new" | "contacted"
  >("all");

  // Search + pagination
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // ✅ Updated query call
  const { data, isLoading, error, refetch } = useGetLeadsQuery(
    {
      page,
      limit,
      q: statusFilter === "all" ? q : `${q} status:${statusFilter}`,
    },
    { skip: !user }
  );

  const [updateLead] = useUpdateLeadMutation();
  const [deleteLead, { isLoading: deleting }] = useDeleteLeadMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-black">
            Admin <span className="text-[#F58220]">Dashboard</span>
          </h1>

          {!user ? (
            <div className="mt-10 max-w-md border border-black/10 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-black">Admin Login</h2>

              <form onSubmit={handleLogin} className="mt-6 space-y-4">
                <input
                  className="w-full rounded-xl border border-black/15 px-4 py-3"
                  placeholder="Admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="w-full rounded-xl border border-black/15 px-4 py-3"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="w-full rounded-full bg-[#F58220] text-white py-3">
                  Login
                </button>
              </form>
            </div>
          ) : (
            <div className="mt-10">
              {/* Header */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
  <div>
    <p className="text-sm text-gray-600">Logged in as</p>
    <p className="font-semibold text-black">{user.email}</p>
  </div>

  <div className="flex gap-3 flex-wrap">
    {/* ✅ EXPORT CSV BUTTON */}
    <button
      onClick={async () => {
        const user = auth.currentUser;
        if (!user) return;

        const token = await user.getIdToken();

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/leads-export`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "contact-leads.csv";
        a.click();
        window.URL.revokeObjectURL(url);
      }}
      className="px-5 py-2 rounded-full bg-[#0F0F0F] text-white font-semibold hover:opacity-90 transition"
    >
      Export CSV
    </button>

    {/* Refresh */}
    <button
      onClick={() => refetch()}
      className="px-5 py-2 rounded-full border border-black/20 text-black font-semibold hover:border-black transition"
    >
      Refresh
    </button>

    {/* Logout */}
    <button
      onClick={handleLogout}
      className="px-5 py-2 rounded-full bg-black text-white font-semibold hover:opacity-90 transition"
    >
      Logout
    </button>
  </div>
</div>


              {/* Leads */}
              <div className="mt-8 border border-black/10 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-lg font-bold text-black">
                    Contact Leads
                  </h2>

                  <input
                    value={q}
                    onChange={(e) => {
                      setQ(e.target.value);
                      setPage(1);
                    }}
                    placeholder="Search name, email, service..."
                    className="w-64 rounded-xl border border-black/15 px-4 py-2"
                  />
                </div>

                {/* ✅ A2: Status Tabs UI */}
                <div className="px-6 py-4 border-b">
                  <div className="flex gap-2 mb-4">
                    {["all", "new", "contacted"].map((s) => (
                      <button
                        key={s}
                        onClick={() => {
                          setStatusFilter(s as any);
                          setPage(1);
                        }}
                        className={`px-4 py-2 rounded-full text-sm font-semibold border transition
                          ${
                            statusFilter === s
                              ? "bg-[#F58220] text-white border-[#F58220]"
                              : "border-black/20 text-black hover:border-black"
                          }`}
                      >
                        {s === "all"
                          ? "All"
                          : s === "new"
                          ? "New Leads"
                          : "Contacted"}
                      </button>
                    ))}
                  </div>
                </div>

                {isLoading && (
                  <div className="p-6 text-gray-600">Loading leads...</div>
                )}

                {error && (
                  <div className="p-6 text-red-600">
                    Access denied or error.
                  </div>
                )}

                {data?.items?.length ? (
                  <div className="divide-y divide-black/10">
                    {data.items.map((lead: any) => (
                      <div key={lead._id} className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold text-black">
                              {lead.name} •{" "}
                              <span className="text-[#F58220]">
                                {lead.service}
                              </span>
                            </p>
                            <p className="text-sm text-gray-600">
                              {lead.email} • {lead.phone}
                            </p>
                            <p className="mt-2">
                              {/* ✅ A3: Status Badge */}
                              <span
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                                  ${
                                    lead.status === "contacted"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-orange-100 text-orange-800"
                                  }`}
                              >
                                {lead.status === "contacted"
                                  ? "Contacted"
                                  : "New"}
                              </span>
                            </p>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() =>
                                updateLead({
                                  id: lead._id,
                                  status:
                                    lead.status === "contacted"
                                      ? "new"
                                      : "contacted",
                                })
                              }
                              className="px-4 py-2 rounded-full border border-black/20 text-sm font-semibold"
                            >
                              {lead.status === "contacted"
                                ? "Mark New"
                                : "Mark Contacted"}
                            </button>

                            <button
                              disabled={deleting}
                              onClick={() => {
                                const ok = confirm(
                                  "Delete this lead permanently?"
                                );
                                if (ok) deleteLead({ id: lead._id });
                              }}
                              className="px-4 py-2 rounded-full bg-black text-white text-sm font-semibold disabled:opacity-60"
                            >
                              Delete
                            </button>
                          </div>
                        </div>

                        <p className="mt-4 text-gray-700">{lead.message}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  !isLoading && (
                    /* ✅ A4: Empty State */
                    <div className="p-10 text-center text-gray-600">
                      <p className="text-lg font-semibold text-black">
                        No leads found
                      </p>
                      <p className="mt-2 text-sm">
                        Leads submitted from the contact form will appear here.
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
