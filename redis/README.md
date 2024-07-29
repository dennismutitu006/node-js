connecting your node.js ton a redis database
node-redis is the Redis client for Node.js
node-redis requires a running Redis or Redis Stack server

install redis server first in your local machine
sudo apt-get update
sudo apt install redis

Redis will start automatically and it will restart at boot time.
Command used to start redis server
/etc/init.d/redis-server {start|stop|restart|force-reload|status}

installing node-redis
npm install redis
