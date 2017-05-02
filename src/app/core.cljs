(ns app.core)

(def React (js/require "react"))
(def ReactNative (js/require "react-native"))
(def Expo (js/require "expo"))

(def createFactory (aget React "createFactory"))
(def createClass (aget React "createClass"))
(def registerRootComponent (aget Expo "registerRootComponent"))

(def Text (createFactory (aget ReactNative "Text")))

(def style
  #js {
       :flex 1
       :fontSize 18
       :paddingTop 80
       :textAlign "center"
       })

(def App (createClass #js {:render #(Text. #js {:style style} "Hello from Cljs")}))

(registerRootComponent App)
