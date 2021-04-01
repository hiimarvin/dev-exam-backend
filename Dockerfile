FROM composer:2.0.11

# Install MySQL drivers
RUN docker-php-ext-install mysqli pdo pdo_mysql && \
    docker-php-ext-enable pdo_mysql