<script setup lang='ts'>
import { ref } from 'vue'
import { ElForm } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'

// 登陆表单
const loginData = ref({
  username: '是zzy呀',
  password: '20010307',
  verifyCode: ''
})
// 登陆表单引用
const loginFormRef = ref(ElForm)
</script>

<template>
  <div class='login-container'>
    <el-form class='login-form' ref='loginFormRef' :model='loginData'>
      <div class='flex text-white items-center py-4 title-wrap'>
        <span class='text-2xl flex-1 text-center title'>CMS管理系统</span>
      </div>
      <el-form-item prop='username'>
        <el-input
          v-model='loginData.username'
          name='username'
          placeholder='请输入管理员账号'
          :prefix-icon='User'
        />
      </el-form-item>
      <el-form-item prop='password'>
        <el-input
          v-model='loginData.password'
          name='password'
          placeholder='请输入管理员密码'
          show-password
          :prefix-icon='Lock'
        />
      </el-form-item>
      <el-form-item prop='verifyCode'>
        <el-input
          v-model='loginData.verifyCode'
          placeholder='验证码'
        />
        <div class='captcha'>
          <img src='' alt=''>
        </div>
      </el-form-item>
      <el-button>登录</el-button>
    </el-form>
  </div>
</template>

<style lang='less' scoped>
.login-container {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #2d3a4b;

  .title-wrap {
    filter: contrast(30);

    .title {
      letter-spacing: 4px;
      animation: showUp 3s forwards;
    }

    @keyframes showUp {
      0% {
        letter-spacing: -20px;
      }

      100% {
        letter-spacing: 4px;
      }
    }
  }

  .login-form {
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    .captcha {
      position: absolute;
      top: 0;
      right: 0;

      img {
        width: 120px;
        height: 48px;
        cursor: pointer;
      }
    }
  }
}
</style>