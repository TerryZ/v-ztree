import tree from './Tree';

const Plugin = {
    install(Vue, options = {}){
        Vue.component(tree.name, tree);
    }
};

export default Plugin;