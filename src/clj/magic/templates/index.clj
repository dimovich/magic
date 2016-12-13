(ns magic.templates.index
  (:require [net.cgrand.enlive-html :refer [deftemplate
                                            html-content]]
            [hiccup.core :refer [html]]
            [magic.util :refer [svg-to-hiccup
                                gen-month-days
                                ham
                                photos]]))


(defn icon [c id l]
  [c
   [:div.s-icon.clickable {:onclick "window.location='" l "';"}
    (svg-to-hiccup (str "html/assets/svg/" id ".svg"))
    [:img.icon.mobile.hover {:src (str "assets/img/" id ".png")}]]])

;; 
;; hello
;; 1356x764

(defn content []
  (html
   (ham "HOME" "#top"
        "MENÙ" "menu.html#food"
        "CHI SIAMO" "#chi-siamo"
        "EVENTI" "#events"
        "GALLERIA" "#gallery"
        "CONTATTI" "#contacts")
   
   [:div#top.content
    ;;
    ;; LOGO
    ;;
    [:div.top-logo-container
     [:div.top-border
      (svg-to-hiccup "html/assets/svg/border-top.svg")]
     [:img.top-logo {:src "assets/img/lanave.png"}]
     [:div.top-logo-motto.overlay
      "Beer Lounge & Restaurant"]]

    ;;
    ;; MENU
    ;;
    [:div.vspace-section1
     [:div.vcenter-section1
      [:div.ttr.centered.clickable {:onclick "window.location='menu.html#food';"}
       [:div.m-icon
        (svg-to-hiccup "html/assets/svg/plate.svg")
        [:img.icon.mobile {:src "assets/img/plate.png"}]]
       [:div.m-title
        "MENÚ RISTO-PUB"]
       [:div.m-text-container
        [:span.m-text
         "Scopri le nostre proposte, prova i nostri piatti preparati con ingredienti freschi del territorio"]]]

      [:div.ttr.clickable {:onclick "window.location='menu.html#beer';"}
       [:div.m-icon.icon-beer
        (svg-to-hiccup "html/assets/svg/beer.svg")
        [:img.icon.mobile {:src "assets/img/beer.png"}]]
       [:div.m-title
        "BIRRE"]
       [:div.m-text-container
        [:span.m-text
         "Vieni a degustare la nostra selezione di etichette italiane ed internazionali"]]]

      [:div.ttr.clickable {:onclick "window.location='menu.html#drinks';"}
       [:div.m-icon.icon-drinks
        (svg-to-hiccup "html/assets/svg/drinks.svg")
        [:img.icon.mobile {:src "assets/img/drinks.png"}]]
       [:div.m-title
        "DRINK DIFFERENT"]
       [:div.m-text-container
        [:span.m-text
         "Scopri la nostra riserva di distillati da tutto il mondo, le nostre bibite e gli infusi biologici"]]]]]


    ;;
    ;; CHI SIAMO
    ;;
    [:div#chi-siamo.vspace-full.vcenter-section2
     [:p.section-title.overlay
      "CHI SIAMO"]
     [:p.section-text {:style "text-align: justify;"}
      "Un manipolo di folli che si sono detti: «Imbarchiamoci!». Così è nata «la nave dei folli», in omaggio al genio fiammingo del XV secolo, il pittore Jheronimus Bosch. Tuttavia, più che di pittura ci intendiamo di mangiare e bere: dall’esperienza di un pr duttore birraio, dalla competenza di un ristoratore incallito e dalla creatività del cuoco, a cui si aggiunge la professionalità di una figura esperta in comunicazione e marketing, è nata l’idea di un locale consacrato alla degustazione di birre rigorosamente artigianali, abbinate a pietanze tradizionali e piatti creativi. L’attenzione alle materie prime, la scelta di prodotti del territorio, provenienti da piccole realtà artigiane, costituiscono i nostri punti di forza. A tutte queste proposte abbiamo voluto aggiungere un’attrattiva culturale, invitando tutti i mesi artisti, attori di teatro, musicisti, sommelier, per creare serate a tema, eventi, concerti dal vivo e degustazioni."]
     [:div.c-img-container
      [:a {:href "assets/img/chi_siamo_big.jpg"}
       [:img.desktop.img-border {:src "assets/img/chi_siamo.jpg"}]
       [:img.mobile.img-border {:src "assets/img/chi_siamo_mobile.jpg"}]]]]


    ;;
    ;; EVENTI
    ;;
    [:div#events.vspace-full.vcenter-section3
     [:p.section-title.overlay
      "EVENTI"]
     [:div.section-text.text-center
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
        (gen-month-days {4 {:name "FUNGHI NIGHT"
                            :link "04-11-2016"}
                         11 {:name "BAGNA CAUDA NIGHT"
                             :link "11-11-2016"}
                         27 {:name "TORNEO BACKGAMMON"
                             :link "27-11-2016"}})]]]]


    ;;
    ;; GALLERIA
    ;;
    [:div#gallery.vspace-full.vcenter-section4
     [:p.text-center.section-title.overlay
      "GALLERIA"]
     (photos "assets/photo")]

    ;;
    ;; CONTATTI
    ;;
    [:div#contacts.vspace-fullm
     [:div.vcenter-section5
      [:p.section-title.overlay
       "CONTATTI"]
      [:p.restaurant-title
       "La Nave dei folli"]
      [:div.r-motto-c
       [:p.restaurant-motto.overlay
        "Beer Lounge & Restaurant"]]

      [:div {:width "100%"}
       [:div.ttr
        [:img.clickable.hover {:src "assets/svg/map.svg"
                               :onclick "location.href='https://goo.gl/maps/LQQfR12tExA2'"}]
        [:p.contact-text
         "Strada della Rezza, 87"
         [:br]
         "Chieri (TO)"]]
       [:div.ttr
        [:img {:src "assets/svg/phone.svg"}]
        [:p.contact-text
         "+39 3336210814"]]
       
       [:div.ttr
        [:img.clickable.hover {:src "assets/svg/mail.svg"
                               :onclick "location.href='mailto:info@lanavedeifolli.com?Subject=Message%20from%20Website'"}]
        [:p.contact-text {:style "padding-top: 10px;"}
         "info@lanavedeifolli.com"]]

       
       [:div.c-social-c.centered
        (icon :div.tt "facebook" "" #_"https://www.facebook.com/La-Nave-dei-Folli-1140174652712678/")
        (icon :div.tt "whatsapp" "whatsapp://send?text=3336210814")
        (icon :div.tt "telegram" "https://telegram.me/3336210814")]]]]
    
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
      [:p
       "Webdesign: MAGIDesign"]]]]))


(deftemplate index "index.html" []
  [:body :div#wrap] (html-content (content)))




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
