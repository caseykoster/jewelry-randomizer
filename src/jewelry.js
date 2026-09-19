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
  { id: 25, name: 'Green and gold oblong heart earrings', tags: [] },
  { id: 26, name: 'Green and gold regular heart earrings', tags: [] },
  { id: 27, name: 'Green and gold cutout heart earrings', tags: [] },
  { id: 28, name: 'Green and gold star earrings', tags: [] },
  { id: 29, name: 'Blue glitter heart earrings', tags: [] },
  { id: 30, name: 'Pink shell earrings', tags: [] },
  { id: 31, name: 'Blue/yellow dangle square earrings', tags: ['professional'] },
  { id: 32, name: 'Blue/white/gold lightning bolt earrings', tags: [] },
  { id: 33, name: 'Orange sparkle lightning bolt earrings', tags: [] },
  { id: 34, name: 'Rattlesnake earrings', tags: [] },
  { id: 35, name: 'Round many diamonds earrings', tags: ['professional'] },
  { id: 36, name: 'Black dangle Mickey Minnie earring', tags: [] },
  { id: 37, name: 'Diamond stud earrings', tags: ['professional'] },
  { id: 38, name: 'Diamond stud earrings with drop', tags: ['professional'] },
  { id: 39, name: 'Diamond stud earrings with drop', tags: ['professional'] },
  { id: 40, name: 'Corvid earrings', tags: [] },
  { id: 41, name: 'Silver ball earrings', tags: ['professional'] },
  { id: 42, name: 'Purple bead Amy bracelet', tags: ['professional'] },
  { id: 43, name: 'Orange Ben bracelet', tags: [] },
  { id: 44, name: 'Black rock Amy bracelet', tags: ['professional'] },
  { id: 45, name: 'Teal chevron bracelet', tags: ['professional'] },
  { id: 46, name: 'MeowWolf bracelet', tags: [] },
  { id: 47, name: 'Denim bracelet', tags: [] },
  { id: 48, name: 'Woody bracelet', tags: [] },
  { id: 49, name: 'Cheetah bracelet', tags: [] },
  { id: 50, name: 'Rainbow rock bracelet', tags: [] },
  { id: 51, name: 'Rainbow seed bead bracelet', tags: [] },
  { id: 52, name: 'Engagement ring', tags: [] },
  { id: 53, name: 'Wedding band', tags: [] },
  { id: 54, name: 'The One Ring', tags: [] },
  { id: 55, name: 'Two wrapped disco balls ring', tags: [] },
  { id: 56, name: 'Three stone robot ring', tags: [] },
  { id: 57, name: 'Big square robot ring', tags: [] },
  { id: 58, name: 'Lemon claw', tags: [] },

  // Halloween examples — add your real pieces below, same shape:
  { id: 59, name: 'Corvid earrings', tags: ['halloween'] },
  { id: 60, name: 'Zero earrings', tags: ['halloween'] },
  { id: 61, name: 'Ghostface earrings', tags: ['halloween'] },
  { id: 62, name: 'Skull earrings', tags: ['halloween'] },
  { id: 63, name: 'Coffin earrings', tags: ['halloween'] },
  { id: 64, name: 'Franken-mouse earrings', tags: ['halloween'] },
  { id: 65, name: 'Glow ghost dangle earrings', tags: ['halloween'] },
  { id: 66, name: 'Glow skull earrings', tags: ['halloween'] },
  { id: 67, name: 'Bat earrings', tags: ['halloween'] },
  { id: 68, name: 'Witch hat earrings', tags: ['halloween'] },
  { id: 69, name: 'Giant ghost earrings', tags: ['halloween'] },
  { id: 70, name: 'Ghost dangle earrings', tags: ['halloween'] },
  { id: 71, name: 'Ghost studs', tags: ['halloween'] },
  { id: 72, name: 'Glow ghost studs', tags: ['halloween'] },
  // Christmas examples:
  { id: 73, name: 'Christmas tree cake earrings', tags: ['christmas'] },
  { id: 74, name: 'Chip and Dale pin', tags: ['christmas'] },
  //new additions:
  { id: 75, name: 'Shark tooth hair wrap', tags: [] },
  // A piece can carry more than one tag:
  // Example:
  // { id: 63, name: 'Red and green beaded bracelet', tags: ['christmas', 'professional'] },
]

export default jewelry
