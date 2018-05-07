<template>
    <div>
        <ul class="ztree" ref="ztree"></ul>
    </div>
</template>

<script>
    import ztree from 'ztree';
    //import 'ztree/css/metroStyle/metroStyle.css'
    import 'ztree/css/zTreeStyle/zTreeStyle.css'
    export default {
        name: "v-tree",
        props: {
            check: {
                type: Boolean,
                default: false
            },
            data: {
                type: [String, Array]
            },
            dataFormat: {
                type: Function
            },
            expandAll: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                treeId: ''
            };
        },
        methods: {
        },
        mounted(){
            let that = this;
            let onCheck = (event, treeId, treeNode)=> that.$emit('selected', $.fn.zTree.getZTreeObj(treeId).getCheckedNodes());
            let onClick = (event, treeId, treeNode)=> that.$emit('selected', [treeNode]);

            let setting = {
                edit: {
                    enable: false,
                    showRemoveBtn: false,
                    showRenameBtn: false
                },
                check: {
                    enable: that.check
                },
                /*
                async : {
                    enable: true,
                    url : that.data,
                    dataFilter: (treeId, parentNode, responseData)=> responseData.values.treeData
                },
                */
                view: {
                    selectedMulti : false,
                    dblClickExpand: (treeId, treeNode)=>{
                        return treeNode.level > 0;
                    },
                    fontCss: (treeId,treeNode)=>{
                        /*
                        let css = {};
                        if(!treeNode.status) css = {'color':'red','text-decoration':'line-through'};
                        return css;
                        */
                    }
                },
                data: {
                    simpleData: {
                        enable: true
                    }
                },
                callback : {
                    onAsyncSuccess : (event, treeId, treeNode, msg)=>{
                        if(that.expandAll) $.fn.zTree.getZTreeObj(treeId).expandAll(true);
                    }

                    /*
                    beforeDrop : function(treeId, treeNodes, targetNode, moveType){
                        cleanForm();
                        var control = false;
                        if(treeNodes && treeNodes.length > 0){
                            var msg = '您确认将 “' + treeNodes[0].name + '” 节点移动到 “'+targetNode.name+'” 下吗？';
                            if(confirm(msg)) control = true;
                        }
                        return control;
                    },
                    onDrop : function(event, treeId, treeNodes, targetNode, moveType){
                        if(treeNodes && treeNodes.length > 0 && targetNode){
                            $.eAjax({
                                url : $webroot + 'func/updateFuncParent',
                                data : [
                                    {name:'id',value:treeNodes[0].id},
                                    {name:'pid',value:targetNode.id}
                                ],
                                success : function(returnInfo) {
                                    var treeObj = $.fn.zTree.getZTreeObj(treeId);
                                    treeObj.reAsyncChildNodes(null, "refresh");
                                    eAlert.success('功能模块移动成功！');
                                }
                            });
                        }
                    }*/
                }
            };

            if(typeof(this.data) === 'string'){
                setting.async = {
                    enable: true,
                    url : that.data
                };
                if(this.dataFormat && typeof(this.dataFormat)==='function')
                    setting.async.dataFilter = this.dataFormat;
            }

            if(setting.check && setting.check.enable) setting.callback.onCheck = onCheck;
            else setting.callback.onClick = onClick;

            this.treeId = 'zTree'+new Date().getTime();
            this.$refs.ztree.id = this.treeId;
            if(typeof(this.data) === 'object') {
                $.fn.zTree.init($(this.$refs.ztree), setting, this.data);
                if(this.expandAll) $.fn.zTree.getZTreeObj(this.treeId).expandAll(true);
            }else $.fn.zTree.init($(this.$refs.ztree), setting);
        }
    };
</script>

<style>
</style>