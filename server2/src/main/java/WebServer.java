import io.vertx.core.AbstractVerticle;
import io.vertx.core.Vertx;
import io.vertx.core.http.HttpServerResponse;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;

import java.util.Date;

/**
 * Created by admin on 3/10/16.
 */
public class WebServer extends AbstractVerticle {

    Vertx vertx = Vertx.vertx();

    @Override
    public void start() {

        setUpData();

        Router router = Router.router(vertx);

        router.route().handler(BodyHandler.create());
        router.get("/test").handler(this::handleRequest);
        router.get("/test2").handler(this::handleRequest2);

        vertx.createHttpServer().requestHandler(router::accept).listen(8080);
    }

    private void handleRequest(RoutingContext routingContext) {
        String randomId = routingContext.request().getParam("id");
        HttpServerResponse response = routingContext.response();
        if (randomId == null) {
            sendError(400, response);
        } else {
            String time = new Date().toString();
            if (time == null) {
                sendError(404, response);
            } else {
                response.putHeader("content-type", "application/json").end(time);
            }
        }
    }

    private void handleRequest2(RoutingContext routingContext) {
        HttpServerResponse response = routingContext.response();
        response.putHeader("content-type", "application/json").end("hello java");
    }

    private void sendError(int statusCode, HttpServerResponse response) {
        response.setStatusCode(statusCode).end();
    }

    private void setUpData() {


    }


}


