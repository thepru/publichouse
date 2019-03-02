cd "`dirname "$0"`"
. _deployConfig.txt
rsync -avz -e ssh _site/ --delete $remotePath