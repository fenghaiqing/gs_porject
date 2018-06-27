
var vue=new Vue({
    el:"#sd_index",
    data:{
        current:0,
        title:null,
        dataList:null
    },
    methods:{
        addClass:function (index) {
            this.current=index;
        },
        queryList: function () {
            this.$http.post('/scheduleHead/queryHead',{})
                .then(function(result){
                    if(result.body.code==200){
                        this.dataList=result.body.data;
                    }
                });
        }
    },
    created(){
        this.queryList();
    }
});

