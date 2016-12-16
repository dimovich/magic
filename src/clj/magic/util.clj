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
    [:ul
     (for [i (range 1 31 #_(inc (number-of-days-in-the-month t)))
           (:let [id (str i "-" cm "-" cy)])]
       [(keyword (str "li#" id))
        [:div.day i]
        [:div.event
         [:a.overlay {:href (str "events.html#" id)} (evts id)]]])]))




(defn ham [& args]
  [:div
   [:div#hambtn.hambtn.clickable.hamburger {:class "hamburger--collapse"}
    [:div.hamburger-box
     [:div.hamburger-inner]]]
   (into [:div#sidenav.sidenav.disabled]
         (map #(let [[n h] %]
                 [:div [:a {:href h :data-scroll true} n]])
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
     [:a.gnext]
     [:a.gprev]
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





(defn copyright []
  [:div.footer.copyright-text.overlay
   [:div.left
    [:p.text-left
     "© 2016 La nave dei folli"
     [:br]
     "c.f./p.iva (Mistrin s.r.l.s - 11479100015"]]
   [:div.right
    [:p
     "Webdesign: MAGIdesign"]]])
