(ns magic.index
  (:require [cljsjs.waypoints]
            [cljsjs.smooth-scroll]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [hipo.core :as hipo]
            [magic.ham :as ham]
            [magic.util :as u]
            [magic.photo :as p]))


(defn ^:export init []
  (u/get-width! :#debug)
  (ham/setup-ham)
  (p/init-photo :#photo))
