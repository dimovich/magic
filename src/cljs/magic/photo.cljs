(ns magic.photo
  (:require [cljsjs.photoswipe]
            [cljsjs.photoswipe-ui-default]
            [hipo.core :as hipo]
            [dommy.core :as dommy :refer-macros [sel sel1]]))


(defn photo-dom []
  (hipo/create
   [:div.pswp {:tabindex -1
               :role "dialog"
               :aria-hidden true}
    [:div.pswp__bg]]
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
      [:button.pswp__button.pswp__button-fs {:title "Toggle fullscreen"}]
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
      [:div.pswp__caption__center]]]]))




(defn init-photo [id]
  ;; add DOM
  (-> (sel1 id)
      (dommy/append! (photo-dom)))

  ;; init photoswipe
  (let [pswp (sel1 :.pswp)
        items (clj->js [{:src "assets/photo/big/g01.jpg"
                         :w 2048
                         :h 1536}
                        {:src "assets/photo/big/g02.jpg"
                         :w 560
                         :h 420}
                        {:src "assets/photo/big/g03.jpg"
                         :w 1743
                         :h 1307}])
        options #js {:index 0}
        gallery (js/PhotoSwipe pswp js/PhotoSwipeUI_Def items options)]
    (.init gallery)))
