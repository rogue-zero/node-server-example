FROM ubuntu
ADD target/node-server-example /node-server-example
CMD ["/node-server-example"]