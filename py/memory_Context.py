class memory_Context:
  def __init__(self):
    self.cellPositions = []
    self.cellSize = 0
    self.descImage = ""
    self.descImageCount = 0
    self.descImageHeight = 0
    self.descImageWidth = 0
    self.descPosition = []
    self.descTextureDescriptions = []
    self.deselectMismatchedTiles = False
    self.deselectMismatchedTilesDelay = 0
    self.didLaunch = False
    self.displayEndingSplashScreen = False
    self.exit = False
    self.hiddenItems = []
    self.hideBeginningSplashScreen = False
    self.hideMatchingTiles = False
    self.hideMatchingTilesDelay = 0
    self.input = ""
    self.mismatchedItems = []
    self.outputGoOn = ""
    self.outputGreeting = ""
    self.outputHelp = ""
    self.outputMatchedItems = ""
    self.outputMismatchedItems = ""
    self.outputPromptSelection = ""
    self.outputVictory = ""
    self.playfieldItems = {}
    self.playfieldSize = 0
    self.recentField = "none"
    self.selectedId = -1
    self.selectedItems = []
    self.splashBeginTimeout = 0
    self.splashEndDelay = 0
    self.splashImage = ""
    self.splashImageCount = 0
    self.splashImageHeight = 0
    self.splashImageWidth = 0
    self.textureDescriptions = []
    self.tileImage = ""
    self.tileImageCount = 0
    self.tileImageHeight = 0
    self.tileImageWidth = 0
    self.tilePositions = []
    self.titleImage = ""
    self.titleImageCount = 0
    self.titleImageHeight = 0
    self.titleImageWidth = 0
    self.titlePosition = []
    self.titleTextureDescriptions = []
    self.windowBackgroundColor = "#000000"
    self.windowHeight = 0
    self.windowTitle = ""
    self.windowWidth = 0
    self.victory = False

  def field(self, fieldName):
    return getattr(self, fieldName)

  def setField(self, fieldName, value):
    setattr(self, fieldName, value)

  def __repr__(self):
    return self.__str__()

  def __str__(self):
    return f"memory_Context(playfieldI/playfieldS/recentF/selectedId/selectedI: '{self.playfieldItems}'/'{self.playfieldSize}'/'{self.recentField}'/'{self.selectedId}'/'{self.selectedItems}')"

def memory_createContext():
  return memory_Context()
