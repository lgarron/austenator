
SFTP_PATH     = "towns.dreamhost.com:~/garron.net/app/austenator/"
URL           = "https://garron.net/app/austenator/"

.PHOHY: deploy
deploy:
	rsync -avz --exclude .git . "${SFTP_PATH}"
	echo "Done deploying. Go to ${URL}"

