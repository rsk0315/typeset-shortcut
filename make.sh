npx webpack >&2

cat <<EOF
<html>
  <head>
    <meta charset="UTF-8">
    <script>

EOF

cat build/bundle.js | grep -Ev '^//' 

cat <<EOF

const query = fromBase64("");
const res = typeset(query);
document.write(toBase64(res));

    </script>
  </head>
  <body></body>
</html>
EOF
