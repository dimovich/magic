(ns magic.templates.index
  (:require [net.cgrand.enlive-html :refer [deftemplate
                                            html-content]]
            [hiccup.core :refer [html]]
            [magic.util :refer [svg-to-hiccup
                                gen-month-days
                                ham]]))



;; 
;;
;; 1356x764

(defn content []
  (html
   [:div (ham "HOME" "#top"
              "MENÙ" "menu#food"
              "CHI SIAMO" "#che-siamo"
              "EVENTI" "/events"
              "GALLERIA" "#gallery"
              "CONTATTI" "#contacts")]
   [:div.wrap.centered
    [:div.content
     ;;
     ;; LOGO
     ;;
     [:div.centered
     
      [:div.top-logo-container
       [:div.top-border
        (svg-to-hiccup "html/assets/svg/border-top3.svg")]
       [:img.top-logo {:src "assets/img/lanave.png"}]
       [:div.top-logo-motto.overlay
        "Beer Lounge & Restaurant"]]]

     ;;
     ;; MENU
     ;;
     [:div.container-fluid.vspace-section1
      [:div.row.vcenter-section1
       [:div.centered.clickable {:class "col-md-4"
                                 :onclick "window.location='menu#food';"}
        [:div.m-icon
         (svg-to-hiccup "html/assets/svg/plate3.svg")]
        [:div.m-title
         "MENÚ RISTO-PUB"]
        [:div.m-text-container
         [:span.m-text
          "Scopri le nostre proposte, prova i nostri piatti preparati con ingredienti freschi del territorio"]]]
       [:div.centered.clickable {:class "col-md-4"
                                 :onclick "window.location='menu#beer';"}
        [:div.m-icon
         (svg-to-hiccup "html/assets/svg/beer3.svg")]
        [:div.m-title
         "BIRRE"]
        [:div.section-text-container
         [:span.m-text
          "Vieni a degustare la nostra selezione di etichette italiane ed internazionali"]]]
       [:div.centered.clickable {:class "col-md-4"
                                 :onclick "window.location='menu#drinks';"}
        [:div.m-icon
         (svg-to-hiccup "html/assets/svg/drinks3.svg")]
        [:div.m-title
         "DRINK DIFFERENT"]
        [:div.m-text-container
         [:span.m-text
          "Scopri la nostra riserva di distillati da tutto il mondo, le nostre bibite e gli infusi biologici"]]]]]


     ;;
     ;; CHI SIAMO
     ;;
     [:div.vspace-full
      [:p.text-center.section-title.overlay
       "CHI SIAMO"]
      [:p.section-text.text-justify
       "Un manipolo di folli che si sono detti: «Imbarchiamoci!». Così è nata «la nave dei folli», in omaggio al genio fiammingo del XV secolo, il pittore Jheronimus Bosch. Tuttavia, più che di pittura ci intendiamo di mangiare e bere: dall’esperienza di un pr duttore birraio, dalla competenza di un ristoratore incallito e dalla creatività del cuoco, a cui si aggiunge la professionalità di una figura esperta in comunicazione e marketing, è nata l’idea di un locale consacrato alla degustazione di birre rigorosamente artigianali, abbinate a pietanze tradizionali e piatti creativi. L’attenzione alle materie prime, la scelta di prodotti del territorio, provenienti da piccole realtà artigiane, costituiscono i nostri punti di forza. A tutte queste proposte abbiamo voluto aggiungere un’attrattiva culturale, invitando tutti i mesi artisti, attori di teatro, musicisti, sommelier, per creare serate a tema, eventi, concerti dal vivo e degustazioni."]
      [:div.c-img-container
       [:img.img-border {:src "assets/photo/reduced/chi_siamo.jpg"}]]]


     ;;
     ;; EVENTI
     ;;
     [:div.vspace-full
      [:p.text-center.section-title.overlay
       "EVENTI"]
      [:div.e-text-container.section-text.centered.text-center
       [:p.e-text
        "Concerti, letture di poesia, screaning di film, feste personali."
        [:br]
        "Se vuoi proporci degli eventi, contattaci e saremo lieti di ospitare l’evento."]]
      [:p.calendar-title.text-center
       "Archivio & Calendario"]
      [:div.calendar-container
       [:div.month
        [:div.prev "&#10094;"]
        [:div.next "&#10095;"]
        [:div.calendar-month.text-center
         "Novembre 2016"]]
       [:div.calendar-day-c
        [:ul.calendar-day
         (gen-month-days)]]]]


     ;;
     ;; GALLERIA
     ;;
     [:div.vspace-full
      [:p.text-center.section-title.overlay
       "GALLERIA"]
      [:div.g-container]]

     ;;
     ;; CONTATTI
     ;;
     [:div.vspace-contacts.contacts-c.centered
      [:p.section-title.overlay
       "CONTATTI"]
      [:p.restaurant-title
       "La Nave dei folli"]
      [:div.r-motto-c
       [:p.restaurant-motto.overlay
        "Beer Lounge & Restaurant"]]

      [:div.container-fluid
       [:div.row.vcenter-section3
        [:div {:class "col-md-4"}
         [:img.clickable {:src "assets/svg/map.svg"
                          :onclick "location.href='https://goo.gl/maps/LQQfR12tExA2'"}]
         [:p.contact-text
          "Strada della Rezza, 87"
          [:br]
          "Chieri (TO)"]]
        [:div {:class "col-md-4"}
         [:img {:src "assets/svg/phone.svg"}]
         [:p.contact-text
          "+39 3336210814"]]
        [:div {:class "col-md-4"}
         [:img.clickable {:src "assets/svg/mail.svg"
                          :onclick "location.href='mailto:info@lanavedeifolli.com?Subject=Message%20from%20Website'"}]
         [:p.contact-text
          "info@lanavedeifolli.com"]]]

       [:div.c-social-c.centered
        [:div.container-fluid
         [:div.row
          [:div {:class "col-md-4"}
           (svg-to-hiccup "html/assets/svg/facebook.svg")]
          [:div {:class "col-md-4"}
           (svg-to-hiccup "html/assets/svg/whatsapp.svg")]
          [:div {:class "col-md-4"}
           (svg-to-hiccup "html/assets/svg/telegram.svg")]]]]]]]

    ;;
    ;; COPYRIGHT
    ;;
    [:div.footer.copyright-text.overlay
     [:div.left
      [:p.text-left
       "© 2016 La nave dei folli"
       [:br]
       "c.f./p.iva (Mistrin s.r.l.s - 11479100015"]]
     [:div.right
      [:p.text-right
       "Webdesign: MAGIDesign"]]]]))


