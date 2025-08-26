document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('discord-handle')
  const fb = document.getElementById('copy-feedback')

  if (!el) return // nothing to do if the element isn't there

  const handle = el.dataset.handle || el.textContent.replace(/^@/, '')

  async function copy() {
    try {
      await navigator.clipboard.writeText(handle)
      el.classList.add('copied')
      fb.hidden = false
      fb.textContent = 'Copied!'
      setTimeout(() => {
        el.classList.remove('copied')
        fb.hidden = true
      }, 1200)
    } catch (err) {
      fb.hidden = false
      fb.textContent = 'Copy failed — select and Ctrl+C'
      setTimeout(() => (fb.hidden = true), 2000)
    }
  }

  el.addEventListener('click', copy)
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      copy()
    }
  })
})
