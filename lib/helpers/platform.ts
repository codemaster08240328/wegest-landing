export function isiOS(): boolean {
  if (!process.browser) return false

  const hasEnoughTouchPoints = navigator?.maxTouchPoints > 2
  const isAppleDevice =
    ['iPhone', 'iPad', 'iPod'].includes(navigator.platform) ||
    Boolean(/Mac/.exec(navigator.userAgent))

  return 'serviceWorker' in navigator && isAppleDevice && hasEnoughTouchPoints
}

export function isStandalone() {
  if (!process.browser) return false

  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in navigator && (navigator as any).standalone === true)
  )
}
