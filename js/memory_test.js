
def memory_test_detectMismatchedItems(
) -> str:
  c = memory_createContext()
  c.playfieldSize = 2
  c.recentField = "playfieldSize"
  c = memory_generateConstPlayfield(c)

  // Select two items of different groups.
  c.selectedId = 0
  c.recentField = "selectedId"
  c = memory_selectItem(c)
  c.selectedId = 2
  c.recentField = "selectedId"
  c = memory_selectItem(c)

  // Detect mismatching.
  c = memory_detectMismatchedItems(c)

  // See if the two selected items do not match.
  if (
    c.recentField == "mismatchedItems" and
    len(c.mismatchedItems) == 2 and
    c.mismatchedItems[0] == 0 and
    c.mismatchedItems[1] == 2
  ):
    return "OK: memory_detectMismatchedItems"

  return "ERR: memory_detectMismatchedItems"

def memory_test_detectMismatchedItems_itemTwice(
) -> str:
  c = memory_createContext()
  c.playfieldSize = 2
  c.recentField = "playfieldSize"
  c = memory_generateConstPlayfield(c)

  // Select the same item twice.
  c.selectedId = 0
  c.recentField = "selectedId"
  c = memory_selectItem(c)
  c.selectedId = 0
  c.recentField = "selectedId"
  c = memory_selectItem(c)

  // Detect mismatching.
  c = memory_detectMismatchedItems(c)

  // See if the two selected items do not match.
  if (
    c.recentField == "mismatchedItems" and
    len(c.mismatchedItems) == 1 and
    c.mismatchedItems[0] == 0
  ):
    return "OK: memory_detectMismatchedItems_itemTwice"

  return "ERR: memory_detectMismatchedItems_itemTwice"

def memory_test_detectVictory(
) -> str:
  c = memory_createContext()
  c.playfieldSize = 2
  c.recentField = "playfieldSize"
  c = memory_generateConstPlayfield(c)

  // Select the first two items of the same group.
  c.selectedId = 0
  c.recentField = "selectedId"
  c = memory_selectItem(c)
  c.selectedId = 1
  c.recentField = "selectedId"
  c = memory_selectItem(c)

  // Hide the first pair.
  c = memory_hideMatchingItems(c)

  // Select the last two items of the same group.
  c.selectedId = 2
  c.recentField = "selectedId"
  c = memory_selectItem(c)
  c.selectedId = 3
  c.recentField = "selectedId"
  c = memory_selectItem(c)

  // Hide the second pair.
  c = memory_hideMatchingItems(c)

  // Detect victory.
  c = memory_detectVictory(c)

  // See if victory has been detected.
  if (
    c.recentField == "victory" and
    c.victory == True
  ):
    return "OK: memory_detectVictory"

  return "ERR: memory_detectVictory"

def memory_test_generateConstPlayfield(
) -> str:
  c = memory_createContext()
  c.playfieldSize = 2
  c.recentField = "playfieldSize"
  c = memory_generateConstPlayfield(c)
  if (
    c.recentField == "playfieldItems" and
    len(c.playfieldItems) == 4 and
    c.playfieldItems[0] == 0 and
    c.playfieldItems[1] == 0 and
    c.playfieldItems[2] == 1 and
    c.playfieldItems[3] == 1
  ):
    return "OK: memory_generateConstPlayfield"

  return "ERR: memory_generateConstPlayfield"

def memory_test_hideMatchingItems(
) -> str:
  c = memory_createContext()
  c.playfieldSize = 2
  c.recentField = "playfieldSize"
  c = memory_generateConstPlayfield(c)

  // Select two items of the same group.
  c.selectedId = 0
  c.recentField = "selectedId"
  c = memory_selectItem(c)
  c.selectedId = 1
  c.recentField = "selectedId"
  c = memory_selectItem(c)

  // Hide matching items.
  c = memory_hideMatchingItems(c)

  // See if the two selected items match.
  if (
    c.recentField == "hiddenItems" and
    len(c.hiddenItems) == 2 and
    c.hiddenItems[0] == 0 and
    c.hiddenItems[1] == 1
  ):
    return "OK: memory_hideMatchingItems"

  return "ERR: memory_hideMatchingItems"

def memory_test_selectItem_1x(
) -> str:
  c = memory_createContext()
  c.playfieldSize = 2
  c.recentField = "playfieldSize"
  c = memory_generateConstPlayfield(c)

  // Select the first item.
  c.selectedId = 0
  c.recentField = "selectedId"
  c = memory_selectItem(c)

  // See if it's in selectedItems now.
  if (
    c.recentField == "selectedItems" and
    len(c.selectedItems) == 1 and
    c.selectedItems[0] == 0
  ):
    return "OK: memory_selectItem_1x"

  return "ERR: memory_selectItem_1x"

def memory_test_selectItem_2x(
) -> str:
  c = memory_createContext()
  c.playfieldSize = 2
  c.recentField = "playfieldSize"
  c = memory_generateConstPlayfield(c)

  // Select the first two items.
  c.selectedId = 0
  c.recentField = "selectedId"
  c = memory_selectItem(c)
  c.selectedId = 1
  c.recentField = "selectedId"
  c = memory_selectItem(c)

  // See if both items are selected now.
  if (
    c.recentField == "selectedItems" and
    len(c.selectedItems) == 2 and
    c.selectedItems[0] == 0 and
    c.selectedItems[1] == 1
  ):
    return "OK: memory_selectItem_2x"

  return "ERR: memory_selectItem_2x"

def memory_test_selectItem_3x(
) -> str:
  c = memory_createContext()
  c.playfieldSize = 2
  c.recentField = "playfieldSize"
  c = memory_generateConstPlayfield(c)

  // Select three items.
  c.selectedId = 0
  c.recentField = "selectedId"
  c = memory_selectItem(c)
  c.selectedId = 1
  c.recentField = "selectedId"
  c = memory_selectItem(c)
  c.selectedId = 2
  c.recentField = "selectedId"
  c = memory_selectItem(c)

  // See if only one (last) item is selected now.
  if (
    c.recentField == "selectedItems" and
    len(c.selectedItems) == 1 and
    c.selectedItems[0] == 2
  ):
    return "OK: memory_selectItem_3x"

  return "ERR: memory_selectItem_3x"