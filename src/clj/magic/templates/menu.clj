(ns magic.templates.menu
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


;; BEER
(defn menu-item-b [title price]
  [:div.menu-item-c
   [:p.menu-item-left.menu-item-text
    title]
   [:p.menu-item-right.menu-item-text
    price]
   [:p.menu-item-middle.250px]])

;;ANALCOOLICI
(defn menu-item-a [price]
  [:div.menu-item-c
   [:p.menu-item-right.menu-item-text
    price]])



(defn content []
  (html
   ;;
   ;; HAMBURGER
   ;;
   [:div (ham "HOME" "index.html"
              "CHI SIAMO" "index.html#chi-siamo"
              "EVENTI" "index.html#events"
              "GALLERIA" "index.html#gallery"
              "CONTATTI" "index.html#contacts")]



   ;;
   ;; MENU MENU
   ;;
   [:div#menu-nav.menu-nav.vhcenter-menu
    [:div.menu-nav-item
     [:a {:href "#food" :data-scroll true}
      ;;     (svg-to-hiccup "html/assets/svg/plate-sm.svg")
      [:img#food-link.icon {:src "assets/img/plate.png"}]]]
    [:div.menu-nav-item
     [:a {:href "#beer" :data-scroll true}
      ;;     (svg-to-hiccup "html/assets/svg/beer-sm.svg")
      [:img#beer-link.icon {:src "assets/img/beer.png"}]]]
    [:div.menu-nav-item
     [:a {:href "#drinks" :data-scroll true}
      ;;     (svg-to-hiccup "html/assets/svg/drinks-sm.svg")
      [:img#drinks-link.icon {:src "assets/img/drinks.png"}]]]]

   [:div.content
    ;;
    ;; TOP DESC
    ;;
    [:div.menu-desc-top.centered
     [:p.menu-desc-text
      "In sintonia con le nostre bevande abbiamo voluto accostare pietanze tradizionali e piatti creativi ad hoc; in primo piano c’è sempre l’attenzione alle materie prime: frutta e verdura del territorio, burro e formaggi da piccole realtà artigianali, e - grazie ad una sinergia con la macelleria Benente Marco di Chieri e gli allevatori della «Coalvi» - eccellenti carni di vitella piemontese."
      [:br]
      "Oltre ai classici sfizi da pub il menu si articola in una più variegata offerta, con ricette tradizionali, specialità vegane e morigerate suggestioni esotiche."]]


    ;;
    ;; MENU
    ;;
    [:div.menu-c.centered
     [:div#food.spacer]
     [:div.menu-section
      [:p.menu-title
       "MENÙ RISTORANTE"]

      [:p.menu-section-title
       "PASTE"]
      [:div.menu-items-c
       (menu-item-f "Bucatini all’Amatriciana Rivisitata (Bacon & Caprino Sardo)" "7,00")
       (menu-item-f "Fusilli Integrali all’Ortolana" "7,50")
       (menu-item-f "Tagliatelle al Ragù di Cacciagione (secondo disponibilità)" "8,00")
       (menu-item-f "Gnocchi alla Fonduta di Toma Caseificio Ettore Lisa" "8,00")
       (menu-item-f "Agnolotti di Verdure al Burro & Timo" "8,50")]
      
      [:p.menu-section-title
       "SPECIALITÀ"]

      [:div.menu-items-c
       (menu-item-f "Alette di Pollo alla Diavola (peperoncino T. Moruga Scorpion)" "6,50")
       (menu-item-f "Stinco (300 gr.) a tutta Birra" "7,00")
       (menu-item-f "Costine a lenta cottura al Forno in stile BBQ" "7,50")
       (menu-item-f "Suprême di Tacchino al Tè Affumicato (Lapsang Souchong)" "8,00")
       (menu-item-f "Svizzerina doppia (260 gr.) 100% Vitella Coalvi con fonduta di Toma Caseificio Ettore Lisa" "9,00")
       (menu-item-f "Salsiccia scottata di Vitella Coalvi & Pancetta (250gr.)" "10,00")
       (menu-item-f "Filetto di Suino allevato in Piemonte al Rosmarino" "10,00")
       (menu-item-f "«Orecchia di Elefante» di Vitella Coalvi" "11,00")
       (menu-item-f "Tagliata di Vitella Coalvi (250 gr.)" "15,00")]

      [:p.menu-section-title
       "CONTORNI"]

      [:div.menu-items-c
       (menu-item-f "Patatine Fritte fatte in casa" "3,00")
       (menu-item-f "Cipolle di Tropea caramellate" "3,00")
       (menu-item-f "Insalata mista" "3,50")
       (menu-item-f "Julienne di Verdure saltate" "4,00")]

      [:p.menu-title
       "MENÙ PUB"]
      
      [:p.menu-section-title
       "TAGLIERI"]

      (menu-item-f "Disfida delle Tome" "8,50")
      (menu-item-f "Selezione del Maslè (scelta di affettati elaborata dalla Macelleria Benente Marco di Chieri)" "8,50")
      (menu-item-f "Gran Misto di Salumi e Formaggi" "13,00")

      [:p.menu-section-title
       "PATATE FARCITE" [:br] "(Jacked Potatoes)"]

      (menu-item-f "Lardosa" "3,50")
      (menu-item-f "Fonduta" "4,00")
      (menu-item-f "Gorgo-Cipolluta" "4,50")
      (menu-item-f "Pancett Atomica (crema di Toma d’Alpeggio e pancetta affumicata)" "4,50")

      [:p.menu-section-title
       "FRITTURE"]

      (menu-item-f "Patatine fresche fatte in casa" "3,00")
      (menu-item-f "Spiedino di patata fresca spiralizzata" "3,50")
      (menu-item-f "Anelli di Cipolle Rosse fresche" "4,00")

      [:p.menu-section-title
       "PAN-FRITTO" [:br] "Lievitato in Casa (soltanto alla sera)"]

      (menu-item-f "con Olive Piccanti" "4,00")
      (menu-item-f "con Mortadella" "4,00")
      (menu-item-f "con Lardo Artigianale" "5,00")
      (menu-item-f "con Pancetta Affumicata" "5,00")
      (menu-item-f "con Stracchino Caseificio E. Lisa" "6,00")
      (menu-item-f "con Prosciutto Crudo" "6,00")

      [:p.menu-section-title
       "HAMBURGER FATTI IN CASA" [:br] "(130 gr.) con Pane al Sesamo, Pomodori & Lattuga"]

      (menu-item-f "Vegan Beauty - 100% Ortaggi, verdure, legumi e cereali" "5,00")
      (menu-item-f "Indaco - 100% Tacchino con Verdure al Curry)" "5,50")
      (menu-item-f "Micidiale - 100% Suino allevato in Piemonte portato ad un grado di piccantezza «AB-normal»" "5,50")
      (menu-item-f "Amerinide - 100% Suino allevato in Piemonte con Cipolle caramellate e Pancetta affumicata" "6,00")
      (menu-item-f "Continentale - 100% Carne Coalvi con crema di Toma d’Alpeggio" "6,50")
      (menu-item-f "Esagerato - Doppio «Amerinide» con Fonduta" "8,50")

      [:p.menu-section-title
       "PANINI"]

      (menu-item-f "Hortense - con Verdure saltate" "4,00")
      (menu-item-f "Porcaccione - con Salsicciotto alla piastra & Lattuga" "4,50")
      (menu-item-f "Crucco - con Würstel & Crauti" "5,00")
      (menu-item-f "Club - Sandwich con Patatine" "10,00")

      [:p.menu-section-title
       "DOLCI"]

      (menu-item-f "Parfait alla Birra" "4,00")
      (menu-item-f "Torta di Nocciole croccante" "4,00")
      (menu-item-f "Créme Brûlée" "4,50")
      (menu-item-f "Semifreddo alla Crema di Sesamo con Datteri" "4,50")
      (menu-item-f "Torcetti con Passito di Caluso DOC" "5,00")

      [:div.menu-desc-bottom
       [:p.menu-desc-text
        "In mancanza di materie prime fresche possono essere utilizzati alimenti surgelati." [:br]
        "Per eventuali intolleranze alimentari Vi invitiamo a consultare la tabella degli allergeni." [:br] [:br]
        "Restiamo a Vostra disposizione per ogni esigenza."]]]

     [:div#beer.spacer]
     [:div.menu-section
      [:p.menu-title
       "BIRRE"]

      [:div.menu-desc-top
       [:p.menu-desc-text
        "Qui le Birre sono le vere Regine! Quelle che vi proponiamo nascono da una attenta selezione fatta di viaggi, studio e tante e tante bevute... Si, perché siamo orgogliosi di poter spillare solo e soltanto Grandi Birre senza compromessi. Tutto il nostro progetto ruota attorno ad esse, attorno alla loro storia, sia quella con la S maiuscola sia quella più piccola fatta di attenti artigiani, di notti passate a macinare, mostare, filtrare, a misurare temperature etc etc... La storia della Birra è la nostra storia, sin dai tempi dei faraoni e nel corso del tempo si è modificata così come si sono modificati i nostri gusti, creando una varietà infinita di stili e alchimie fra le più disparate. C'è un mondo da scoprire dietro al bicchiere che avrete di fronte. Perché non esiste La Birra, esistono le Birre!!! Per cui nell'assaggiare la nostra selezione vi auguriamo buon viaggio."]]

      [:p.menu-title.overlay
       "I. ALLA SPINA"]

      [:p.menu-section-title
       "HELL"]

      [:p.menu-item-text
       "Un bel giallo paglierino limpido completata da un discreto perlage di schiuma candida e compatta. Naso elegante caratterizzato da piene note di miele accompagnate da sentori erbacei dei luppoli nobili della zona. Al gusto si presenta il malto in evidenza seguito dal luppolo erbaceo con chiusura sull’amaro moderato sostenuto da una briosa frizzantezza. Birra di facile bevuta, equilibrata e dissetante." [:br]
       "Birrificio: Schönram (Monaco di Baviera)" [:br]
       "Stile: Helles"]
      
      (menu-item-b "ALC. 5 %" "piccola - 3,00   |   media - 5,00   |   litro - 10,00")

      [:p.menu-section-title
       "PUNK IPA"]

      [:p.menu-item-text
       "Uno dei prodotti più famosi di Brewdog. Nel bicchiere la Punk IPA si presenta di un bel colore oro carico con un cappello di schiuma compatto. Al naso alle note fresche del luppolo si uniscono sensazioni più leggere di frutta a pasta gialla e balsamiche di erba aromatica." [:br]
       "In bocca, caratterizzata da un corpo ampio, la dolcezza iniziale è ben equilibrata dalle note amare e agrumate che dominano il finale invitando ripetutamente al sorso successivo." [:br]
       "Birrificio: Brewdog (Scozia)" [:br]
       "Stile: Ipa (Indian pale ale)"]

      (menu-item-b "ALC. 5,4 %" "piccola - 3,50   |   media - 5,50   |   litro - 11,00")


      [:p.menu-section-title
       "OBLIVION"]

      [:p.menu-item-text
       "Vi presentiamo una classica rivisitazione della tradizione birraia belga; il corpo è intenso, avvolge il palato e scalda il cuore. L'elevato tenore alcolico non nasconde la complessità dei suoi aromi ed in bocca risaltano tutte le note di frutta matura e spezie." [:br]
       "È una birra da meditazione, adatta per lunghe serate da passare con gli amici." [:br]
       "Birrificio: Beer selection (progetto irriverence)" [:br]
       "Stile: Trippel belgian ale"]

      (menu-item-b "ALC. 8,5 %" "piccola - 3,00   |   media - 5,00   |   litro - 10,00")

      [:p.menu-section-title
       "MILOUD"]

      [:p.menu-item-text
       "Colore ramato, birra ad alta fermentazione. Aroma di luppolo moderatamente intenso, fruttata ed agrumata. Il sentore di malto, caramello ed il corpo leggero la rendono decisamente rinfrescante. È una birra che storicamente non si serve ghiacciata, per rispettare quelle che sono le sue caratteristiche organolettiche." [:br]
       "Birrificio: Lariano (Lecco)" [:br]
       "Stile: Bitter Ale"]

      (menu-item-b "ALC. 4 %" "piccola - 3,00   |   media - 5,00   |   litro - 10,00")

      [:p.menu-section-title
       "MAGNUS (33 cl)"]

      [:p.menu-item-text
       "Complessa ed infinita nel gusto, solo come le vere birre di abbazia belghe. È caratterizzata dalla raffinatezza dei malti ad intensa tostatura che evocano note di caramello, caffè, liquirizia e perfino cioccolato. Piacevole ed appagante sorso dopo sorso, raffinata nei profumi di malto, di frutta rossa e frutta secca, le note della intrigante speziatura chiudono una piacevolissima bevuta." [:br]
       "Birrificio: Croce di Malto (Novara)" [:br]
       "Stile: Double Belgian Ale"]

      (menu-item-b "ALC. 7,3 %" "piccola - 3,00   |   media - 5,00   |   litro - 10,00")

      [:p.menu-section-title
       "ANTANI"]

      [:p.menu-item-text
       "Il birrificio che la produce si chiama Toccalmatto e la birra si chiama Antani... Non potete che aspettarvi una cosa strana! Una Spicy Belgian Ale dallo splendido colore ambrato, una base maltata dai ricchi sentori di toffee e caramello bruno e le classiche note di frutti rossi donate dal lievito. Su questa base tradizionale, ogni anno il birrificio sperimenta mix creativi di spezie e ingredienti aromatici, e quest'anno è la volta di un blend di tè neri, scorze d'agrumi e frutta disidratata! Non aspettatevi nulla che abbiate mai assaggiato, senza schiuma e con una gasatura pressoché inesistente." [:br]
       "Birrificio: Fidenza" [:br]
       "Stile: Belgian ale"]

      (menu-item-b "ALC. 6,0 %" "piccola - 3,00   |   media - 5,00   |   litro - 10,00")

      [:p.menu-section-title
       "RESET"]

      [:p.menu-item-text
       "Birra ispirata allo stile American Amber Ale. L'abbondante luppolatura con le migliori varietà aromatiche americane conferisce a questa birra un gusto e un profumo intensi, che trovano il loro bilanciamento nelle ricche note maltate, il colore è di un ambrato intenso che tende al rosso. E' interessante l'abbinamento con carni rosse e formaggi stagionati." [:br]
       "Birrificio: Rurale a Desio (MB)" [:br]
       "Stile: Amber Ale"]

      (menu-item-b "ALC. 5,6 %" "piccola - 3,00   |   media - 5,00   |   litro - 10,00")

      [:p.menu-section-title
       "TEMPORIS"]

      [:p.menu-item-text
       "E' la birra prodotta e dedicata per la primavera, e come tale offre un’esplosione di profumi che vanno dal fruttato, all’erbaceo dovuto ai luppoli usati in fermentazione, allo speziato ottenuto con un miscela di erbe e spezie elaborate dopo lunghe notti di ricerche. Una birra ricca di suggestioni, complessa nei profumi e nel gusto, ed altamente dissetante." [:br]
       "Birrificio: Croce di malto (Novara)" [:br]
       "Stile: Saison"]

      (menu-item-b "ALC. 6,8 %" "piccola - 3,00   |   media - 5,00   |   litro - 10,00")

      [:p.menu-section-title
       "LA ROSSA"]

      [:p.menu-item-text
       "Birra doppio malto a bassa fermentazione, non pastorizzata, prodotta con materie prime selezionate e di qualità. Il suo colore brillante, la schiuma pannosa, ed i profumi fruttati preannunciano la pienezza data dal ricco sapore dei malti europei, protagonisti anche nella moderata dolcezza del finale. Il bilanciamento apportato dai luppoli, ed il piacevole grado alcolico, invogliano pericolosamente la beva." [:br]
       "Birrificio: La Tresca (Novara)" [:br]
       "Stile: Bock"]

      (menu-item-b "ALC. 6,2 %" "piccola - 3,00   |   media - 5,00   |   litro - 10,00")

      [:p.menu-title.overlay
       "II. IN BOTTIGLIA"]

      [:p.menu-section-title
       "OKIE  MATILDE (75 cl)"]

      [:p.menu-item-text
       "È con un certo orgoglio che vi presentiamo questa birra. Un tributo e una rivisitazione di una grande trappista belga (la Orval) che si presenta però molto più equilibrata dell'originale. È una cosiddetta birra “acida”, di colore arancio opaco, che sprigiona sin dal primo accostamento tutte le note speziate: pepe, scorza d'arancio, pesca e pera, e l'inconfondibile componente lattica data dai Brettomiceti usati per la fermentazione. La bevuta è molto facile e soddisfacente." [:br]
       "Birrificio: Toccalmatto (Parma)" [:br]
       "Stile: Belgian pale ale"]

      (menu-item-b "ALC 6,2 %" "75,cl - 8,00")]

     [:br] 

     [:div#drinks.spacer]
     [:div.menu-section
      [:p.menu-title
       "DRINK DIFFERENT"]

      [:p.menu-title.overlay
       "VINI"]

      [:p.menu-section-title
       "PRODUTTORI DI GOVONE"]

      (menu-item-f "Barbera" "calice - 3,5   |   bottiglia - 14,50")

      [:p.menu-section-title
       "AZIENDA AGRICOLA ROSSOTTO (CINZANO - TO)"]

      (menu-item-f "Bonarda Collina Torinese DOC" "calice - 3,5   |   bottiglia - 12,00")
      (menu-item-f "Barbera Collina Torinese DOC" "calice - 3,5   |   bottiglia - 12,00")
      (menu-item-f "Prosecco" "calice - 3,5   |   bottiglia - 12,00")
      (menu-item-f "Vino Bianco “Grillo di Sicilia”" "calice - 3,5   |   bottiglia - 12,00")

      [:p.menu-title.overlay
       "ANALCOLICI"]

      [:p.menu-section-title "BIR PLETOK"]

      [:p.menu-item-text
       "Vi proponiamo la nostra rivisitazione di una bevanda molto particolare." [:br]
       "Leggenda narra che secoli fa nell'isola di Jakarta (allora occupata dagli Olandesi) gli abitanti del luogo cercassero di emulare quella che per loro era una bevanda misteriosa e inavvicinabile per le loro tasche, ma che i conquistatori e le élite locali bevevano a fiumi! Nacque una ricetta molto particolare che si usava «shakerare» in una canna di bambù  producendo così la schiuma caratteristica della birra che si cercava di riprodurre." [:br]
       "Si può servire ghiacciata per dissetarsi nelle torride giornate estive oppure calda per scaldarsi le membra nei mesi più freddi. Provare per credere!"]
      (menu-item-a "piccola - 2,50   |   media - 4,50")

      [:p.menu-section-title "BIBITE"]

      (menu-item-f "Coca-Cola (20cl)" "3,00")
      (menu-item-f "Coca-cola zero (33cl)" "3,00")
      (menu-item-f "Bibite Galvanina BIO  (35,5cl)" "3,50")
      
      [:p.menu-item-text3
       "Cola - aranciata bionda - aranciata rossa - gazzosa - tonica -"]
      (menu-item-f "ginger - chinotto - thè freddo limone❘pesca - Succhi di frutta BIO" "3,50")

      [:p.menu-title.overlay
       "ALCOLICI"]

      [:p.menu-section-title "AMARI"]

      (menu-item-f "San Simone, Amaro Montenegro, Jaegermaister, Amaro del Capo, Limoncello, Mirto" "3,00")

      [:p.menu-section-title "WHISKY"]

      (menu-item-f "Tullamore – Bushmills" "4,00")
      (menu-item-f "Moonshine Platte Valley – Katskill – Applejack" "4,50")
      (menu-item-f "Acnoc 12 yrs, Balblair, Ardbeg" "5,50")

      [:p.menu-section-title "GRAPPE"]

      [:p.menu-item-text "Antica Distilleria Quaglia"]

      (menu-item-f "Bianca / gialla / fumé monovitigno" "3,00")

      [:p.menu-section-title "TEQUILA (shortino)"]

      (menu-item-f "Corralejo Reposado" "3,00")
      (menu-item-f "Don Alvaro Blanco" "3,00")

      [:p.menu-section-title "RUM"]

      (menu-item-f "Original Dark Plantation, Rum Miel" "3,50")
      (menu-item-f "Plantation 3 Stars White" "3,50")
      (menu-item-f "Vanilla Dzama" "4,00")
      (menu-item-f "Plantation Grande Reserve - Agricole - El Dorado – Diplomatico - Quorum" "4,50")

      [:p.menu-section-title "CALVADOS"]

      (menu-item-f "Calvados" "3,00")
      (menu-item-f "Armagnac Jauneau" "4,00")

      [:p.menu-title.overlay
       "CARTA DEI TÈ"]

      (menu-item-f "Ceylon - Ratnapura" "3,00")
      [:p.menu-item-text2
       "Un tè decisamente classico, qui proposto in una miscela di eccezionale rarità. Originario del distretto di Dimbula, le foglioline piccolissime e ricche di germogli dorati regalano un infuso dal caratterisrico buoquet aromatico."]

      (menu-item-f "Earl Grey Citrus Black" "3,00")
      [:p.menu-item-text2
       "Il più classico dei tè aromatizzati, il più in voga tra l’aristocrazia inglese di metà Ottocento: miscela di tè indiani a foglia intera con olio essenziale di frutti di bergamotto."]

      (menu-item-f "Fujian - Lapsang Souchong" "3,00")
      [:p.menu-item-text2
       "Grandi foglie ossidate nella fermentazione, delicatamente tostate e quindi affumicate con braci di legni resinosi."]

      (menu-item-f "Samal Valley - Nepal" "3,00")
      [:p.menu-item-text2
       "Tenere foglie primaverili da una piccola piantagione, ancora poco conosciuta, da cui esce un prodotto che nulla ha da invidiare a quelli del vicino Darjeeling."]

      (menu-item-f "Assam - Dikom" "3,00")
      [:p.menu-item-text2
       "Da questo raccolto autunnale si ricavano foglie brunite, dalle gemme dorate, che in infusione regalano un sapore robusto, tannico, con uno squisito retrogusto maltato. Ideale per svegliare la mente; sconsigliato in seconda serata!"]

      (menu-item-f "Yunnan - Golden Imperial" "5,00")
      [:p.menu-item-text2
       "Uno dei tè più originarii del mondo, qui nella sua versione più prestigiosa, con gemme dal colore lucente. Un tè veramente «imperiale», ma di facile degustazione per via del suo perfetto equilibrio non allappante, quasi totalmente privo di astringenza in bocca."]

      (menu-item-f "Darjeeling - Gopaldhara Red Thunder" "5,00")
      [:p.menu-item-text2
       "Foglie brunite, con lembi dai riflessi neri ed intensamente rossi, sprigionano in bocca un aroma corposo, con un finale a sorpresa di dolcezza al palato che ricorda i frutti di bosco."]

      (menu-item-f "Darjeeling - Giddapahar Supreme" "6,00")
      [:p.menu-item-text2
       "Dalla rinomata piantagione nella valle di Kurseong, tutta la fragranza di note «moscate» di un raccolto estivo, arricchite da sentori floreali e vagamente caramellati: puro spirito!"]]]

    [:img.menu-logo-bottom {:src "assets/img/lanave.png"}]


    ;;
    ;; COPYRIGHT
    ;;
    [:div.footer.copyright-text.overlay
     [:div.left
      [:p
       "© 2016 La nave dei folli"
       [:br]
       "c.f./p.iva (Mistrin s.r.l.s - 11479100015"]]
     [:div.right
      [:p
       "Webdesign: MAGIDesign"]]]]))

(deftemplate menu "menu.html" []
  [:body :div#wrap] (html-content (content)))



;; FIXME:
;; - On resize the scrollspy doesn't work. Try bootstrap one maybe?
;; - bootstrap affix for overlay for "position: fixed"
;; - js update position

