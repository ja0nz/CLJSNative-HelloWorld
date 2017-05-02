(require '[lumo.build.api :as b])

(b/build "src"
         {:main 'app.core
          :output-to "main.js"
          :optimizations :advanced})
