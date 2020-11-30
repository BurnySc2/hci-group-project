# install packages:

npm install

# install couchdb:

sudo snap install couchdb
couchdb will be running from now on

# print couchdb info?

curl http://127.0.0.1:5984/

# enable cors:

http://127.0.0.1:5984/_utils
under 'configuration' and modify there: enable CORS and under 'origin domains' accept requests from all domains

OR:

modify '/var/snap/couchdb/5/etc/local.ini'
add line under '[httpd]' with:
enable_cors = true
(doesnt seem to change anything?)

finally (maybe not needed):
restart couchdb with command 'couchdb restart'


# Prettier
format all files with:
npx prettier --write "**/*.js"
