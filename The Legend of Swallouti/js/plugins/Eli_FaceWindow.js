//==========================================================================
// Eli_FaceWindow.js
//==========================================================================

/*:
@target MZ

@plugindesc ♦1.0.0♦ Adds a face window for the message box!
@author Hakuen Studio
@url https://hakuenstudio.itch.io/eli-face-window-for-rpg-maker-mz

@help
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
If you like my work, please consider supporting me on Patreon!
Patreon      → https://www.patreon.com/hakuenstudio
Rate Plugin  → https://hakuenstudio.itch.io/eli-face-window-for-rpg-maker-mz/rate?source=game
Terms of Use → https://www.hakuenstudio.com/terms-of-use-5-0-0
Facebook     → https://www.facebook.com/hakuenstudio
Instagram    → https://www.instagram.com/hakuenstudio
Twitter      → https://twitter.com/hakuen_studio
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
============================================================================
Plugin Requirements
============================================================================

Need Eli Book
Order After Eli Book

============================================================================
Features
============================================================================

● Show the character's face in a window apart from the message box.
● Use any face size.
● Show the window using "easing animations"!
● Choose the tone and type of background!
● Animated faces!
● Different animations for when the message box is writing and when it is 
not (Idle and Talk animations).

============================================================================
How to use
============================================================================

https://docs.google.com/document/d/12ZYjKgfFfGmeLa53UVAH1pNprzktTEzoms7BFMNIl5s/edit?usp=sharing

============================================================================

@param switchId
@text Switch: Disable Face Window
@type switch
@desc If this switch is on, the external face window will not show.
@default 0

@param switchIdAnimation
@text Switch: Disable Face Animation
@type switch
@desc If this switch is on, the face animation inside the external face window will be disabled.
@default 0

@param separator1
@text Face Window

@param windowWidth
@text Width
@type number
@desc The width of the window
@default 144
@parent separator1

@param windowHeight
@text Height
@type number
@desc The height of the window
@default 144
@parent separator1

@param padding
@text Padding
@type number
@desc The empty space size between the edges of the face image and the window border.
@default 12
@parent separator1

@param backgroundType
@text Background type
@type boolean
@desc Set to true if you to always get the message background type.
@default true
@parent separator1

@param windowTone
@text Tone
@type text
@desc Choose the default tone for the window. Can use rgb, hex or html colors.
@default 0,0,0
@parent separator1

@param hideSkin
@text Hide Skin
@type boolean
@desc Set to true if you want to hide the window skin. Only works with Background type to false.
@default false
@parent separator1

@param topPos
@text Top Position
@type struct<positionSt>
@desc The position of the face window when the message is on top.
@default {"initial":"","frames":"5","easing":"linear","outsideX":"none","outsideY":"bottom","target":"","alignX":"left","offsetX":"0","alignY":"bottom","offsetY":"0"}
@parent separator1

@param centerPos
@text Center Position
@type struct<positionSt>
@desc The position of the face window when the message is on center.
@default {"initial":"","frames":"5","easing":"linear","outsideX":"none","outsideY":"top","target":"","alignX":"center","offsetX":"0","alignY":"top","offsetY":"0"}
@parent separator1

@param bottomPos
@text Bottom Position
@type struct<positionSt>
@desc The position of the face window when the message is on bottom.
@default {"initial":"","frames":"5","easing":"linear","outsideX":"none","outsideY":"top","target":"","alignX":"left","offsetX":"24","alignY":"top","offsetY":"24"}
@parent separator1

@param separator2
@text Face Image

@param faceWidth
@text Face Width
@type number
@desc The width of the face
@default 144
@parent separator2

@param faceHeight
@text Face Height
@type number
@desc The height of the face
@default 144
@parent separator2

@param faceSettings
@text Animate Face Settings
@type struct<faceSettingsSt>[]
@desc Set all your animated face settings.
@default []
@parent separator2

*/

