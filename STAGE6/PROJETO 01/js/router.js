export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location; // pathname location desestruturado/destructor
    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then((data) => data.text()) // vá buscar  rota e depois execute essa função
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
