npx webpack >&2

cat <<EOF
<html>
  <head>
    <meta charset="UTF-8">
    <script>

EOF

cat build/bundle.js | grep -Ev '^\s*//' 

cat <<EOF

    </script>
  </head>
  <body></body>
</html>
EOF
