OUTPUT="$(git branch | grep \* | cut -d ' ' -f2)"
if [ "$OUTPUT" == "master" ]; then
        echo "If Public House is up to date, press ENTER"
        read -s -n 1 key
        if [[ $key = "" ]]; then 
                rake build
                . _deployConfig.txt
                rsync -avz -e ssh _site/ --delete $remotePath
        else
            echo "Deployment to stable was canceled"
            exit
        fi
else
        echo "ERROR! -- Public House is not on the Master branch"
        exit
fi