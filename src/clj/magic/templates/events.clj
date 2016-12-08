(ns magic.templates.events
  (:require [net.cgrand.enlive-html :refer [deftemplate
                                            html-content]]
            [hiccup.core :refer [html]]
            [magic.util :refer [svg-to-hiccup
                                ham]]))


;; FOOD
(defn menu-item-f [title price]
  [:div.menu-item-c
   [:p.menu-item-left.menu-item-text
    title]
   [:p.menu-item-right.menu-item-text
    price]
   [:p.menu-item-middle]])


(defn content []
  (html
   ;;
   ;; HAMBURGER
   ;;
   [:div (ham "HOME" "/"
              "MENÙ" "menu#food"
              "CHI SIAMO" "/#chi-siamo"
              "GALLERIA" "/#gallery"
              "CONTATTI" "/#contacts")]
   
   [:div.content
    [:p.events-main-title.overlay
     "ARCHIVIO EVENTI"]

    [:p.event-title.text-left
     "Dodo Harmonica Kid"]

    [:div.event-c
     [:div.pic-left
      [:a.swipeboximg {:href "assets/photo/big/e01.jpg"}
       [:img {:src "assets/photo/reduced/e01.jpg"}]]]

     [:p.event-date.text-left
      "15 Luglio 2016"]
     
     [:p.event-text
      "Per festeggiare l'avvio del nuovo locale, abbiamo pensato di organizzare un concerto di quel blues da strada, che entra subito nelle vene: blues invasante, da stemperare con la freschezza di una o più pinte di ottima birra artigianale." [:br]
      "Dodo “Harmonica kid” è un musicista di grande talento, che per 365 giorni all’anno riesce a conquistare le strade, piazze e locali di tutt’Italia con la sua musica e la sua passione." [:br]
      "Che si esibisca in duo o come solista, con il suo repertorio di brani country, blues, Irish music è capace di attirare e coinvolgere il pubblico grazie alle sue trascinanti performance all’armonica, che gli sono valse il soprannome di “mangiatore di armoniche”." [:br]
      "Ha preso parte alle più importanti manifestazioni di festival busker italiane, nelle quali ha conquistato la stima di un vero e proprio gruppo di “aficionados”, che lo seguono in ogni occasione. Ha all’attivo due cd “harp for the breakfast” e “dodo & gluck Live at Mag Mell “, che vende esclusivamente in strada durante le sue esibizioni. Molto intensa è anche la sua attività didattica, in cui insegna a suonare l’armonica a bocca a persone di varie fasce d’età."]]
    
    [:p.event-title.text-right
     "Big Harp & Juke Joint Blues"]

    [:div.event-c
     [:div.pic-right
      [:a.swipeboximg {:href "assets/photo/big/e02.jpg"}
       [:img {:src "assets/photo/reduced/e02.jpg"}]]]

     [:p.event-date.text-right
      "29 Luglio 2016"]

     [:p.event-text
      "Prosegue la programmazione concertistica de «La Nave dei Folli» in strada della Rezza, 87 a Chieri (To), iniziata con grande successo a metà di questo mese con il grande blues di Dodo Harmonica Kid." [:br]
      "Sempre nel segno del blues il concerto di venerdì 29 luglio:" [:br]
      "Il Juke Joint Blues è un esplosivo quartetto di musicisti appassionati e innamorati di quella musica che si suonava sulle rive del Mississipi e tra le strade della Louisiana negli anni 1950 e 1960. Il sound elettrico della band rende tuttavia questo genere slegato da ogni periodo storico, rendendolo sempre attuale;" [:br]
      "il repertorio comprende ritmi incalzanti, canzoni lente e ipnotiche, adatte al ballo tipico del Blues. Andy Cedrone alla batteria, Stefano Bad Finger al basso, Max Pizza alla chitarra, armonica e voce e Natale Chillè alla chitarra solista. Durante lo show potrebbero esserci ospiti che suoneranno una Blues Jam come prevede la cultura Blues."]]

    [:p.event-title.text-left
     "Eight o’Clock Blues"]

    [:div.event-c
     [:div.pic-left
      [:a.swipeboximg {:href "assets/photo/big/e03.jpg"}
       [:img {:src "assets/photo/reduced/e03.jpg"}]]]

     [:p.event-date.text-left
      "1 Agosto 2016"]

     [:p.event-text
      "Nuova data sul palinsesto concertistico de «La Nave dei Folli» in strada della Rezza, 87 a Chieri (To): giovedì 4 agosto alle ore 21,30 sul palco il gruppo Eight o’Clock.
Il duo Fabio Giua e Angelo Elwood Vergnano è legato da un’amicizia ultra-ventennale, che li ha portati a fondare 13 anni fa la Eight o’Clock Blues band, storica formazione del panorama blues torinese con quasi 300 concerti all’attivo." [:br]
      "Ed è a seguito di questo collaudato sodalizio che i due bluesmen si propongono in talune situazion “ridotta”, con un repertorio che fonde i grandi classici del Chicago Blues, alcuni brani soul, folk blues e ballads, il tutto suonato in maniera “intima”, per poter far cogliere al pubblico tutto il significato dei pezzi proposti, senza però perdere in decisione e groove." [:br] [:br]
      "Il concerto è aperto a tutti e gratuito e la consumazione facoltativa. Vi aspettiamo!"]]


    [:p.event-title.text-right
     "Fast Frank & The Hot Shout Blues"]

    [:div.event-c
     [:div.pic-right
      [:a.swipeboximg {:href "assets/photo/big/e04.jpg"}
       [:img {:src "assets/photo/reduced/e04.jpg"}]]]

     [:p.event-date.text-left
      "8 Settembre 2016"]

     [:p.event-text
      "Riprende, dopo la pausa estiva, la programmazione concertistica de «La Nave dei Folli»; venerdì 23 settembre si ricomincia con un grande nome del blues internazionale: dalle ore 21,30 si esibirà infatti Fast Frank and The Hot Shout Blues." [:br]
      "Il duo è composto da “Fast Frank” Cersosimo alla chitarra e voce e da Gianluca Martini al contrabbasso e basso elettrico. Frank è il protagonista del nuovo blues Made in Italy: è tra i più quotati interpreti del nuovo blues italiano. Si è fatto le ossa nei club di oltre Atlantico, dove è stato notato sui palchi del Midwest, in Illinois, Wisconsin e Indiana. Ha compiuto ripetuti tour musicali a Chicago, la Mecca del blues mondiale, esibendosi a fianco di Breezy Rodio, Linsey Alexander, Dave Pot Tra gli assi internazionali per i quali Fast Frank ha organizzatoin proprio applauditi tour italiani, mettendo a disposizione un solido supporto artistico, logistico e musicale, ricordiamo almeno i chicagoani Rockin' Johnny Burgin e Jon McDonald, il newyorkese Jake Walker, l’olandese Hein\"Little Boogie Boy\" Meijer e il londinese Big Joe Louis." [:br]
      "Nel 2011 esce il suo cd d’esordio, \"Shakin' The Boogie\", seguito nel 2016 da \"A Place In The Evening\", registrato dal vivo nell’astigiano. Nel 2011 il video tratto da un suo brano, \"Daddy Wants You To Come Back Home\", con la regia di Piero Ali Passatore, è stato premiato al Videoclip Festival di Roma."]]

    [:div.month-c
     [:p.event-title.text-left
      "Senzatempo"]

     [:div.event-c
      [:p.event-date.text-left
       "28 Ottobre 2016"]

      [:p.event-text
       "Concerto live anni '70-'80-'90"]]


     [:p.event-title.text-left
      "Castagnata"]

     [:div.event-c
      [:p.event-date.text-left
       "30 Ottobre 2016"]

      [:p.event-text
       "Castagnata gratuita nel dehors con conumazione a piacere" [:br]
       "Ore: 18.00"]]

     [:p.event-title.text-left
      "Dodo Harmonica Kid"]

     [:div.event-c
      [:p.event-date.text-left
       "31 Ottobre 2016"]

      [:p.event-text
       "Concerto live"]]]

    [:div.month-c

     [:p#04-11-2016.event-title.text-left
      "FUNGHI NIGHT"]

     [:div.event-c
      [:p.event-date.text-left
       "4 Novembre 2016"]

      [:p.event-text
       "Serata menù FUNGHI - € 30"]]

     [:p#11-11-2016.event-title.text-left
      "BAGNA CAUDA NIGHT"]

     [:div.event-c
      [:p.event-date.text-left
       "11 Novembre 2016"]

      [:p.event-text
       "Serata menù BAGNA CAUDA - € 25"]]

     [:p#27-11-2016.event-title.text-left
      "TORNEO BACKGAMMON"]

     [:div.event-c
      [:p.event-date.text-left
       "27 Novembre 2016"]

      [:p.event-text
       "Torneo di Backgammon, gratuito ma con prenotazione obbligatoria entro martedì 15 novembre" [:br]
       "Ore: 9.15"]]]

    [:br] [:br] [:br]

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

(deftemplate events "events.html" []
  [:body :div#wrap] (html-content (content)))

