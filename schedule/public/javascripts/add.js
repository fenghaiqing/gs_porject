var list=new Vue({
    el:"#sc_list",
    data:{
        title:null,
        isContinue:false,
        isSuccess:false,
        msg:null,
        dataList:null,
        detail:{title:null,headId:null,startDate:null,endDate:null},
        flag:false,
        flag1:false,
        flag2:false
    },
    methods:{
        addList:function (){
            if(isNull(this.title)){
                return;
            }
            this.$http.post('/scheduleHead/addScheduleHead',{
                title:this.title
            }).then(function(result){
                    this.isSuccess=true;
                    this.msg=result.body.msg;
                });
        },
        continueAdd : function () {
            this.isSuccess=false;
            this.title=null;
        },
        cancel : function () {
            window.location.href='/index';
        },
        queryList: function () {
            this.$http.post('/scheduleHead/queryHead',{})
                .then(function(result){
                    if(result.body.code==200){
                        this.dataList=result.body.data;
                        this.detail.headId = this.dataList[0].id;
                    }
                });
        },
        addDetail:function(){
                this.flag=false;
                this.flag1=false;
                this. flag2=false;
            if(isNull(this.detail.headId)){
                this.flag=true;
                return ;
            }
            if(isNull(this.detail.title)){
                this.flag=true;
                return ;
            }
            if(isNull(this.detail.startDate)){
                this.flag1=true;
                return ;
            }
            if(isNull(this.detail.endDate)){
                this.flag2=true;
                return ;
            }
        }
    },
    created(){
        this.queryList();
    }
});

function isNull(str){
    return  str==null || str==undefined || str=='';
}
