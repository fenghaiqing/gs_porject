function isNull(str){
    return  str==null || str==undefined || str=='';
}
    var vue = new Vue({
        el:"#login_html",
        data:{
            userName:null,
            password:null
        },
        methods:{
            login:function () {
                if(isNull(this.userName)){
                    alert('用户名不能为空');
                    return;
                }
                if(isNull(this.password)){
                    alert('密码不能为空');
                    return;
                }
                this.$http.post('/users/login',{
                    userName:this.userName,
                    password:this.password
                }).then(function(res){
                        if(res.body.code==200){
                            document.location.href='/index';
                        }else{
                            alert(res.body.msg);
                        }
                });
            }
        }
    });

