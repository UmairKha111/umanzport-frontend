import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { auth } from "@/lib/firebase";

export type Lead = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source?: string;
  status?: "new" | "contacted";
  notes?: string;
  createdAt: string;
};

export type LeadsResponse = {
  items: Lead[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: async (headers) => {
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdToken();
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Leads"],
  endpoints: (builder) => ({
    getLeads: builder.query<LeadsResponse, { page: number; limit: number; q: string }>({
      query: ({ page, limit, q }) =>
        `/api/admin/leads?page=${page}&limit=${limit}&q=${encodeURIComponent(q)}`,
      providesTags: ["Leads"],
    }),

    updateLead: builder.mutation<{ item: Lead }, { id: string; status?: "new" | "contacted"; notes?: string }>({
      query: ({ id, ...body }) => ({
        url: `/api/admin/leads/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Leads"],
    }),

    deleteLead: builder.mutation<{ ok: true }, { id: string }>({
      query: ({ id }) => ({
        url: `/api/admin/leads/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Leads"],
    }),
  }),
});

export const { useGetLeadsQuery, useUpdateLeadMutation, useDeleteLeadMutation } = adminApi;
