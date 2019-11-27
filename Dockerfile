FROM nginx
COPY nginx.conf /etc/nginx
ADD build/ /usr/share/nginx/html
VOLUME /usr/share/nginx/html
VOLUME /etc/nginx