/* --------------------------- FACE IMAGE SETTINGS -------------------------- */
{

/*~struct~faceSettingsSt:

@param image
@text Face image
@type file
@dir img/faces
@desc The first index of this animated face.
@default

@param startIndex
@text Start Index
@type number
@desc The first index of this animated face.
@default 0

@param middleIndex
@text Idle Index
@type number
@desc The last index of the animated face when message is not writting.
@default 0

@param endIndex
@text Talking Index
@type number
@desc The last index of the animated face when message is writting. Must be equal or higher than Idle.
@default 0

@param frameSpeed
@text Frame Speed
@type number
@desc How fast, in frames, the face will change from start index to endIndex.
@default 30

*/

}

/* -------------------------------- POSITION -------------------------------- */
{
/*~struct~positionSt:

@param initial
@text Initial Positions

@param frames
@text Duration (Frames)
@type text
@desc Need to be above 0 for the easing movement to work.
@default 0
@parent initial
    
@param easing
@text Easing
@type select
@option linear @option --- In --- @option easeInQuad @option easeInCubic @option easeInQuart @option easeInQuint @option easeInSine @option easeInExpo @option easeInCirc @option easeInBack @option easeInBounce @option --- Out --- @option easeOutQuad @option easeOutCubic @option easeOutQuart @option easeOutQuint @option easeOutSine @option easeOutExpo @option easeOutCirc @option easeOutBack @option easeOutBounce @option --- In / Out --- @option easeInOutQuad @option easeInOutCubic @option easeInOutQuart @option easeInOutQuint @option easeInOutSine @option easeInOutExpo @option easeInOutCirc @option easeInOutBack @option easeInOutBounce @option --- Out / In --- @option easeOutInQuad @option easeOutInCubic @option easeOutInQuart @option easeOutInQuint @option easeOutInSine @option easeOutInCirc @option easeOutInExpo @option easeOutInBack @option easeOutInBounce
@desc Choose the easing type. The Duration need to be above 0.
@default linear
@parent initial

@param outsideX
@text Off Screen X
@type select
@option none
@option left
@option right
@desc The horizontal direction the window will come from.
@default left
@parent initial
    
@param outsideY
@text Off Screen Y
@type select
@option none
@option top
@option bottom
@desc The vertical direction the window will come from.
@default none
@parent initial

@param target
@text Target/Final Positions

@param alignX
@text Align X
@type select
@option none
@option left
@option center
@option right
@desc Select none to only use offset value.
@default right
@parent target
    
@param offsetX
@text Offset X
@type text
@desc The Offset X position.
@default 0
@parent target

@param alignY
@text Align Y
@type select
@option none
@option top
@option center
@option bottom
@desc Select none to only use offset value.
@default center
@parent target

@param offsetY
@text Offset Y
@type text
@desc The offset Y position.
@default 0
@parent target

*/
}

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_FaceWindow = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
{

/* --------------------------- WINDOW FACE MESSAGE --------------------------- */
class Window_FaceMessage extends Window_Base{

    initialize(rect){
        if(Utils.RPGMAKER_NAME === "MV"){
            super.initialize(rect.x, rect.y, rect.width, rect.height)
        }else{
            super.initialize(rect)
        }
        this.initPlus()
    }

    initPlus(){
        this.initMembers()
        this.initWindowTone()
        this.createFace()
        if(Plugin.param().hideSkin){
            this.hideWindowSkin()
        }
    }

    initWindowTone(){
        const tone = Plugin.param().windowTone
        this.setTone(...tone)
    }

    initMembers(){
        Plugin.hideAnime = anime({autoplay: false})
        Plugin.showAnime = anime({autoplay: false})
        this.faceIndex = -1
        this.faceName = ''
        this.index = 0
        this.padding = Plugin.param().padding
        this.posType = 0
        this.x = -1000
        this.y = -1000
    }

    createFace(){
        const version = Utils.RPGMAKER_NAME
        console.log()
        this[`createFace${version}`]()
    }

    createFaceMV(){
        this.faceSprite = new Sprite_FaceMessage()
        this._windowContentsSprite.addChild(this.faceSprite) // Inner Child
        this._windowContentsSprite.addChild(this.faceSprite) // Inner Child
        Plugin.sprite = this.faceSprite
    }

    createFaceMZ(){
        this.faceSprite = new Sprite_FaceMessage()
        this.addInnerChild(this.faceSprite)
        Plugin.sprite = this.faceSprite
    }

    refreshBackground() {
        this.setBackgroundType($gameMessage.background())
    }

    hideWindowSkin(){
        this.opacity = 0
    }

    start() {
        if(Plugin.param().backgroundType){
            this.refreshBackground()
        }

        if(this.messageSettingsAreChanged()){

            if($gameMessage.faceName()){
                this.refreshMoveAnimations()
                this.refreshFaceSprite($gameMessage.faceName(), $gameMessage.faceIndex())
                Plugin.showAnime.play()
            }else{
                Plugin.hideAnime.play()
            }
            
        }

        this.refreshMessageSettings()
    }

    messageSettingsAreChanged(){
        return  this.faceName !== $gameMessage.faceName() || 
                this.faceIndex !== $gameMessage.faceIndex() ||
                this.posType !== $gameMessage.positionType()
    }

    refreshMoveAnimations(){
        const [initialX, initialY, targetX, targetY, frames, easing] = this.getMoveAnimationData()
        Plugin.showAnime = anime(this.createShowAnimation(initialX, initialY, targetX, targetY, frames, easing))
    }

    getMoveAnimationData(){
        const posType = $gameMessage.positionType()
        const {alignX, offsetX, alignY, offsetY, outsideX, outsideY, frames, easing} = Plugin.getPositionData(posType)
        const [targetX, targetY] = Plugin.findTargetCoordinates(alignX, offsetX, alignY, offsetY)
        const [initialX, initialY] = Plugin.findInitialCoordinates(outsideX, outsideY, targetX, targetY)

        return [initialX, initialY, targetX, targetY, frames, easing]
    }

    createShowAnimation(initialX, initialY, targetX, targetY, frames, easing){
        return {
            targets: this,
            x: [initialX, targetX],
            y: [initialY, targetY],
            round: 1,
            easing: easing,
            duration: frames,
            autoplay: false,
            update: (anim) => {
                if(SceneManager.isSceneChanging()){
                    anim.pause()
                }
            },
            complete: () => {
                this.refreshHideAnimation(initialX, initialY, easing, frames)
            }
        }
    }

    refreshHideAnimation(initialX, initialY, easing, frames){
        Plugin.hideAnime = anime(this.createHideAnimation(initialX, initialY, easing, frames))
    }

    createHideAnimation(initialX, initialY, easing, frames){
        return {
            targets: this,
            x: initialX,
            y: initialY,
            round: 1,
            easing: easing,
            duration: frames,
            autoplay: false,
            update: (anim) => {
                if(SceneManager.isSceneChanging()){
                    anim.pause()
                }
            },
            complete: (anim) => {
                this.refreshMessageSettings()
                Plugin.hideAnime = anime({autoplay: false})
            }
        }
    }

    refreshMessageSettings(){
        this.faceName = $gameMessage.faceName()
        this.faceIndex = $gameMessage.faceIndex()
        this.posType = $gameMessage.positionType()
    }

    refreshFaceSprite(faceName, faceIndex){
        this.faceSprite.refreshFaceBitmap(faceName, faceIndex)
    }

    update(){
        super.update()
        this.updateVisibility()
        this.openness = SceneManager._scene._messageWindow.openness
    }

    updateVisibility(){
        this.visible = Plugin.isFaceWindowEnabled()
    }

    updateTone() {
        const tone = Plugin.param().windowTone
        this.setTone(...tone)
    }

}

/* ------------------------------- SPRITE FACE ------------------------------ */
class Sprite_FaceMessage extends Sprite{

    initialize(bitmap){
        super.initialize(bitmap)
        this.faceIndex = 0
        this.frameCount = 0
        this.setFrame(0, 0, Plugin.param().faceWidth, Plugin.param().faceHeight)
    }

    refreshSettings(){
        this.faceIndex = $gameMessage.faceIndex()
        this.frameCount = 0
    }

    refreshFaceBitmap(faceName, faceIndex){
        this.refreshSettings()
        this.bitmap = ImageManager.loadFace(faceName)
        this.bitmap.addLoadListener(this.refreshFaceFrame.bind(this, faceIndex))

        Plugin.setFaceSettings(faceName, faceIndex)
    }

    refreshFaceFrame(faceIndex){
        const faceWidth = Plugin.param().faceWidth
        const faceHeight = Plugin.param().faceHeight
        const cols = this.bitmap.width / faceHeight
        const rows = this.bitmap.height / faceWidth
        const index = faceIndex
        const x = index % cols * faceWidth
        const y = (Math.floor(index / cols) % rows) * faceHeight
        
        this.setFrame(x, y, faceWidth, faceHeight)
    }

    refreshAnimation(limitIndex){
        if(this.hasAnimatedFace()){
            this.frameCount++

            if(this.canChangeFaceIndex()){
                this.changeFaceIndex(limitIndex)
                this.refreshFaceFrame(this.faceIndex)
                this.frameCount = 0
            }
        }
    }

    canChangeFaceIndex(){
        return this.frameCount >= Plugin.getFaceSettings().frameSpeed
    }

    changeFaceIndex(limitIndex){
        if(this.faceIndex >= limitIndex){
            this.faceIndex = Plugin.getFaceSettings().startIndex
        }else{
            this.faceIndex += 1
        }
    }

    hasAnimatedFace(){
        return $gameMessage.faceName() && Plugin.isFaceWindowAnimationEnabled()
    }

}

/* ------------------------------ PLUGIN OBJECT ----------------------------- */

Eli.FaceWindow = {

    version: 5.11,
    url: "https://hakuenstudio.itch.io/eli-face-window-for-rpg-maker-mz",
    alias: {},
    parameters: {
        switchId: 0,
        switchIdAnimation: 0,
        windowWidth: 0,
        windowHeight: 0,
        faceWidth: 0,
        faceHeight: 0,
        topPos:{
            alignX: "right",
            alignY: "center",
            easing: "linear",
            frames: 0,
            offsetX: 0,
            offsetY: 0,
            outsideX: "none",
            outsideY: "none"
        },
        centerPos:{
            alignX: "right",
            alignY: "center",
            easing: "linear",
            frames: 0,
            offsetX: 0,
            offsetY: 0,
            outsideX: "none",
            outsideY: "none"
        },
        bottomPos:{
            alignX: "right",
            alignY: "center",
            easing: "linear",
            frames: 0,
            offsetX: 0,
            offsetY: 0,
            outsideX: "none",
            outsideY: "none"
        },
        padding: 0,
        backgroundType: false,
        windowTone: '',
        hideSkin: false,
        faceSettings: [{
            endIndex: 0,
            frameSpeed: 0,
            image: '',
            middleIndex: 0,
            startIndex: 0,
        }],
    },
    Window_FaceMessage: Window_FaceMessage,
    Sprite_FaceMessage: Sprite_FaceMessage,
    container: null,
    sprite: null,
    currentFaceSettings: {
        image: "",
        startIndex: 0,
        middleIndex: 0,
        endIndex: 0,
        frameSpeed: Infinity,
    },
    showAnime: anime({autoplay: false}),
    hideAnime: anime({autoplay: false}),

    initialize(){
        this.initParameters()
        this.initPluginCommands()
    },

    initParameters(){
        let parameters = this.parameters
        parameters = PluginManager.parameters("Eli_FaceWindow")
        parameters.switchId = Number(parameters.switchId)
        parameters.switchIdAnimation = Number(parameters.switchIdAnimation)
        parameters.windowWidth = Number(parameters.windowWidth)
        parameters.windowHeight = Number(parameters.windowHeight)
        parameters.faceWidth = Number(parameters.faceWidth)
        parameters.faceHeight = Number(parameters.faceHeight)
        parameters.padding = Number(parameters.padding)
        parameters.hideSkin = parameters.hideSkin === "true"
        parameters.backgroundType = parameters.backgroundType === "true"
        parameters.windowTone = Eli.ColorManager.getRgb(parameters.windowTone)

        parameters.faceSettings = JSON.parse(parameters.faceSettings)

        for(let i = 0; i < parameters.faceSettings.length; i++){
            parameters.faceSettings[i] = this.parseFaceSettings(parameters.faceSettings[i])
        }

        parameters.topPos = this.parsePositionParameters(parameters.topPos)
        parameters.centerPos = this.parsePositionParameters(parameters.centerPos)
        parameters.bottomPos = this.parsePositionParameters(parameters.bottomPos)

        delete parameters.separator1
        delete parameters.separator2

        this.parameters = parameters
    },

    parseFaceSettings(settings){
        const param = JSON.parse(settings)
        param.startIndex = Number(param.startIndex)
        param.middleIndex = Number(param.middleIndex)
        param.endIndex = Number(param.endIndex)
        param.frameSpeed = Number(param.frameSpeed)

        return param
    },

    parsePositionParameters(settings){
        const position = JSON.parse(settings)
        position.frames = Eli.Date.framesToMiliSeconds(Number(position.frames))
        position.offsetX = position.offsetX
        position.offsetY = position.offsetY
        delete position.initial
        delete position.target

        return position
    },

    initPluginCommands(){},

    param(){
        return this.parameters
    },

    findInitialCoordinates(outsideX, outsideY, targetX, targetY) {
        let x = targetX
        let y = targetY
    
        if(outsideX === "left"){
            x = -this.getWindowWidth()
        } else if(outsideX === "right"){
            x = Graphics.width + this.getWindowWidth()
        }
    
        if(outsideY === "top"){
            y = -this.getWindowHeight()
        } else if(outsideY === "bottom"){
            y = Graphics.height + this.getWindowHeight()
        }
        
        return [x, y]
    },

    findTargetCoordinates(alignX, offsetX, alignY, offsetY){
        offsetX = Number(Eli.Utils.processEscapeVarOrFormula(offsetX))
        offsetY = Number(Eli.Utils.processEscapeVarOrFormula(offsetY))
        return [
            Eli.Utils.calculateScreenPosition(alignX, offsetX, this.getWindowWidth(), "x", true),
            Eli.Utils.calculateScreenPosition(alignY, offsetY, this.getWindowHeight(), "y", true)
        ]
    },

    getPositionData(posType){
        const positions = {
            0: this.param().topPos,
            1: this.param().centerPos,
            2: this.param().bottomPos,
        }
        return positions[posType]
    },

    getWindowWidth(){
        return this.parameters.windowWidth + this.parameters.padding * 2
    },

    getWindowHeight(){
        return this.parameters.windowHeight + this.parameters.padding * 2
    },

    createEmptyFaceSetting(faceName, faceIndex){
        return {
            image: faceName,
            startIndex: faceIndex,
            middleIndex: 0,
            endIndex: 0,
            frameSpeed: Infinity,
        }
    },

    getFaceSettings(){
        return this.currentFaceSettings
    },

    setFaceSettings(faceName, faceIndex){
        const getSettings =  item => item.image === faceName && item.startIndex === faceIndex
        this.currentFaceSettings =  this.param().faceSettings.find(getSettings) || 
                                    this.createEmptyFaceSetting(faceName, faceIndex)
    },

    getFaceWindow(){
        return this.container
    },

    getFaceSprite(){
        return this.sprite
    },

    isFaceWindowDisabled(){
        const id = this.param().switchId
        return $gameSwitches.value(id)
    },

    isFaceWindowEnabled(){
        return !this.isFaceWindowDisabled()
    },

    isFaceWindowAnimationDisabled(){
        const id = this.param().switchIdAnimation
        return $gameSwitches.value(id)
    },

    isFaceWindowAnimationEnabled(){
        return !this.isFaceWindowAnimationDisabled()
    },
    
}

const Plugin = Eli.FaceWindow
const Alias = Eli.FaceWindow.alias

Plugin.initialize()

if(Utils.RPGMAKER_NAME === "MV"){

/* -------------------------------- SCENE MAP ------------------------------- */
Alias.Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows
Scene_Map.prototype.createAllWindows = function() {
    Alias.Scene_Map_createAllWindows.call(this)
    this.createFaceWindow()
}

Scene_Map.prototype.createFaceWindow = function(){
    const rect = this.faceWindowRect()
    this.faceMessageWindow = new Window_FaceMessage(rect)
    this.addWindow(this.faceMessageWindow)
    Plugin.container = this.faceMessageWindow
}

Scene_Map.prototype.faceWindowRect = function(){
    const ww = Plugin.getWindowWidth()
    const wh = Plugin.getWindowHeight()
    const wx = 0
    const wy = 0
    return new Rectangle(wx, wy, ww, wh)
}

}else{

/* ------------------------------ SCENE MESSAGE ----------------------------- */
Alias.Scene_Message_createAllWindows = Scene_Message.prototype.createAllWindows
Scene_Message.prototype.createAllWindows = function() {
    Alias.Scene_Message_createAllWindows.call(this)
    this.createFaceWindow()
}

Scene_Message.prototype.createFaceWindow = function(){
    const rect = this.faceWindowRect()
    this.faceMessageWindow = new Window_FaceMessage(rect)
    this.addWindow(this.faceMessageWindow)
    Plugin.container = this.faceMessageWindow
}

Scene_Message.prototype.faceWindowRect = function(){
    const ww = Plugin.getWindowWidth()
    const wh = Plugin.getWindowHeight()
    const wx = 0
    const wy = 0
    return new Rectangle(wx, wy, ww, wh)
}

}

/* ---------------------------- GAME INTERPRETER ---------------------------- */
{

Alias.Game_Interpreter_command101 = Game_Interpreter.prototype.command101
Game_Interpreter.prototype.command101 = function(params){
    if(!$gameMessage.isBusy()) {
        $gameMessage.setInterpreter(this)
    }

    return Alias.Game_Interpreter_command101.call(this, params)
}

Alias.Game_Interpreter_executeCommand = Game_Interpreter.prototype.executeCommand
Game_Interpreter.prototype.executeCommand = function() {
    const alias = Alias.Game_Interpreter_executeCommand.call(this)

    if(this.isMessageInterpreter() && this.canHideFaceWindow()){
       this.hideFaceWindow()
    }

    return alias
}

Game_Interpreter.prototype.isMessageInterpreter = function(){
    return this === $gameMessage.getInterpreter()
}

Game_Interpreter.prototype.canHideFaceWindow = function(){
    const currentCode = this.getCurrentCommandCode()
    const msgCodes = this.getAllowedCodesToShowFaceWindow()

    return !$gameMessage.isBusy() && !msgCodes.includes(currentCode)
}

Game_Interpreter.prototype.getCurrentCommandCode = function(){
    return this._list && this._list[this._index] ? this.currentCommand().code : 0
}

Game_Interpreter.prototype.getAllowedCodesToShowFaceWindow = function(){
    return [101, 401]
}

Game_Interpreter.prototype.hideFaceWindow = function(){
    Plugin.hideAnime.play()
}

}

/* ------------------------------ GAME MESSAGE ------------------------------ */
{

Alias.Game_Message_initialize = Game_Message.prototype.initialize
Game_Message.prototype.initialize = function() {
    Alias.Game_Message_initialize.call(this)
    this.interpreter = null
}

Game_Message.prototype.setInterpreter = function(interpreter){
    this.interpreter = interpreter
}

Game_Message.prototype.getInterpreter = function(){
    return this.interpreter
}

}

/* ----------------------------- WINDOW MESSAGE ----------------------------- */
{

Alias.Window_Message_initialize = Window_Message.prototype.initialize
Window_Message.prototype.initialize = function() {
    Alias.Window_Message_initialize.call(this)
    this._faceWindowAnimationState = "idle"
}

Alias.Window_Message_processCharacter = Window_Message.prototype.processCharacter
Window_Message.prototype.processCharacter = function(textState) {
    Alias.Window_Message_processCharacter.call(this, textState)
    this._faceWindowAnimationState = "talking"
}

Alias.Window_Message_startMessage = Window_Message.prototype.startMessage
Window_Message.prototype.startMessage = function() {
    Alias.Window_Message_startMessage.call(this)
    this.startFaceWindow()
}

Window_Message.prototype.startFaceWindow = function(){
    Plugin.getFaceWindow().start()
}

// Only MZ has textsate as an argument.
Alias.Window_Message_newLineX = Window_Message.prototype.newLineX
Window_Message.prototype.newLineX = function(textState){
    const alias = Alias.Window_Message_newLineX.call(this, textState)

    if(this.canRemoveMarginForFaceWindow()){
        const margin = this.getMarginForFaceWindow()

        return alias - margin
    }else{
        return alias
    }
}

Window_Message.prototype.canRemoveMarginForFaceWindow = function(){
    return $gameMessage.faceName() && Plugin.isFaceWindowEnabled()
}

Window_Message.prototype.getMarginForFaceWindow = function(){
    const faceWidth = Eli.Utils.getFaceSize().width
    const spacing = 20

    return faceWidth + spacing - 4
}

Alias.Window_Message_updateWait = Window_Message.prototype.updateWait
Window_Message.prototype.updateWait = function() {
    const alias = Alias.Window_Message_updateWait.call(this)
    if(alias){
        this._faceWindowAnimationState = "idle"
    }

    return alias
}

Alias.Window_Message_updateInput = Window_Message.prototype.updateInput
Window_Message.prototype.updateInput = function() {
    const alias = Alias.Window_Message_updateInput.call(this)
    if(alias){
        this._faceWindowAnimationState = "idle"
    }
    
    return alias
}

Alias.Window_Message_update = Window_Message.prototype.update
Window_Message.prototype.update = function() {
    Alias.Window_Message_update.call(this)
    this.updateFaceWindowAnimation()
}

Window_Message.prototype.updateFaceWindowAnimation = function() {
    if(this._faceWindowAnimationState === "idle"){
        this.updateIdleFaceWindow()

    }else if(this._faceWindowAnimationState === "talking"){
        this.updateTalkingFaceWindow()
    }
}

Window_Message.prototype.updateIdleFaceWindow = function(){
    Plugin.getFaceSprite().refreshAnimation(Plugin.getFaceSettings().middleIndex)
}

Window_Message.prototype.updateTalkingFaceWindow = function(){
    Plugin.getFaceSprite().refreshAnimation(Plugin.getFaceSettings().endIndex)
}

Alias.Window_Message_loadMessageFace = Window_Message.prototype.loadMessageFace
Window_Message.prototype.loadMessageFace = function(){
    Alias.Window_Message_loadMessageFace.call(this)
    if(Plugin.isFaceWindowEnabled()){
        this._faceBitmap = null
    }
}



}

}