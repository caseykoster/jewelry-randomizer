// Filter toggles shown in the UI, in display order.
// Add a new tag here (and tag pieces with its `key` below) to get a new toggle.
export const TAGS = [
  { key: 'professional', label: 'Professional' },
  { key: 'halloween', label: 'Halloween' },
  { key: 'christmas', label: 'Christmas' },
]

// Edit this list to manage your jewelry collection.
// Each piece needs a unique `id`, a `name`, and a `tags` array
// (any combination of the keys above, or [] for untagged/everyday pieces).
const jewelry = [
  { id: 1, name: 'Gold hoop earrings', tags: ['professional'] },
  { id: 2, name: 'Silver stud earrings', tags: ['professional'] },
  { id: 3, name: 'Pearl necklace', tags: ['professional'] },
  { id: 4, name: 'Chunky layered chain necklace', tags: [] },
  { id: 5, name: 'Beaded friendship bracelet', tags: [] },
  { id: 6, name: 'Thin gold bangle', tags: ['professional'] },
  { id: 7, name: 'Statement chandelier earrings', tags: [] },
  { id: 8, name: 'Simple sterling silver ring', tags: ['professional'] },
  { id: 9, name: 'Turquoise cocktail ring', tags: [] },
  { id: 10, name: 'Delicate ankle bracelet', tags: [] },
  { id: 11, name: 'Spider drop earrings', tags: ['halloween'] },
  { id: 12, name: 'Black cat pendant necklace', tags: ['halloween'] },
  { id: 13, name: 'Orange pumpkin studs', tags: ['halloween'] },
  { id: 14, name: 'Candy cane earrings', tags: ['christmas'] },
  { id: 15, name: 'Snowflake pendant necklace', tags: ['christmas', 'professional'] },
  { id: 16, name: 'Red and green beaded bracelet', tags: ['christmas'] },
]

export default jewelry
