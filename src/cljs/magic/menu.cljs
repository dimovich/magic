(ns magic.menu
  (:require [magic.ham :as h]))

(defn ^:export init []
  (h/setup-ham))
