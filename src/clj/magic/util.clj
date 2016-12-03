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


(defn gen-month-days [evts]
  (let [evts (or evts {}) 
        t (today)
        cm (month t)
        cy (year t)]
    (for [i (range 1 31 #_(inc (number-of-days-in-the-month t)))]
      [(keyword (str "li#" cy "-" cm "-" i)) i
       [:div.c-day-c
        [:a.c-event.overlay {:href (str "events#" (:link (evts i)))} (:name (evts i))]]])))


(defn ham [& args]
  [:div#ham.ham-c
   [:div.text-right.hambtn-c
    ;;[:span.hambtn {:style "font-size:30px;cursor:pointer"} "&#9776;"]
    [:div.hambtn.hamburger {:class "hamburger--collapse"}
     [:div.hamburger-box
      [:div.hamburger-inner]]]]
   ;; add menu links
   (into [:div#sidenav.sidenav]
         (map #(let [[n h] %]
                 [:div [:a {:href h} n]])
              (partition 2 args)))])



(defn only-files
  "Filter a sequence of files/directories by the .isFile property of
  java.io.File"
  [file-s]
  (filter #(.isFile %) file-s))


(defn names
  "Return the .getName property of a sequence of files"
  [file-s]
  (map #(.getName %) file-s))


(defn get-file-names [path r]
  (->> path
       clojure.java.io/file
       file-seq
       only-files
       names
       (filter #(re-matches r %))
       sort))
