(ns magic.menu
  (:require [magic.ham :as h]
            [magic.util :as u]))

(defn ^:export init []
  (h/setup-ham)
  (u/smooth-scroll)
  (u/waypoints :#food-link :#food
               :#beer-link :#beer
               :#drinks-link :#drinks))
