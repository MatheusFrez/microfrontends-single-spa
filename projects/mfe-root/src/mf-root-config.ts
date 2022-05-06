import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mf/mf-micro-3-login",
  app: () => System.import("@mf/mf-micro-3-login"),
  activeWhen: ()=> true,
  customProps: (name, location) => {
    return { authToken: 'd83jD63UdZ6RS6f70D0' };
  },
});

registerApplication({
  name: "@mf/mf-micro-1",
  app: () => System.import("@mf/mf-micro-1"),
  activeWhen: ["/teste1"],
  customProps: (name, location) => {
    return { authToken: 'd83jD63UdZ6RS6f70D0' };
  },
});

registerApplication({ 
  name: "@mf/mf-micro-2",
  app: () => System.import("@mf/mf-micro-2"),
  activeWhen: ["/teste2"]
});

start({
  urlRerouteOnly: true,
});