tsc --downlevelIteration src/*.ts

cat <<EOF
<html>
  <head>
    <meta charset="UTF-8">
    <script>

exports = {};
EOF

cat src/{fonts,typeset,base64}.js \
    | grep -Ev '^//' \
    | sed -E 's/= require(.*)/= exports/'

cat <<EOF

const query = fromBase64("");
const res = typeset(query);
document.write(toBase64(res));

    </script>
  </head>
  <body></body>
</html>
EOF
