(ns magic.ham
  (:require [dommy.core :as dommy :refer-macros [sel sel1]]))

(def ham-visible (atom false))


(defn toggle-ham! [e]
  (.stopPropagation e)

  (let [el (sel1 :#sidenav)]
    (if @ham-visible
      (dommy/set-attr! el :style "opacity:0;pointer-events:none;")
      (dommy/set-attr! el :style "opacity:1;pointer-events:auto;"))
    (dommy/toggle-class! (sel1 :.hambtn) "is-active")
    (swap! ham-visible not)))


(defn close-ham! [e]
  (when @ham-visible
    (toggle-ham! e)))


(defn setup-ham []
  (dommy/listen! (sel1 :.hambtn) :click toggle-ham!)
  (dommy/listen! (sel1 :body) :click close-ham!)

  (dommy/listen! (sel1 :body) :keyup (fn [e]
                                       (if (= (.-keyCode e) 27)
                                         (close-ham! e))))
  
  ;;(dommy/listen! (sel1 :document) :scroll close-ham!)
  )


;; TODO:
;; - add fullscreen menu
;; - try photoswipe


;; Verona
;; Venezia
;; Rome (air moldova)
