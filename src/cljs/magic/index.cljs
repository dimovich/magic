(ns magic.index
  (:require [magic.ham :as ham]
            [magic.util :as u]
            [magic.photo :as p]
            [ajax.core :refer [GET]]))



(defn ^:export init []
  (ham/setup-ham)
  (p/init-photo)
  (u/smooth-scroll)
  (u/init-calendar "/assets/events.txt"
                   :#month-name
                   :#calendar-container))


#_{"4-11-2016" "FUNGHI NIGHT"
   "11-11-2016" "BAGNA CAUDA NIGHT"
   "27-11-2016" "TORNEO BACKGAMMON"}
