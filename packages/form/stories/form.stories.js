import LgForm from '..' // 这里导入的就是外层文件夹下的index.js
import LgFormItem from '../../formitem';
import LgInput from '../../input';
import LgButton from '../../button';

export default {
  title: 'LgForm',
  component: LgForm
}

export const Login = () => ({
  components: {
    LgForm,
    LgFormItem,
    LgInput,
    LgButton
  },
  template: `<lg-form ref="form" :model="user" lablg-width="80px" :rules='rules'>
  <lg-form-item label="用户名" prop='username'>
    <!-- <lg-input v-model="user.username"></lg-input> -->
    <lg-input :value='user.username' @input="user.username = $event" placeholder="请输入用户名"></lg-input>
  </lg-form-item>
  <lg-form-item label="密码" prop='password'>
    <lg-input v-model="user.password" type='password'></lg-input>
  </lg-form-item>
    <lg-button type="primary" @click='login'>登录</lg-button>
</lg-form>`,
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message:'请输入用户名'}
        ],
        password: [
          {required: true, message: '请输入密码'},
          {min:6, max:12, message: '请输入6-12位密码'}
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.form.validate(valid => {
        if(valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false;
        }
      })
    },
    inputHandler($event) {
      this.user.username = $event;
    }
  }
})
