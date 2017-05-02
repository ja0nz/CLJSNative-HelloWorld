(require '[lumo.build.api :as b])

(b/build "src"
         {:main 'app.core
          :output-to "build/main.js"
          :optimizations :advanced})
