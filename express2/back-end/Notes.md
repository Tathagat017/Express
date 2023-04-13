1)Middlware : - It is a function that is permforming a specific task and is present between requests and responses and it has access to both request object and the response object. --> like amazon delivery guy who has the address for both amazon warehouse and our house.

2)use app.use to invoke middleware function:-access to request and response objects

3)Anytime you visit a route, first middleware will be executed

steps:
a) making the request
b) going to middleware function
c) goint to route and response object

next():- tells the compiler once the middleware is executed, please go to the next in the line--> execution stack has the list of middleware and functions, next tells the compiler to go to line of the route after the middleware is executed. :--> takes the compiler to the route function called in the express.

without next the compiler will never reach the route function, and the excecution will be stuck, the request will infinite loop no end to response.

It works for only those routes which are below it

types of middleware : A) Inbuilt middleware eg->express.json -> to parse json data

                      B) Custom middleware eg -> timelogger,logger -> developer made

                      C)Community middleware eg-> like external modules in node, they can be installed from express-->multer ,CORS

CORS : -> Cross origin resource sharing -> communication between servers and resource sharing between them.

--> requests not made from same origin

--<> like front end is created in react and backend is created in express, when they interact , they share some kind of resources -- cross origin resources , though by default this is probhited , it only works when we allow it.

<>....................................................................................</>
<code>
app.use((req, res, next) => {
logic of middleware

});
</code>
