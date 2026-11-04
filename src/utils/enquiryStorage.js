const ENQUIRIES_KEY = 'voverseas_enquiries'
export const ADMIN_SESSION_KEY = 'voverseas_admin_session'

export const saveEnquiry = (formData) => {
  const existingEnquiries = getEnquiries()

  const newEnquiry = {
    id: crypto.randomUUID(),
    name: formData.name.trim(),
    email: formData.email.trim(),
    phone: formData.phone,
    destination: formData.destination,
    message: formData.message.trim(),
    createdAt: new Date().toISOString(),
  }

  const updatedEnquiries = [newEnquiry, ...existingEnquiries]

  localStorage.setItem(
    ENQUIRIES_KEY,
    JSON.stringify(updatedEnquiries)
  )

  return newEnquiry
}

export const getEnquiries = () => {
  try {
    const data = localStorage.getItem(ENQUIRIES_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export const deleteEnquiry = (id) => {
  const updatedEnquiries = getEnquiries().filter(
    (enquiry) => enquiry.id !== id
  )

  localStorage.setItem(
    ENQUIRIES_KEY,
    JSON.stringify(updatedEnquiries)
  )

  return updatedEnquiries
}

export const clearEnquiries = () => {
  localStorage.removeItem(ENQUIRIES_KEY)
}