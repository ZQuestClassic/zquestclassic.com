for i in public/img/sotw-*.png; do 
    convert "$i" -thumbnail 20% "public/img/thumbnails/`basename $i`"
done

for i in public/img/sotw-*.gif; do 
    convert "$i[0]" -thumbnail 20% "public/img/thumbnails/`basename $i`"
done
