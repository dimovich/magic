(ns magic.util
  (:require [hickory.core :refer [parse parse-fragment as-hiccup]]
            [clj-time.core :refer [number-of-days-in-the-month
                                   today
                                   month
                                   year]])
  (:import [java.io File FileInputStream]
           [javax.imageio.ImageIO]))




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
        [:a.c-event.overlay {:href (str "events.html#" (:link (evts i)))} (:name (evts i))]]])))




(defn ham [& args]
  [:div#ham.ham-c
   [:div.hambtn-c.clickable
    ;;[:span.hambtn {:style "font-size:40px;width:50px;cursor:pointer"} "&#9776;"]
    [:div.hambtn.hamburger {:class "hamburger--collapse"}
       [:div.hamburger-box
        [:div.hamburger-inner]]]]
   ;; add menu links
   (into [:div#sidenav.sidenav.disabled]
         (map #(let [[n h] %]
                 [:div [:a {:href h} n]])
              (partition 2 args)))])



(defn ham2 []
  [:nav.nav-collapse
   [:ul
    [:li [:a {:href "#"} "HOME"]]
    [:li [:a {:href "#"} "About"]]]])


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



(defn files-in-dir
  ([dir]
   (filter #(not (.isDirectory %))
           (.listFiles (java.io.File. dir))))
  ([dir r]
   (filter #(re-matches r (.getName %)) (files-in-dir dir))))


(defn get-image-sizes
  [files]
  (map (fn [file]
         (with-open [r (java.io.FileInputStream. file)]
           (let [img (javax.imageio.ImageIO/read r)]
             [(.getName file) (.getWidth img) (.getHeight img)])))
       files))



(def image-sizes (get-image-sizes (files-in-dir "html/assets/photo/big/" #"^g.*")))

;;
;; generate photo list
;;
(defn photos [path]
  (let [rpath (str path "/reduced/")
        bpath (str path "/big/")]
    
    [:div#photos.g-container
     [:a.gnext "next"]
     [:a.gprev "prev"]
     (into [:div.g-slider]
           (let [p (map-indexed #(let [[fname width height] %2]
                                   [:div.image-wrap
                                    [:div.border-wrap
                                     [:div.image.clickable {:href (str bpath fname)
                                                            :index %1
                                                            :image-size (str width "x" height)}
                                      [:img {:src (str rpath fname)}]]]])
                                image-sizes)
                 c (count p)
                 r (interpose '([:br]) (split-at (/ c 2) p))]
            
             (apply concat r)))]))

