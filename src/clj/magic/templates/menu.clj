(ns magic.templates.menu
  (:require [net.cgrand.enlive-html :refer [deftemplate
                                            html-content]]
            [hiccup.core :refer [html]]
            [magic.util :refer [svg-to-hiccup
                                ham
                                copyright]]))


;; FOOD
(defn menu-item-f [title price]
  [:div.menu-item-c
   [:p.menu-item-left.text-left.menu-item-text
    title]
   [:p.menu-item-right.menu-item-text
    price]
   [:p.menu-item-middle]])


;; BEER
(defn menu-item-b [title [s m l]]
  [:div.menu-item-c
   [:p.menu-item-left.menu-item-text
    title]
   [:p.menu-item-right.menu-item-text.desktop
    (str "piccola - " s " |   media - " m " |   litro - " l)]
   [:p.menu-item-right.menu-item-text.mobile
    (str "piccola - " s) [:br]
    (str "media - " m) [:br]
    (str  "litro - " l)]
   [:p.menu-item-middle]])


(defn menu-item-b2 [title price]
  [:div.menu-item-c
   [:p.menu-item-left.menu-item-text
    title]
   [:p.menu-item-right.menu-item-text
    price]
   [:p.menu-item-middle]])


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
       [:br]
       "MENÙ RISTORANTE"]

      [:p.menu-section-title
       "PASTE"]
      (menu-item-f "Spaghetti alla Carbonara" "7,00")
      (menu-item-f "Spätzle alla Tirolese" "7,00")
      (menu-item-f "Tagliatelle al Ragù di Salsiccia" "7,00")
      (menu-item-f "Gnocchi alla Fonduta di Toma" "8,00")
      (menu-item-f "Agnolotti al Burro e Salvia" "8,00")
      
      [:p.menu-section-title
       "SPECIALITÀ"]

      (menu-item-f "Alette di Pollo alla Diavola con Patatine" "8,00")
      (menu-item-f "Stinco a tutta Birra con Carote Arrostite" "8,50")
      (menu-item-f "Peposo Toscano con Patata al Cartoccio" "9,00")
      (menu-item-f "Costine al Forno in stile BBQ con Carote Arrostite" "10,00")
      (menu-item-f "Suprême di Tacchino al Tè Affumicato con Ratatouille" "10,00")
      (menu-item-f "Doppia Svizzerina Coalvi alla Crema di Toma con Patatine" "11,00")
      (menu-item-f "«Orecchia di Elefante» Coalvi con Patatine" "12,00")
      (menu-item-f "Tagliata Coalvi (al Sangue) - al Naturale" "14,00")
      (menu-item-f "Tagliata Coalvi (al Sangue) - al Bacon con Cipolle Caramellate" "15,00")
      (menu-item-f "Tagliata Coalvi (al Sangue) - al Blu di Lanzo con Patata al Cartoccio" "15,00")

      [:p.menu-section-title
       "SFIZI & CONTORNI"]

      (menu-item-f "Patatine Fresche" "3,00")
      (menu-item-f "Carote Intere Arrostite" "3,50")
      (menu-item-f "Cipolle Caramellate" "3,50")
      (menu-item-f "Insalata mista" "3,50")
      (menu-item-f "Ratatouille" "4,00")
      (menu-item-f "Bomba al Gorgonzola" "4,00")       
      (menu-item-f "Scamorzine affumicate impanate" "4,00")

      [:p.menu-title
       "MENÙ PUB"]
      
      [:p.menu-section-title
       "TAGLIERI"]

      (menu-item-f "Disfida delle Tome" "9,00")
      (menu-item-f "Selezione del Maslè" "9,00")
      (menu-item-f "Gran Misto di Salumi e Formaggi" "13,00")

      [:p.menu-section-title
       "PATATE FARCITE" [:br] "(Jacked Potatoes)"]

      (menu-item-f "Lardosa" "4,00")
      (menu-item-f "Fonduta" "4,00")
      (menu-item-f "Gorgo-Cipolluta" "4,50")
      (menu-item-f "Pancett Atomica (Bacon & Crema di Toma d’Alpeggio)" "4,50")

      [:p.menu-section-title
       "FRITTURE"]

      (menu-item-f "Patatine fresche fatte in casa" "3,00")
      (menu-item-f "Spiedino di patata fresca spiralizzata" "3,50")
      (menu-item-f "Anelli di Cipolle Rosse fresche" "4,00")

      [:p.menu-section-title
       "PAN-FRITTO" [:br] "Lievitato in Casa:"]

      (menu-item-f "con Olive Piccanti" "4,00")
      (menu-item-f "con Mortadella" "4,00")
      (menu-item-f "con Lardo Artigianale" "5,00")
      (menu-item-f "con Pancetta Affumicata" "5,00")
      (menu-item-f "con Stracchino Caseificio E. Lisa" "6,00")
      (menu-item-f "con Prosciutto Crudo" "6,00")
      (menu-item-f "con Prosciutto Crudo & Stracchino" "8,00")
      
      [:p.menu-section-title
       "HAMBURGER FATTI IN CASA" [:br] "(130 gr.) con Pane al Sesamo, Pomodori & Lattuga"]

      (menu-item-f [:div.menu-item-text "Vegan Beauty" " con Patatine Fresche - Ortaggi, verdure, legumi"] "7,00")
      (menu-item-f [:div.menu-item-text "Indaco" " con Patatine Fresche - Puro Tacchino con Verdure al Curry"] "7,50")
      (menu-item-f [:div.menu-item-text "Micidiale" " con Patatine Fresche - Puro Suino allevato in Piemonte portato ad un grado di piccantezza «AB-normal»"] "7,50")
      (menu-item-f [:div.menu-item-text "Amerinide" " con Patatine Fresche - Puro Suino allevato in Piemonte con Cipolle caramellate e Pancetta affumicata"] "8,00")
      (menu-item-f [:div.menu-item-text "Pedemontano" " con Patatine Fresche - Pura Vitella Coalvi con Crema di Blu di Lanzo e Trevigiana"] "8,50")
      (menu-item-f [:div.menu-item-text "Continentale" " con Patatine Fresche - Pura Vitella Coalvi con Fonduta di Toma d’Alpeggio"] "8,50")
      (menu-item-f [:div.menu-item-text "Krapf-Burger con Patatine Fresche - Vitella Coalvi con Fonduta di Toma d’Alpeggio in un bombolone fritto al momento"] "9,00")  
      (menu-item-f [:div.menu-item-text "Esagerato con Patatine Fresche - Doppio «Amerinide» con Fonduta"] "10,00")
      (menu-item-f [:div.menu-item-text "Baby-burger di pura Vitella Coalvi al naturale servito nel piatto con patatine fresche, senza il pane e senza pomodori e lattuga"] "6,00")

      [:p.menu-section-title
       "PANINI"]

      (menu-item-f "Speck & Toma" "4,50")
      (menu-item-f "Balengo (con Würstel, Uovo strapazzato e Caprino sardo stagionato)" "5,00")
      (menu-item-f "Porcaccione (alla Frank) (con Salsicciotto alla piastra, Cipolle Caramellate & Crema di Toma d’Alpeggio)" "5,50")
      (menu-item-f "Club Sandwich con Patatine" "11,00")

      [:p.menu-section-title
       "DOLCI"]

      (menu-item-f "Tiramisù" "4,50")
      (menu-item-f "Torta al Fondente all’Arancia" "4,50")
      (menu-item-f "Crème Brûlée alla Vaniglia del Madagascar" "4,50")
      (menu-item-f "Cheesecake alla Robiola" "4,50")
      (menu-item-f "Torcetti di Agliè con Passito di Caluso DOC" "5,00")

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
      
      (menu-item-b "ALC. 5%" ["3,00" "5,00" "10,00"])

      [:p.menu-section-title
       "PUNK IPA"]

      [:p.menu-item-text
       "Uno dei prodotti più famosi di Brewdog. Nel bicchiere la Punk IPA si presenta di un bel colore oro carico con un cappello di schiuma compatto. Al naso alle note fresche del luppolo si uniscono sensazioni più leggere di frutta a pasta gialla e balsamiche di erba aromatica. In bocca, caratterizzata da un corpo ampio, la dolcezza iniziale è ben equilibrata dalle note amare e agrumate che dominano il finale invitando ripetutamente al sorso successivo." [:br]
       "Birrificio: Brewdog (Scozia)" [:br]
       "Stile: Ipa (Indian pale ale)"]

      (menu-item-b "ALC. 5,4%" ["3,50" "5,50" "11,00"])


      [:p.menu-section-title
       "OBLIVION"]

      [:p.menu-item-text
       "Vi presentiamo una classica rivisitazione della tradizione birraia belga; il corpo è intenso, avvolge il palato e scalda il cuore. L'elevato tenore alcolico non nasconde la complessità dei suoi aromi ed in bocca risaltano tutte le note di frutta matura e spezie. È una birra da meditazione, adatta per lunghe serate da passare con gli amici." [:br]
       "Birrificio: Beer selection (progetto irriverence)" [:br]
       "Stile: Trippel belgian ale"]

      (menu-item-b "ALC. 8,5%" ["3,00" "5,00" "10,00"] )

      [:p.menu-section-title
       "FALESIA"]

      [:p.menu-item-text
       "In stile Boch. Colore Rosso intenso, grado alcolico 7,0. Birra a bassa fermentazione. Al naso è dolce con note di caramello e un forte aroma di malto. Sentori di noci e frutta rossa matura." [:br]
       "Birrificio: Lariano" [:br]
       "Stile: Bock"]

      (menu-item-b "ALC. 7%" ["3,00" "5,00" "10,00"])


      [:p.menu-section-title
       "MADIBA PORTER"]

      [:p.menu-item-text
       "Porter è uno stile birraio  ottenuto con malti di colore scuro il cui nome  in inglese significa facchino: la birra proposta per la prima volta nel 1722 da un pub di Londra in poco tempo divenne popolare tra quella categoria di lavoratori. Birra ad alta fermentazione con sentori di cioccolato e caffè dati dalle tostature dei malti. Corpo medio e di facile beva, nonostante il colore scuro." [:br]
       "Birrificio: Lariano" [:br]
       "Stile: Porter"]

      (menu-item-b "ALC. 4,6%" ["3,00" "5,00" "10,00"])

      
      [:p.menu-section-title
       "SMOKY"]

      [:p.menu-item-text
       "Moderna interpretazione delle tradizionali rauch beer tedesche tipiche della zona di Bamberga. Questo stile nacque con la scoperta che essiccare i malti su fiamma viva conferiva loro un carattere affumicato, che talvolta si trasferiva anche al sapore della birra ottenuta da questi malti. Interpretazione tutta italiana, un poco più secca, un pò più amara, molto, molto più bevibile delle versioni tedesche che l'hanno ispirata. Si presenta di un bel colore ambrato con qualche riflesso color rame. schiuma color crema, persistente ma non eccessiva. Una buona birra facile da bere, ben maltata, corpo medio e carbonazione bassa." [:br]
       "Birrificio: Rurale" [:br]
       "Stile: Rauchbeer"]

      (menu-item-b "ALC. 5,6%" ["3,00" "5,00" "10,00"])

      
      [:p.menu-section-title
       "MILOUD"]

      [:p.menu-item-text
       "Colore ramato, birra ad alta fermentazione. Aroma di luppolo moderatamente intenso, fruttata ed agrumata. Il sentore di malto, caramello ed il corpo leggero la rendono decisamente rinfrescante. È una birra che storicamente non si serve ghiacciata, per rispettare quelle che sono le sue caratteristiche organolettiche." [:br]
       "Birrificio: Lariano (Lecco)" [:br]
       "Stile: Bitter Ale"]

      (menu-item-b "ALC. 4%" ["3,00" "5,00" "10,00"])

      [:p.menu-section-title
       "MAGNUS (33 cl)"]

      [:p.menu-item-text
       "Complessa ed infinita nel gusto, solo come le vere birre di abbazia belghe. È caratterizzata dalla raffinatezza dei malti ad intensa tostatura che evocano note di caramello, caffè, liquirizia e perfino cioccolato. Piacevole ed appagante sorso dopo sorso, raffinata nei profumi di malto, di frutta rossa e frutta secca, le note della intrigante speziatura chiudono una piacevolissima bevuta." [:br]
       "Birrificio: Croce di Malto (Novara)" [:br]
       "Stile: Double Belgian Ale"]

      (menu-item-b "ALC. 7,3%"  ["3,00" "5,00" "10,00"])

      [:p.menu-section-title
       "ANTANI"]

      [:p.menu-item-text
       "Il birrificio che la produce si chiama Toccalmatto e la birra si chiama Antani... Non potete che aspettarvi una cosa strana! Una Spicy Belgian Ale dallo splendido colore ambrato, una base maltata dai ricchi sentori di toffee e caramello bruno e le classiche note di frutti rossi donate dal lievito. Su questa base tradizionale, ogni anno il birrificio sperimenta mix creativi di spezie e ingredienti aromatici, e quest'anno è la volta di un blend di tè neri, scorze d'agrumi e frutta disidratata! Non aspettatevi nulla che abbiate mai assaggiato, senza schiuma e con una gasatura pressoché inesistente." [:br]
       "Birrificio: Fidenza" [:br]
       "Stile: Belgian ale"]

      (menu-item-b "ALC. 6,0%" ["3,00" "5,00" "10,00"])

      [:p.menu-section-title
       "RESET"]

      [:p.menu-item-text
       "Birra ispirata allo stile American Amber Ale. L'abbondante luppolatura con le migliori varietà aromatiche americane conferisce a questa birra un gusto e un profumo intensi, che trovano il loro bilanciamento nelle ricche note maltate, il colore è di un ambrato intenso che tende al rosso. E' interessante l'abbinamento con carni rosse e formaggi stagionati." [:br]
       "Birrificio: Rurale a Desio (MB)" [:br]
       "Stile: Amber Ale"]

      (menu-item-b "ALC. 5,6 %" ["3,00" "5,00" "10,00"])

      [:p.menu-section-title
       "TEMPORIS"]

      [:p.menu-item-text
       "E' la birra prodotta e dedicata per la primavera, e come tale offre un’esplosione di profumi che vanno dal fruttato, all’erbaceo dovuto ai luppoli usati in fermentazione, allo speziato ottenuto con un miscela di erbe e spezie elaborate dopo lunghe notti di ricerche. Una birra ricca di suggestioni, complessa nei profumi e nel gusto, ed altamente dissetante." [:br]
       "Birrificio: Croce di malto (Novara)" [:br]
       "Stile: Saison"]

      (menu-item-b "ALC. 6,8 %" ["3,00" "5,00" "10,00"])

      [:p.menu-section-title
       "LA ROSSA"]

      [:p.menu-item-text
       "Birra doppio malto a bassa fermentazione, non pastorizzata, prodotta con materie prime selezionate e di qualità. Il suo colore brillante, la schiuma pannosa, ed i profumi fruttati preannunciano la pienezza data dal ricco sapore dei malti europei, protagonisti anche nella moderata dolcezza del finale. Il bilanciamento apportato dai luppoli, ed il piacevole grado alcolico, invogliano pericolosamente la beva." [:br]
       "Birrificio: La Tresca (Novara)" [:br]
       "Stile: Bock"]

      (menu-item-b "ALC. 6,2 %" ["3,00" "5,00" "10,00"])

      [:p.menu-title.overlay
       "II. IN BOTTIGLIA"]

      [:p.menu-section-title
       "OKIE  MATILDE (75 cl)"]

      [:p.menu-item-text
       "È con un certo orgoglio che vi presentiamo questa birra. Un tributo e una rivisitazione di una grande trappista belga (la Orval) che si presenta però molto più equilibrata dell'originale. È una cosiddetta birra “acida”, di colore arancio opaco, che sprigiona sin dal primo accostamento tutte le note speziate: pepe, scorza d'arancio, pesca e pera, e l'inconfondibile componente lattica data dai Brettomiceti usati per la fermentazione. La bevuta è molto facile e soddisfacente." [:br]
       "Birrificio: Toccalmatto (Parma)" [:br]
       "Stile: Belgian pale ale"]

      (menu-item-b2 "ALC 6,2%" "75,cl - 8,00")]

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
      (menu-item-f [:div.menu-item-text "Bibite Galvanina BIO  (35,5cl) cola - aranciata bionda - aranciata rossa - gazzosa - tonica - ginger - chinotto - thè freddo limone❘pesca"] "3,50")
        
      (menu-item-f "Succhi di frutta BIO" "3,50")

      [:p.menu-title.overlay
       "ALCOLICI"]

      [:p.menu-section-title "AMARI"]

      (menu-item-f "San Simone, Amaro Montenegro, Jaegermaister, Amaro del Capo, Limoncello, Mirto" "3,00")

      [:p.menu-section-title "WHISKY"]

      (menu-item-f "Tullamore – Bushmills" "4,00")
      (menu-item-f "Moonshine Platte Valley – Katskill – Applejack" "4,50")
      (menu-item-f "Acnoc 12 yrs, Balblair, Ardbeg" "5,50")

      [:p.menu-section-title "GRAPPE (Antica Distilleria Quaglia)"]

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
    (copyright)]))

(deftemplate menu "menu.html" []
  [:body :div#wrap] (html-content (content)))



;; FIXME:
;; - On resize the scrollspy doesn't work. Try bootstrap one maybe?
;; - bootstrap affix for overlay for "position: fixed"
;; - js update position

