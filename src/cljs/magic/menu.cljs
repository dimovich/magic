(ns magic.menu
  (:require [magic.ham :as h]
            [magic.util :as u]))

(defn ^:export init []
  (h/setup-ham)
  (u/smooth-scroll))
