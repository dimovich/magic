(ns magic.util
  (:require [hickory.core :refer [parse parse-fragment as-hiccup]]
            [clj-time.core :refer [number-of-days-in-the-month
                                   today
                                   month
                                   year]]))


(defn svg-to-hiccup [path]
  (->> path
       slurp
       parse
       as-hiccup
       first
       (drop 3)
       first
       (drop 2)
       first))


(defn gen-month-days []
  (let [t (today)
        cm (month t)
        cy (year t)]
    (for [i (range 1 (inc (number-of-days-in-the-month t)))]
      [(keyword (str "li#" cy "-" cm "-" i)) i
       [:div.c-day-c
        [:span.c-event.overlay "FUNGI Night (marsh)"]]])))


(defn ham [& args]
  [:div.ham-c
   [:div.text-right.hambtn
    [:span {:style "font-size:30px;cursor:pointer" :onclick "toggleham()"} "&#9776;"]]
   (into [:div#sidenav.sidenav]
         (map #(let [[n h] %]
                 [:div [:a {:href h} n]])
              (partition 2 args)))])
