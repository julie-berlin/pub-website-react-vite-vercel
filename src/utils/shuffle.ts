/**
 * Fisher-Yates shuffle algorithm
 * Randomly shuffles an array in place and returns a new shuffled array
 * @param array - The array to shuffle
 * @returns A new shuffled array
 */
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array] // Create a copy to avoid mutating the original

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

/**
 * Shuffle an array using a seeded random number generator
 * This ensures consistent shuffling for the same seed (useful for testing)
 * @param array - The array to shuffle
 * @param seed - Optional seed for reproducible shuffling
 * @returns A new shuffled array
 */
export function shuffleWithSeed<T>(array: T[], seed?: number): T[] {
  if (seed === undefined) {
    return shuffle(array)
  }

  const shuffled = [...array]
  let random = seed

  // Simple seeded random number generator
  const seededRandom = () => {
    random = (random * 9301 + 49297) % 233280
    return random / 233280
  }

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}