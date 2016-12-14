(ns magic.util
  (:require [dommy.core :as d]
            [cljsjs.smooth-scroll]
            [cljsjs.waypoints]))

(enable-console-print!)

(defn get-width! [k]
  (-> (d/sel1 k)
      (d/set-text! (.-innerWidth js/window))))


(defn smooth-scroll []
  (.init js/smoothScroll))

;; leaving up -> check previous
;; entering -> toggle

(defn waypoints [& args]
  (let [args (partition 2 args)
        prevs (-> (map first args)
                  (#(drop-last (into [(first %)] %))))
        xs (map cons prevs args)]
    (doseq [[prev el anchor] xs]
      (let [el (d/sel1 el)
            anchor (d/sel1 anchor)
            prev (d/sel1 prev)]
        (js/Waypoint. (clj->js {:element anchor
                                :handler (fn []
                                           (d/toggle-class! el "is-active")
                                           (when-not (= prev el)
                                               (d/toggle-class! prev "is-active")))
                                :offset "50%"}))))))



(def days-in-moth [])
