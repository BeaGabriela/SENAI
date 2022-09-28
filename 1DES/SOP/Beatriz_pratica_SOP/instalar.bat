echo off
md c:\site
md c:\site\imagens
md c:\site\paginas
cd instala_site
copy index.html c:\site\
cd imagens
copy *.* c:\site\imagens
cd ..
cd paginas
copy *.* c:\site\paginas
cd ..
cd ..
