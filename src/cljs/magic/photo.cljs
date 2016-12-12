(ns magic.photo
  (:require [cljsjs.photoswipe]
            [cljsjs.photoswipe-ui-default]
            [hipo.core :as h]
            [dommy.core :as d :refer-macros [sel sel1]]))

(def pswp-slides (atom []))

(defn pswp-dom []
  (h/create
   [:div.pswp {:tabindex -1
               :role "dialog"
               :aria-hidden true}
    [:div.pswp__bg]
    [:div.pswp__scroll-wrap
     [:div.pswp__container
      [:div.pswp__item]
      [:div.pswp__item]
      [:div.pswp__item]]

     [:div.pswp__ui.pswp__ui--hidden
      [:div.pswp__top-bar
       [:div.pswp__counter]
       [:button.pswp__button.pswp__button--close {:title "Close (Esc)"}]
       [:button.pswp__button.pswp__button--share {:title "Share"}]
       [:button.pswp__button.pswp__button--fs {:title "Toggle fullscreen"}]
       [:button.pswp__button.pswp__button--zoom {:title "Zoom in/out"}]

       [:div.pswp__preloader
        [:div.pswp__preloader__icn
         [:div.pswp__preloader__cut
          [:div.pswp__preloader__donut]]]]]

      [:div.pswp__share-modal.pswp__share-modal--hidden.pswp__single-tap
       [:div.pswp__share-tooltip]]

      [:button.pswp__button.pswp__button--arrow--left {:title "Previous (arrow left)"}]
      [:button.pswp__button.pswp__button--arrow--right {:title "Next (arrow right)"}]
      [:div.pswp__caption
       [:div.pswp__caption__center]]]]]))



(defn show-pswp [idx]
  (let [pswp (sel1 :.pswp)
        items (clj->js @pswp-slides)
        options #js {:index idx}
        gallery (js/PhotoSwipe. pswp js/PhotoSwipeUI_Default items options)]
    (.init gallery)))


;;
;; extract data from children of gallery container
;; and build pswp slides
;; also add onclick events for links
;;
(defn create-pswp-slides [xpath]
  (for [el (sel xpath)
        :let [;;index
              idx (js/parseInt (d/attr el :index))
              ;;medium size
              msrc (d/attr (aget (d/children el) 0) :src)
              ;;big size
              src (d/attr el :href)
              ;;dimensions
              [w h] (clojure.string/split (d/attr el :image-size) #"x")
              ;;register onclick event
              _ (d/listen! el :click (fn [e]
                                       (.preventDefault e)
                                       (show-pswp idx)))]]
    {:src src
     :msrc msrc
     :w (js/parseInt w)
     :h (js/parseInt h)}))



(defn init-pswp [id]
  ;; add DOM
  (d/append! (sel1 id) (pswp-dom)))


;;
;; slider generator
;;
(defn slider [sl cont sgn step k]
  (fn [e]
    (.preventDefault e)
    (let [bb (d/bounding-client-rect sl)
          bb2 (d/bounding-client-rect cont)
          pos (d/px sl :margin-left)
          lim (- (k bb2) (k bb))
          x (- lim pos)
          x (if (sgn step x) x step)]

      (when (sgn lim pos)
        (d/set-px! sl :margin-left (+ pos x))))))



(defn init-slider []
  (let [left (d/sel1 :.gprev)
        right (d/sel1 :.gnext)
        gsl (d/sel1 :.g-slider)
        gc (d/sel1 :.g-container)]

    (d/listen! left :click (slider gsl gc > 300 :left))
    (d/listen! right :click (slider gsl gc < -300 :width))))



(defn init-photo []
  (init-pswp :#pswp)

  ;; create slides
  (swap! pswp-slides into (create-pswp-slides [:.g-container :.image]))

  (init-slider))

