
// Detect mismatched items
//
// Conditions:
// 0. Two items has just been selected
// 1. The same item has been selected twice
// 2. Selected items are of different groups
@cld_by_value
def memory_detectMismatchedItems(
  c: memory_Context
) -> memory_Context:
  if not (
    c.recentField == "selectedItems" and
    len(c.selectedItems) == 2
  ):
    c.recentField = "none"
    return c

  if (
    c.selectedItems[0] == c.selectedItems[1]
  ):
    c.mismatchedItems.clear()
    c.mismatchedItems.append(c.selectedItems[0])
    c.recentField = "mismatchedItems"
    return c

  if (
    c.playfieldItems[c.selectedItems[0]] != c.playfieldItems[c.selectedItems[1]]
  ):
    c.mismatchedItems.clear()
    c.mismatchedItems.append(c.selectedItems[0])
    c.mismatchedItems.append(c.selectedItems[1])
    c.recentField = "mismatchedItems"
    return c

  c.recentField = "none"
  return c

// Detect victory
//
// Conditions:
// 1. Matching items have just been hidden and all items are hidden now
@cld_by_value
def memory_detectVictory(
  c: memory_Context
) -> memory_Context:
  if (
    c.recentField == "hiddenItems" and
    len(c.hiddenItems) == len(c.playfieldItems)
  ):
    c.victory = True
    c.recentField = "victory"
    return c

  c.recentField = "none"
  return c

// Generate constant playfield
//
// Conditions:
// 1. Size has just been specified
//
// Both ids and group ids start with 0
@cld_by_value
def memory_generateConstPlayfield(
  c: memory_Context
) -> memory_Context:
  if not (
    c.recentField == "playfieldSize"
  ):
    c.recentField = "none"
    return c

  idGroups: dict[int, int] = { }
  id = 0
  for gid in range(0, c.playfieldSize):
    idGroups[id] = gid
    id += 1
    idGroups[id] = gid
    id += 1

  c.playfieldItems = idGroups
  c.recentField = "playfieldItems"
  return c

// Hide matching selected items
//
// Conditions:
// 1. Two items are selected and they are of the same group
@cld_by_value
def memory_hideMatchingItems(
  c: memory_Context
) -> memory_Context:
  if (
    c.recentField == "selectedItems" and
    len(c.selectedItems) == 2 and
    c.playfieldItems[c.selectedItems[0]] == c.playfieldItems[c.selectedItems[1]]
  ):
    c.hiddenItems.append(c.selectedItems[0])
    c.hiddenItems.append(c.selectedItems[1])
    c.recentField = "hiddenItems"
    return c

  c.recentField = "none"
  return c

// Select item
//
// Conditions:
// 1. Id has just been specified for selection
@cld_by_value
def memory_selectItem(
  c: memory_Context
) -> memory_Context:
  if not (
    c.recentField == "selectedId"
  ):
    c.recentField = "none"
    return c

  if (
    len(c.selectedItems) == 2
  ):
    c.selectedItems.clear()

  c.selectedItems.append(c.selectedId)
  c.recentField = "selectedItems"
  return c