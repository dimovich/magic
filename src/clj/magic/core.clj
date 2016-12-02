(ns magic.core 
  (:require [compojure.core :refer [defroutes GET POST]]
            [compojure.route :refer [not-found files resources]]
            [compojure.handler :refer [site]]
            [net.cgrand.enlive-html :as enlive]
            [magic.templates.index :refer [index]]
            [magic.templates.menu :refer [menu]]
            [magic.templates.events :refer [events]]))



(defroutes handler
  (GET "/" [] (index))
  (GET "/menu" [] (menu))
  (GET "/events" [] (events))
  (files "/" {:root "target"})     ;; to serve static resources
  (resources "/" {:root "target"}) ;; to serve anything else
  (not-found "Page Not Found"))    ;; page not found


(def app
  (-> handler
      (site)))

