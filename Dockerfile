# Use an official lightweight Nginx image
FROM nginx:alpine

# Remove the default nginx index page
RUN rm /usr/share/nginx/html/*

# Copy the static website files into the nginx server
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
