import './set-public-path';

import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h: any) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecycle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
        },
      });
    },
    router,
    store,
  },
});

const { bootstrap: _bootstrap, mount: _mount, unmount: _unmount } = vueLifecycles;

export function bootstrap(props) {
  return Promise.resolve().then(() => {
    console.log('APP 2 BOOTSTRAPPED', props);
    _bootstrap(props);
  })
}

export function mount(props) {
  return Promise.resolve().then(() => {
    console.log('APP 2 MOUNTED', props);
    _mount(props);
  })
}

export function unmount(props) {
  return Promise.resolve().then(() => {
    console.log('APP 2 UNMOUNT', props);
    _unmount(props);
  })
}
