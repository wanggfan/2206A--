<template>
   <el-row class="bg-indigo-500 min-h-screen">
      <el-col :span="16" class="flex items-center justify-center text-light-50 text-7xl">
         欢迎光临
      </el-col>
      <el-col :span="8" class="bg-light-500 flex items-center justify-center flex-col">
         <h1 class="text-dark-900 font-bold text-4xl">
            欢迎回来
         </h1>
         <div class="my-4 flex items-center justify-center  space-x-2">
            <span class="h-[1px] w-16 bg-gray-200 "></span>
            <span class="text-gray-600">账号密码登录</span>
            <span class="h-[1px] w-16 bg-gray-200"></span>
         </div>
         <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" :size="formSize" status-icon>
            <el-form-item prop="username" class="w-[250px]">
               <el-input v-model="ruleForm.username" placeholder="请输入账号" prefix-icon="User" />
            </el-form-item>
            <el-form-item prop="password" class="w-[250px]">
               <el-input v-model="ruleForm.password" placeholder="请输入密码" prefix-icon="Lock" />
            </el-form-item>
         </el-form>
         <el-form-item>
            <el-button type="primary" round @click="submitForm(ruleFormRef)" class="w-[250px] rounded-4xl">
               登录
            </el-button>

         </el-form-item>
      </el-col>
   </el-row>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, reactive, onMounted, } from 'vue';
const router = useRouter();
const ruleFormRef = ref()
const ruleForm = reactive({
   username: '',
   password: ''
})
const rules = reactive({
   username: [
      { required: true, message: '请输入账号', trigger: 'blur' },
      { min: 3, max: 5, message: '账号格式错误', trigger: 'blur' },
   ],
   password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 12, message: '密码长度在6到12位', trigger: 'blur' },
   ],
})
//登录事件
const submitForm = async (formEl) => {
   if (!formEl) return
   await formEl.validate((valid, fields) => {
      if (valid) {
         console.log('submit!')
      } else {
         console.log('error submit!', fields)
      }
   })
}



</script>
<style lang='scss' scoped>
// .tn {
//    @apply bg-pink-600 py-96 px-44 rounded-2xl animate-none hover: bg-red-900 duration-1000
// }
</style>
