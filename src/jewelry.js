// Filter toggles shown in the UI, in display order.
// Add a new tag here (and tag pieces with its `key` below) to get a new toggle.
// `seasonal: true` means pieces with that tag are hidden from a regular
// (nothing checked) pick and only show up once that tag is checked.
export const TAGS = [
  { key: 'professional', label: 'Professional' },
  { key: 'halloween', label: 'Halloween', seasonal: true },
  { key: 'christmas', label: 'Christmas', seasonal: true },
]

// Edit this list to manage your jewelry collection.
// Each piece needs a unique `id`, a `name`, and a `tags` array
// (any combination of the keys above, or [] for untagged/everyday pieces).
const jewelry = [
  { id: 1, name: 'Gold Y necklace', tags: [] },
  { id: 2, name: 'Gold sunshine necklace', tags: ['professional'] },
  { id: 3, name: 'Heart choker', tags: [] },
  { id: 4, name: 'Purple stone drop necklace', tags: [] },
  { id: 5, name: 'Shark tooth necklace', tags: [] },
  { id: 6, name: 'Heart chain necklace', tags: [] },
  { id: 7, name: 'Gold plain necklace', tags: [] },
  { id: 8, name: 'Blue and red flower wreath earrings', tags: [] },
  { id: 9, name: 'Clear hoop earrings', tags: [] },
  { id: 10, name: 'Pink fan earrings', tags: ['professional'] },
  { id: 11, name: 'Velociraptor earrings', tags: [] },
  { id: 12, name: 'Clear hoop earrings with green', tags: [] },
  { id: 13, name: 'Red long tassel earrings', tags: [] },
  { id: 14, name: 'Snake earrings', tags: [] },
  { id: 15, name: 'Hot pink flamingo earrings', tags: [] },
  { id: 16, name: 'Peacock color small double oval earrings', tags: ['professional'] },
  { id: 17, name: 'Peacock color triple half circle earrings', tags: [] },
  { id: 18, name: 'Pride hearts earrings', tags: [] },
  { id: 19, name: 'Pink lightning bolt earrings', tags: [] },
  { id: 20, name: 'Pink and green double heart earrings', tags: [] },
  { id: 21, name: 'Blue/pink/white heart earrings', tags: [] },
  { id: 22, name: 'Watermelon earrings', tags: [] },
  { id: 23, name: 'Rainbow square circle cutout earrings', tags: [] },
  { id: 24, name: 'Green and gold lightning bolt earrings', tags: [] },
  { id: 25, name: 'Blue/yellow dangle square earrings', tags: ['professional'] },
  { id: 26, name: 'Blue/white/gold lightning bolt earrings', tags: [] },
  { id: 27, name: 'Rattlesnake earrings', tags: [] },
  { id: 28, name: 'Round many diamonds earrings', tags: ['professional'] },
  { id: 29, name: 'Black dangle Mickey Minnie earring', tags: [] },
  { id: 30, name: 'Diamond stud earrings', tags: ['professional'] },
  { id: 31, name: 'Diamond stud earrings with drop', tags: ['professional'] },
  { id: 32, name: 'Diamond stud earrings with drop', tags: ['professional'] },
  { id: 33, name: 'Corvid earrings', tags: [] },
  { id: 34, name: 'Purple bead Amy bracelet', tags: ['professional'] },
  { id: 35, name: 'Orange Ben bracelet', tags: [] },
  { id: 36, name: 'Black rock Amy bracelet', tags: ['professional'] },
  { id: 37, name: 'Teal chevron bracelet', tags: ['professional'] },
  { id: 38, name: 'MeowWolf bracelet', tags: [] },
  { id: 39, name: 'Denim bracelet', tags: [] },
  { id: 40, name: 'Woody bracelet', tags: [] },
  { id: 41, name: 'Cheetah bracelet', tags: [] },
  { id: 42, name: 'Rainbow rock bracelet', tags: [] },
  { id: 43, name: 'Rainbow seed bead bracelet', tags: [] },
  { id: 44, name: 'Engagement ring', tags: [] },
  { id: 45, name: 'Wedding band', tags: [] },
  { id: 46, name: 'Two wrapped disco balls ring', tags: [] },
  { id: 47, name: 'Three stone robot ring', tags: [] },
  { id: 48, name: 'Big square robot ring', tags: [] },
  { id: 49, name: 'Lemon claw', tags: [] },

  // Halloween examples — add your real pieces below, same shape:
  { id: 50, name: 'Spider drop earrings', tags: ['halloween'] },
  { id: 51, name: 'Black cat pendant necklace', tags: ['halloween'] },
  // Christmas examples:
  { id: 52, name: 'Snowflake pendant necklace', tags: ['christmas'] },
  { id: 53, name: 'Candy cane earrings', tags: ['christmas'] },
  // A piece can carry more than one tag:
  { id: 54, name: 'Red and green beaded bracelet', tags: ['christmas', 'professional'] },
]

export default jewelry
