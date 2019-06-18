# Install NGINX from alphine
FROM nginx:alpine
# Look to copy config file
COPY nginx.conf /etc/nginx/nginx.conf
# Set the working directory
WORKDIR /usr/share/nginx/html
# Paste into the dist folder
COPY dist/ .
