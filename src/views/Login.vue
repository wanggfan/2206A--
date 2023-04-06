<template>
   <el-row class="home">
      <el-col :span="16" class="right">
         欢迎光临
      </el-col>
      <el-col :span="8" class="left">
         <h1 class="title">
            欢迎回来
         </h1>
         <div class="login">
            <span class="diva"></span>
            <span class="divb">账号密码登录</span>
            <span class="divc"></span>
         </div>
         <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" :size="formSize" status-icon>
            <el-form-item prop="username" class="w-[250px]">
               <el-input v-model.trim="ruleForm.username" placeholder="请输入账号" prefix-icon="User" />
            </el-form-item>
            <el-form-item prop="password" class="w-[250px]">
               <el-input v-model.trim="ruleForm.password" placeholder="请输入密码" prefix-icon="Lock" show-password />
            </el-form-item>
         </el-form>
         <el-form-item>
            <el-button type="primary" round @click="submitForm(ruleFormRef)" class="loginup">
               登录
            </el-button>

         </el-form-item>
      </el-col>
   </el-row>
</template>
<script setup>
import { ElNotification } from 'element-plus'
import { login } from '../api/api.js'
import { useRoute, useRouter } from 'vue-router';
import { ref, reactive, onMounted, } from 'vue';
const router = useRouter();
const ruleFormRef = ref()
const ruleForm = reactive({
   username: 'admin',
   password: 'admin'
})
const rules = reactive({
   username: [
      { required: true, message: '请输入账号', trigger: 'blur' },
      // { min: 3, max: 5, message: '账号格式错误', trigger: 'blur' },
   ],
   password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      // { min: 6, max: 12, message: '密码长度在6到12位', trigger: 'blur' },
   ],
})
//登录事件
const submitForm = async (formEl) => {
   if (!formEl) return
   await formEl.validate((valid, fields) => {
      if (valid) {
         if (ruleForm.username == 'admin' || ruleForm.password == 'admin') {
            login(ruleForm).then((res => {
               console.log(res);
               router.push('/')
            }))
         } else {
            return
         }
      } else {
         console.log('error submit!', fields)
      }
   })
}
</script>
<style lang='scss' scoped>
.home {
   @apply bg-indigo-500 min-h-screen;
}

.right {
   @apply flex items-center justify-center text-light-50 text-7xl;
}

.left {
   @apply bg-light-500 flex items-center justify-center flex-col;
}

.title {
   @apply text-dark-900 font-bold text-4xl;
}

.login {
   @apply my-4 flex items-center justify-center space-x-2;
}

.diva {
   @apply h-[1px] w-16 bg-gray-200;
}

.divc {
   @apply h-[1px] w-16 bg-gray-200;
}

.divb {
   @apply text-gray-600;
}

.loginup {
   @apply w-[250px] rounded-4xl;
}
</style>
