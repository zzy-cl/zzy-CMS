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

// 验证码 Base64 图片
const captchaBase64 = ref()
</script>

<template>
  <div class='login-container'>
    <el-form class='login-form' ref='loginFormRef' :model='loginData'>
      <div class='flex text-white items-center py-4 title-wrap'>
        <span class='text-2xl flex-1 text-center title'>CMS管理系统</span>
      </div>
      <el-form-item prop='username'>
        <el-input
          class='flex-1'
          v-model='loginData.username'
          name='username'
          size='large'
          placeholder='请输入管理员账号'
          :prefix-icon='User'
        />
      </el-form-item>
      <el-form-item prop='password'>
        <el-input
          class='flex-1'
          v-model='loginData.password'
          name='password'
          size='large'
          placeholder='请输入管理员密码'
          show-password
          :prefix-icon='Lock'
        />
      </el-form-item>
      <el-form-item prop='verifyCode'>
        <el-input
          class='w-[60%]'
          v-model='loginData.verifyCode'
          size='large'
          placeholder='验证码'
        />
        <div class='captcha'>
          <img :src='captchaBase64' alt='captchaBase64Img'>
        </div>
      </el-form-item>
      <el-button
        class='w-full'
        size='default'
      >登录
      </el-button>
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
        height: 40px;
        cursor: pointer;
      }
    }
  }
}

.el-form-item {
  background-color: rgb(0 0 0 / 10%);
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 10px;
}

.el-input {
  background-color: transparent;

  :deep(.el-input__wrapper) {
    background-color: transparent;
    box-shadow: none;

    .el-input__inner {
      color: #fff;
      background-color: transparent;
      border: 0;
      border-radius: 0;
      caret-color: #fff;

      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px transparent inset !important;
        -webkit-text-fill-color: #fff !important;
      }

      // 设置输入框自动填充的延迟属性
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        transition: color 99999s ease-out, background-color 99999s ease-out;
        transition-delay: 99999s;
      }
    }
  }
}
</style>