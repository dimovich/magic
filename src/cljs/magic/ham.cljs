(ns magic.ham
  (:require [dommy.core :as dommy :refer-macros [sel sel1]]))

(def ham-visible (atom false))

(defn toggler [nav btn]
  (fn [e]
    (.stopPropagation e)
    (dommy/toggle-class! nav "disabled")
    (dommy/toggle-class! btn "is-active")
    (swap! ham-visible not)))

(defn setup-ham []
  (let [nav (sel1 :#sidenav)
        btn (sel1 :.hambtn)
        toggle-ham! (toggler nav btn)
        close-ham! (fn [e]
                     (when @ham-visible
                       (toggle-ham! e)))]
    
    (dommy/listen! btn :click toggle-ham!)
    (dommy/listen! (sel1 :body) :click close-ham!)
    (dommy/listen! (sel1 :body) :keyup (fn [e]
                                         (if (= (.-keyCode e) 27)
                                           (close-ham! e))))))
