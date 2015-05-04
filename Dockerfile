# DOCKER-VERSION 1.5.0, build a8a31ef

# habd.as Dockerfile
# Runs Octopress 3 under Nginx with Passenger

FROM phusion/passenger-ruby21:0.9.15
MAINTAINER Josh Habdas "jsoh@habd.as"

# Set environment variables
ENV HOME /root

# Use baseimage-docker's init process
CMD ["/sbin/my_init"]

# Expose Nginx HTTP service
EXPOSE 80

# Start Nginx / Passenger
RUN rm -f /etc/service/nginx/down

# Remove the default site
RUN rm /etc/nginx/sites-enabled/default

# Add the Nginx site and config
ADD nginx.conf /etc/nginx/sites-enabled/webapp.conf

# Install bundle of gems
WORKDIR /tmp
ADD Gemfile /tmp/
ADD Gemfile.lock /tmp/
RUN bundle install

# Add the Passenger app
ADD . /home/app/webapp
RUN chown -R app:app /home/app/webapp

# Build the app with Jekyll
WORKDIR /home/app/webapp
RUN jekyll build

# Clean up APT when done
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
