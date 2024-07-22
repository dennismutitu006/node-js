Node.js is an open-source and cross platform JS runtime environment.
This app runs on a single process without creating a new thread for
every request.
It provides a set of asynchronous I/O primitives in its library that
prevent JS code from blocking a.

When Nodejs perfoms an i/o operation, like reading from the network,
accessing  a db or filesytem, instead of blocking the thread and wasting
cpu cycles waiting , it will resume operations when the  response comes
back.Hence allowing it to handle thousands of concurrent connections with
a single server without introducing a burden of managing thread concurrency.

with Node.js many fron-end devs are now able to write the server side code in
addition to the client-side code without the need to learn a diff language.

In Node.js the new ECMAScript standards can be used without problems, 
as you don't have to wait for all your users to update their browsers 
- you are in charge of deciding which ECMAScript version to use by changing the Node.js version, 
and you can also enable specific experimental features by running Node.js with flags.
