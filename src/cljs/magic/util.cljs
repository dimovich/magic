(ns magic.util
  (:require [dommy.core :as d]
            [cljsjs.smooth-scroll]
            [cljsjs.waypoints]
            [cljsjs.clipboard]))


(defn get-width! [k]
  (-> (d/sel1 k)
      (d/set-text! (.-innerWidth js/window))))


(defn smooth-scroll []
  (.init js/smoothScroll))


(defn waypoints [& args]
  (let [args (partition 2 args)
        prevs (-> (map first args)
                  (#(drop-last (into [nil] %))))
        xs (map cons prevs args)]
    (doseq [[prev el anchor] xs]
      (let [el (d/sel1 el)
            anchor (d/sel1 anchor)
            prev (when prev (d/sel1 prev))]
        (js/Waypoint. (clj->js {:element anchor
                                :handler (fn []
                                           (d/toggle-class! el "is-active")
                                           (when prev
                                             (d/toggle-class! prev "is-active")))
                                :offset "50%"}))))))





(defn clipboard [el]
  (let [el (d/sel1 el)]
    (js/Clipboard. el)
    (d/listen! el :click #(js/alert "WhatsApp ID copied to clipboard."))))
