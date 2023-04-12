1)Middlware : - It is a function that is permforming a specific task and is present between requests and responses and it has access to both request object and the response object. --> like amazon delivery guy who has the address for both amazon warehouse and our house.

2)use app.use to invoke middleware function:-access to request and response objects

3)Anytime you visit a route, first middleware will be executed

steps:
a) making the request
b) going to middleware function
c) goint to route and response object

next():- tells the compiler once the middleware is executed, please go to the next in the line--> execution stack has the list of middleware and functions, next tells the compiler to go to line of the route after the middleware is executed. :--> takes the compiler to the route function called in the express.
<>....................................................................................</>
<code>
app.use((req, res, next) => {
logic of middleware

});
</code>
