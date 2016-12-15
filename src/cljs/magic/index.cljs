(ns magic.index
  (:require [magic.ham :as h]
            [magic.util :as u]
            [magic.photo :as p]
            [magic.calendar :as c]))



(defn ^:export init []
  (h/setup-ham)
  (p/init-photo)
  (u/smooth-scroll)
  (c/init-calendar "assets/events.txt"
                   :#month-name
                   :#calendar-container))
