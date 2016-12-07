(ns magic.core
  (:require [cljsjs.photoswipe]
            [cljsjs.waypoints]
            [cljsjs.smooth-scroll]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [hipo.core :as hipo]
            [magic.ham :as ham]))


(defn get-width! []
  (-> (sel1 :#debug)
      (dommy/set-text! (.-innerWidth js/window))))


(defn ^:export init []
  (get-width!)
  (ham/setup-ham))

