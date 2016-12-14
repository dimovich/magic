(ns magic.util
  (:require [dommy.core :as d]
            [cljsjs.smooth-scroll]
            [cljsjs.waypoints]))

(defn get-width! [k]
  (-> (d/sel1 k)
      (d/set-text! (.-innerWidth js/window))))


(defn smooth-scroll []
  (.init js/smoothScroll))


(defn waypoints [& args]
  (doseq [[el anchor] (partition 2 args)]
    (let [el (d/sel1 el)
          anchor (d/sel1 anchor)]
      (js/Waypoint. (clj->js {:element anchor
                              :handler #(d/toggle-class! el "is-active")})))))



(def days-in-moth [])
