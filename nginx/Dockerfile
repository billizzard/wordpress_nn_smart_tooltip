FROM nginx

RUN apt-get update \
 && apt-get install -y git nano curl zlib1g-dev \
         libfreetype6-dev \
         libjpeg62-turbo-dev \
         libmcrypt-dev \
         libpng-dev \
         libxml2-dev

ADD nginx.conf /etc/nginx/sites-available/
RUN ln -s /etc/nginx/sites-available/nginx.conf /etc/nginx/conf.d/
RUN rm -rf /etc/nginx/conf.d/default.conf
WORKDIR /var/www/wordpress