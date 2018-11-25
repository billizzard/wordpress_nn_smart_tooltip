FROM wordpress:4.9.8-php7.1-fpm

RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng-dev \
        libxml2-dev \
        nano libssl-dev libcurl4-openssl-dev pkg-config \
    && docker-php-ext-install -j$(nproc) mysqli mbstring pdo pdo_mysql soap curl \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
    && pecl install xdebug \
 && curl -sS https://getcomposer.org/installer \
  | php -- --install-dir=/usr/local/bin --filename=composer

RUN { \
        echo '[xdebug]'; \
        echo 'zend_extension=/usr/local/lib/php/extensions/no-debug-non-zts-20160303/xdebug.so'; \
        echo "error_reporting = E_ALL"; \
        echo "display_startup_errors = On"; \
        echo "display_errors = On"; \
        echo "xdebug.remote_enable=1"; \
        echo "xdebug.remote_connect_back=1"; \
        echo "xdebug.idekey=\"PHPSTORM\""; \
        echo "xdebug.remote_port=9001"; \
    } > /usr/local/etc/php/conf.d/xdebug.ini

WORKDIR /var/www/wordpress