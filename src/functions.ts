type SectionId = string

export function observeSections(
  sectionIds: SectionId[],
  onChange: (activeId: SectionId) => void
) {
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null)

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onChange(entry.target.id)
        }
      })
    },
    {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }
  )

  sections.forEach(section => observer.observe(section))

  return () => observer.disconnect()
}
