<h3 align="center">v-ztree</h3>

<br><br>

<p align="center"><img src="https://terryz.github.io/image/v-ztree/v-ztree.png" alt="v-ztree"></p>

<p align="center">
A simple tree for Vue2, support single or multiple(check) select tree, and support server side data
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/v-ztree"><img src="https://img.shields.io/npm/v/v-ztree.svg"></a>
  <a href="https://mit-license.org/"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg"></a>
  <a href="https://www.npmjs.com/package/v-ztree"><img src="https://img.shields.io/npm/dy/v-ztree.svg"></a>
</p>
<br><br><br><br><br>

## Vue plugin series

| Plugin | Status | Description |
| :---------------- | :-- | :-- |
| [v-page](https://github.com/TerryZ/v-page) | [![npm version](https://img.shields.io/npm/v/v-page.svg)](https://www.npmjs.com/package/v-page) | A simple pagination bar, including length Menu, i18n support |
| [v-dialogs](https://github.com/TerryZ/v-dialogs) | [![npm version](https://img.shields.io/npm/v/v-dialogs.svg)](https://www.npmjs.com/package/v-dialogs) | A simple and powerful dialog, including Modal, Alert, Mask and Toast modes |
| [v-tablegrid](https://github.com/TerryZ/v-tablegrid) | [![npm version](https://img.shields.io/npm/v/v-tablegrid.svg)](https://www.npmjs.com/package/v-tablegrid) | A simpler to use and practical datatable |
| [v-uploader](https://github.com/TerryZ/v-uploader) | [![npm version](https://img.shields.io/npm/v/v-uploader.svg)](https://www.npmjs.com/package/v-uploader) | A Vue2 plugin to make files upload simple and easier, <br>you can drag files or select file in dialog to upload |
| [v-ztree](https://github.com/TerryZ/v-ztree) | [![npm version](https://img.shields.io/npm/v/v-ztree.svg)](https://www.npmjs.com/package/v-ztree) | A simple tree for Vue2, support single or multiple(check) select tree, <br>and support server side data |
| [v-gallery](https://github.com/TerryZ/v-gallery) | [![npm version](https://img.shields.io/npm/v/v-gallery.svg)](https://www.npmjs.com/package/v-gallery) | A Vue2 plugin make browsing images in gallery |
| [v-region](https://github.com/TerryZ/v-region) | [![npm version](https://img.shields.io/npm/v/v-region.svg)](https://www.npmjs.com/package/v-region) | A simple region selector, provide Chinese administrative division data |
| [v-selectpage](https://github.com/TerryZ/v-selectpage) | [![npm version](https://img.shields.io/npm/v/v-selectpage.svg)](https://www.npmjs.com/package/v-selectpage) | A powerful selector for Vue2, list or table view of pagination, <br>use tags for multiple selection, i18n and server side resources supports |
| [v-suggest](https://github.com/TerryZ/v-suggest) | [![npm version](https://img.shields.io/npm/v/v-suggest.svg)](https://www.npmjs.com/package/v-suggest) | A Vue2 plugin for input suggestions by autocomplete |
| [v-playback](https://github.com/TerryZ/v-playback) | [![npm version](https://img.shields.io/npm/v/v-playback.svg)](https://www.npmjs.com/package/v-playback) | A Vue2 plugin to make video play easier |
| [v-selectmenu](https://github.com/TerryZ/v-selectmenu) | [![npm version](https://img.shields.io/npm/v/v-selectmenu.svg)](https://www.npmjs.com/package/v-selectmenu) | A simple, easier and highly customized menu solution |

<br><br>

## Install

``` bash
npm i v-ztree --save
```

Include plugin in your `main.js` file.

```js
import Vue from 'vue';
import vZtree from 'v-ztree';

Vue.use(vZtree);
```

## Deploy on you component

template code

```html
<template>
    <v-tree @selected="selected"
                :data="data"
                :data-format="dataFormat"
                :expand-all="false"></v-tree>
</template>
```

script code
```js
export default {
    name: 'myComponent',
    data(){
        return {
            //local json data
            data: [{id:11, pId:1, name:"node1"},{id:11, pId:1, name:"node1"},{...}],
            //server side data
            //data: 'http://xxx.com/load'
            //format server side return data, need format to an Array data type like local json data.
            //dataFormat: (treeId, parentNode, resp)=>resp.values.treeData
        }
    },
    methods:{
        //receive selected tree node info
        selected(nodes){
            console.log(nodes);//{id:1,pId:0,name:'aaa',...}
        }
    }
};
```
