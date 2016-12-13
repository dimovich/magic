(ns magic.index
  (:require [cljsjs.waypoints]
            [magic.ham :as ham]
            [magic.util :as u]
            [magic.photo :as p]))


(defn ^:export init []
  (ham/setup-ham)
  (p/init-photo)
  (u/smooth-scroll))


;;  (.addEventListener    js/window   "DOMContentLoaded"   (fn []     ))