(deftemplate index "index.html" []
  [:body] (html-content (content)))




;; http://stackoverflow.com/questions/13329125/removing-transforms-in-svg-files
;; Layer->Paths->Flatten (Sketch) File -> Export -> SVG -> More ->
;; Flatten transforms (Affinity) What ended up working for me is
;; removing all groups from within Sketch and using the slice tool
;; to export the SVG.
;; http://petercollingridge.appspot.com/svg-optimiser/
;; http://coldnew.github.io/html2hiccup/
;; http://stackoverflow.com/questions/4476526/do-i-use-img-object-or-embed-for-svg-files
;; https://css-tricks.com/using-svg/
;; http://welcome.totheinter.net/columnizer-jquery-plugin/
;; borders:   https://jsfiddle.net/yyp67pbg/
;; http://photoswipe.com/documentation/getting-started.html
;; http://codepen.io/joshuabutts/pen/XmGowg
;; http://www.w3schools.com/howto/howto_js_slideshow.asp
;; http://brutaldesign.github.io/swipebox/
;; http://www.cssstickyfooter.com/using-sticky-footer-code.html
;; http://alistapart.com/article/holygrail
;; http://stackoverflow.com/questions/15172520/advantages-of-using-displayinline-block-vs-floatleft-in-css


;; FIXME:
;; vertical moving on resize
