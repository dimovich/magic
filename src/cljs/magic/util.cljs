(ns magic.util
  (:require [dommy.core :as d]))

(defn get-width! [k]
  (-> (d/sel1 k)
      (d/set-text! (.-innerWidth js/window))))
