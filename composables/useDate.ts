export function useDate() {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-EN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  }

  const ISODate = (date: Date) => {
    return date.toISOString()
  }

  return {
    ISODate,
    formatDate,
  }
}
