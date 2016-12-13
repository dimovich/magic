(ns magic.util
  (:require [dommy.core :as d]
            [cljsjs.smooth-scroll]))

(defn get-width! [k]
  (-> (d/sel1 k)
      (d/set-text! (.-innerWidth js/window))))


(defn smooth-scroll []
  (.init js/smoothScroll))
