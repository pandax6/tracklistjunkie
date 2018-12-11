const express = require("express");
const next = require("next");
const { createServer } = require("http");
const serveStatic = require("serve-static");
const { join } = require("path");

const routes = require("./routes");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
//const { renderComponent } = require('next/server')
const handler = routes.getRequestHandler(app);

/*

WHOLE APP IS FUCKING BROKEN

 */

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/show/:id", (req, res) => {
      return app.render(req, res, "/show", { id: req.params.id });
    });
    server.get("/edit/:id", (req, res) => {
      return app.render(req, res, "/edit", { id: req.params.id });
    });

    server.get("/login", (req, res) => {
      return app.render(req, res, "/login");
    });

    server.get("/edit", (req, res) => {
      return app.render(req, res, "/edit");
    });
    server.get("/show", (req, res) => {
      return app.render(req, res, "/show");
    });
    server.get("/", (req, res) => {
      return app.render(req, res, "/");
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    /*
		server.get('/show/:id', (req, res) => {
		  return app.render(req, res, '/show', { id: req.params.id })
		})
		  // Support clean URLs
		server.get("/show/:id", (req, res) => {
		  const actualPage = "/show";
		  const queryParams = { id: req.params.id };
		  const mergedQuery = Object.assign({}, req.query, req.params)
	  
		  app.render(req, res, actualPage, mergedQuery);
		});
		*/

    /*
		// Support clean URLs
		server.get("/edit/:id", (req, res) => {
			const actualPage = "/edit";
			const queryParams = { id: req.params.id };
			app.render(req, res, actualPage, queryParams);
		});
		*/

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

/*
app.prepare().then(() => {
  const server = express();

  server.use(
    serveStatic(join(__dirname, "static"), {
      
    })
  );

  server.get("/show/*", (req, res) => {
    app.render(req, res, "/show", {
      fullUrl: req.originalUrl
    });
  });

  server.use(handler);

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log("> Ready on http://localhost:3000");
  });
});
*/
