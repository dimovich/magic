(ns magic.index
  (:require [cljsjs.waypoints]
            [cljsjs.smooth-scroll]
            [magic.ham :as ham]
            [magic.util :as u]
            [magic.photo :as p]))


(defn ^:export init []
  (u/get-width! :#debug)
  (ham/setup-ham)
  (p/init-photo :#photoswipe))
