import ZForm from './form'

const components = [
  ZForm
]

const install = function(Vue) {
  components.forEach(component => {
    console.log(component)
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
}