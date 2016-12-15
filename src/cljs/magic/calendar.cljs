(ns magic.calendar
  (:require [hipo.core :as h]
            [ajax.core :refer [GET]]
            [dommy.core :as d])
  
  (:import goog.date.Date))



(def date (Date.))

(def month-name ["January" "February" "March" "April" "May"
                 "June" "July" "August" "September" "October"
                 "November" "December"])



(defn- days-in-month [year month]
  [year month
   (.getNumberOfDaysInMonth goog.date year month)
   (nth month-name month)])

(defn- get-current-month []
  (let [year (.getFullYear date)
        month (.getMonth date)]
    (days-in-month year month)))


(defn- gen-calendar [evts [year month days _]]
  (h/create
   [:ul.calendar-day
    (let [month (inc month)]
      (for [i (range 1 (inc days))
            :let [id (str i "-" month "-" year)]]
        [(keyword (str "li#" id)) i
         [:div.c-day-c
          [:a.c-event.overlay {:href (str "events.html#" id)} (evts id)]]]))]))


(def current-month (atom (get-current-month)))

(defn- dec-month [[year month days mname]]
  (if (zero? month)
    (days-in-month (dec year) 11)
    (days-in-month year (dec month))))

(defn- inc-month [[year month days mname]]
  (if (= 11 month)
    (days-in-month (inc year) 0)
    (days-in-month year (inc month))))



(defn init-calendar [url m-id d-id]
  (let [days-el (d/sel1 d-id)
        month-el (d/sel1 m-id)
        events-handler (fn [s]
                         (let [evts (->> (re-seq #"(^[\d-]*)\s+(.*)\n" s)
                                         (mapcat rest)
                                         (apply hash-map))
                               setup (fn [[year _ _ month-name :as cm]]
                                       (d/replace-contents! days-el (gen-calendar evts cm))
                                       (d/set-text! month-el (str month-name " " year)))]
                           
                           (setup @current-month)
    
                           (d/listen! (d/sel1 :#prev-month)
                                      :click
                                      (fn [e]
                                        (.preventDefault e)
                                        (setup (swap! current-month dec-month))))

                           (d/listen! (d/sel1 :#next-month)
                                      :click
                                      (fn [e]
                                        (.preventDefault e)
                                        (setup (swap! current-month inc-month))))))]
    
    (GET url {:handler events-handler})))

