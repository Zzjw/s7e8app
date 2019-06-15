<template>
  <div class="container">

    <div class="header">
      <img @click="login" v-if="userinfo.avatarUrl" :src="userinfo.avatarUrl">
      <div class="username">
        <p @click="login" v-if="userinfo.nickName">{{userinfo.nickName}}</p>
      </div>
    </div>
    <!--获取授权-->
    <div class="btn-open">
      <button class="btn" open-type="getUserInfo" @getuserinfo="doLogin">获取授权</button>
    </div>

  </div>
</template>

<script>
import {get,post} from '@/utils/request'
import {showSuccess} from '@/utils/user'
export default {
    data(){
        return{
            userinfo: {
                avatarUrl:'/static/images/unlogin.png',
                nickName:'点击登录'
            }
        }
    },
    onload(){},
    mounted(){
        this.getSetting()
        //this.MeImage=
        this.Personal()
    },
    methods: {
        Personal: ()=>{
            wx.setNavigationBarTitle({
                title:'个人中心'
            })
        },
        //login
        login(){
            console.log('click login')
            let user=wx.getStorageSync('userinfo')
            if(!user){
                this.getSetting()
            }
            else{
                this.userinfo=user
            }
        },
        getSetting(){
            wx.getSetting({
                success:res=>{
                    if(res.authSetting['scope.userInfo']){
                        wx.getUserInfo({
                            success:res=>{
                                console.log(res.userinfo)
                                wx.getStorageSync('userinfo',res.userinfo)
                                console.log(res.userinfo)
                                this.userinfo=res.userinfo
                                this.getLoginCode()
                                console.log('用户已经授权')
                            }
                        })
                    } else {
                        showSuccess('未授权')
                        console.log('用户还未授权过')
                        this.getLoginCode()
                    }
                }
            })
        },
        getLoginCode() {
            wx.login({
                success: res=> {
                    if(res.code) {
                        const user=post('/login',{'code':res.code,'userinfo':this.userinfo})
                        user.then(value=>{
                            wx.getStorageSync('userinfo',value)
                        })
                    }
                }
            })
        }
        /*delogin (e){
            if(e.)
        }*/
    }
}
</script>

<style>
    body{
        background: #ffffff
    }
</style>


