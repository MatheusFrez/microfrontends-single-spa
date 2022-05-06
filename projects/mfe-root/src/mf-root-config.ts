import { registerApplication, start } from "single-spa";

const acessToken = localStorage.getItem('acess_token');

registerApplication({
  name: "@mf/mf-micro-3-login",
  app: () => System.import("@mf/mf-micro-3-login"),
  activeWhen: ["/"],
  customProps: (name, location) => {
    return { authToken: acessToken };
  },
});

registerApplication({
  name: "@mf/mf-micro-1",
  app: () => System.import("@mf/mf-micro-1"),
  activeWhen: ["/teste1"],
  customProps: (name, location) => {
    return { authToken: acessToken };
  },
});

registerApplication({ 
  name: "@mf/mf-micro-2",
  app: () => System.import("@mf/mf-micro-2"),
  activeWhen: ["/teste2", "/teste2/about"],
  customProps: (name, location) => {
    return { authToken: acessToken };
  },
});

start({
  urlRerouteOnly: true,
});