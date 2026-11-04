import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Users,
  Search,
  Copy,
  Trash2,
  LogOut,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  MessageSquare,
  ClipboardList,
} from 'lucide-react'

import {
  getEnquiries,
  deleteEnquiry,
  clearEnquiries,
  ADMIN_SESSION_KEY,
} from '../../../utils/enquiryStorage'

export default function AdminDashboard() {
  const navigate = useNavigate()

  const [enquiries, setEnquiries] = useState(getEnquiries)
  const [search, setSearch] = useState('')
  const [copied, setCopied] = useState('')

  const filteredEnquiries = useMemo(() => {
    const query = search.trim().toLowerCase()

    if (!query) return enquiries

    return enquiries.filter((item) =>
      [
        item.name,
        item.email,
        item.phone,
        item.destination,
        item.message,
      ]
        .join(' ')
        .toLowerCase()
        .includes(query)
    )
  }, [enquiries, search])

  const handleCopy = async (value, label) => {
    if (!value) return

    try {
      await navigator.clipboard.writeText(String(value))
      setCopied(label)
      window.setTimeout(() => setCopied(''), 1800)
    } catch {
      alert('Copy failed. Please copy the text manually.')
    }
  }

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this enquiry?'
    )

    if (!confirmed) return

    const updated = deleteEnquiry(id)
    setEnquiries(updated)
  }

  const handleClearAll = () => {
    if (enquiries.length === 0) return

    const confirmed = window.confirm(
      'Are you sure you want to permanently delete all enquiries?'
    )

    if (!confirmed) return

    clearEnquiries()
    setEnquiries([])
  }

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_SESSION_KEY)
    navigate('/admin', { replace: true })
  }

  const formatDate = (date) => {
    if (!date) return 'N/A'

    return new Date(date).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
  }

  const CopyButton = ({ value, label }) => (
    <button
      type="button"
      onClick={() => handleCopy(value, label)}
      title={`Copy ${label}`}
      className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
    >
      <Copy size={13} />
      {copied === label ? 'Copied!' : 'Copy'}
    </button>
  )

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl font-extrabold text-slate-900">
              V Overseas Education
            </h1>

            <p className="mt-1 text-xs text-gray-500">
              Admin Enquiry Management
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Enquiries Dashboard
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              View and manage contact form submissions.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClearAll}
            disabled={enquiries.length === 0}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Trash2 size={16} />
            Clear All
          </button>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Enquiries
                </p>

                <h3 className="mt-2 text-3xl font-extrabold text-slate-900">
                  {enquiries.length}
                </h3>
              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                <Users size={25} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Matching Results
                </p>

                <h3 className="mt-2 text-3xl font-extrabold text-slate-900">
                  {filteredEnquiries.length}
                </h3>
              </div>

              <div className="rounded-xl bg-green-50 p-3 text-green-700">
                <ClipboardList size={25} />
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, phone or destination..."
              className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Enquiry cards */}
        {filteredEnquiries.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <ClipboardList
              size={42}
              className="mx-auto mb-4 text-gray-300"
            />

            <h3 className="text-lg font-bold text-gray-800">
              {enquiries.length === 0
                ? 'No enquiries yet'
                : 'No matching enquiries'}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {enquiries.length === 0
                ? 'Contact form submissions will appear here.'
                : 'Try searching with another name, email or phone number.'}
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {filteredEnquiries.map((item, index) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="flex flex-col justify-between gap-3 border-b border-gray-100 bg-gray-50 px-5 py-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                      {item.name?.charAt(0)?.toUpperCase() || 'E'}
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {item.name}
                      </h3>

                      <p className="text-xs text-gray-500">
                        Enquiry #{index + 1}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <CalendarDays size={15} />
                    {formatDate(item.createdAt)}

                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      title="Delete enquiry"
                      className="ml-2 rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
                  {/* Email */}
                  <div>
                    <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                      <Mail size={14} />
                      Email Address
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <a
                        href={`mailto:${item.email}`}
                        className="break-all text-sm font-medium text-blue-700 hover:underline"
                      >
                        {item.email}
                      </a>

                      <CopyButton
                        value={item.email}
                        label={`email-${item.id}`}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                      <Phone size={14} />
                      Phone Number
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <a
                        href={`tel:${item.phone}`}
                        className="text-sm font-medium text-slate-800 hover:text-blue-700"
                      >
                        {item.phone}
                      </a>

                      <CopyButton
                        value={item.phone}
                        label={`phone-${item.id}`}
                      />
                    </div>
                  </div>

                  {/* Destination */}
                  <div>
                    <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                      <MapPin size={14} />
                      Preferred Destination
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-slate-800">
                        {item.destination || 'Not specified'}
                      </span>

                      <CopyButton
                        value={item.destination}
                        label={`destination-${item.id}`}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                      <Users size={14} />
                      Student Name
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-slate-800">
                        {item.name}
                      </span>

                      <CopyButton
                        value={item.name}
                        label={`name-${item.id}`}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                      <MessageSquare size={14} />
                      Message
                    </p>

                    <div className="rounded-xl bg-slate-50 p-4">
                      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                        <p className="whitespace-pre-wrap break-words text-sm leading-6 text-gray-700">
                          {item.message || 'No message provided.'}
                        </p>

                        {item.message && (
                          <CopyButton
                            value={item.message}
                            label={`message-${item.id}`}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}