(set-env!
 :source-paths #{"src/clj" "src/cljs"}
 :resource-paths #{"html"}

 :dependencies '[[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [adzerk/boot-cljs "1.7.228-1"]
                 [pandeiro/boot-http "0.7.3"]
                 [adzerk/boot-reload "0.4.12"]
                 [adzerk/boot-cljs-repl "0.3.3"]
                 [com.cemerick/piggieback "0.2.1" :scope "test"]
                 [weasel "0.7.0" :scope "test"]
                 [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                 [compojure "1.5.1"]
                 [javax.servlet/servlet-api "3.0-alpha-1"]
                 [enlive "1.1.6"]
                 [hiccup "1.0.5"]
                 [hickory "0.7.0"]
                 [clj-time "0.12.2"]
                 [cljsjs/photoswipe "4.1.1-0"]
                 [cljsjs/waypoints "4.0.0-0"]
                 [cljsjs/smooth-scroll "9.1.4-0"]
                 [prismatic/dommy "1.1.0"]
                 [hipo "0.5.2"]
                 [cljs-ajax "0.5.8"]
                 [cljsjs/clipboard "1.5.13-0"]])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[pandeiro.boot-http :refer [serve]]
         '[adzerk.boot-reload :refer [reload]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
         'boot.repl)


(swap! boot.repl/*default-dependencies*
       concat '[[cider/cider-nrepl "0.15.0-SNAPSHOT"]])

(swap! boot.repl/*default-middleware*
       conj 'cider.nrepl/cider-middleware)



(def defaults {:test-dirs #{"test/cljc" "test/clj" "test/cljs"}
               :output-to "main.js"
               :testbed :phantom
               :namespaces '#{}})

(deftask add-source-paths
  "Add paths to :source-paths environment variable"
  [t dirs PATH #{str} ":source-paths"]
  (merge-env! :source-paths dirs)
  identity)

(deftask tdd
  "Launch a customizable TDD Environment"
  [e testbed        ENGINE kw     "the JS testbed engine (default phantom)" 
   k httpkit               bool   "Use http-kit web server (default jetty)"
   n namespaces     NS     #{sym} "the set of namespace symbols to run tests in"
   o output-to      NAME   str    "the JS output file name for test (default main.js)"
   O optimizations  LEVEL  kw     "the optimization level (default none)"
   p port           PORT   int    "the web server port to listen on (default 3000)"
   t dirs           PATH   #{str} "test paths (default test/clj test/cljs test/cljc)"   
   v verbose               bool   "Print which files have changed (default false)"]
  (let [dirs (or dirs (:test-dirs defaults))
        output-to (or output-to (:output-to defaults))
        testbed (or testbed (:testbed defaults))
        namespaces (or namespaces (:namespaces defaults))]
    (comp
     (serve :handler 'magic.core/app
            :resource-root "target"
            :reload true
            :httpkit true
            :port port)
     #_(add-source-paths :dirs dirs)
     (watch :verbose verbose)
     (reload)
     (cljs-repl)
     (cljs :compiler-options {:out-file output-to
                              :optimizations optimizations})
     (target :dir #{"target"}))))





(deftask release []
  (comp
   (cljs :compiler-options {:out-file (:output-to defaults)
                            :optimizations :advanced})

   (target :dir #{"target"})))

