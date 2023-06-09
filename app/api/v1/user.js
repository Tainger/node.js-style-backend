const Router = require('koa-router')
const {RegisterValidator} = require('../../validators/validator')

const {
    User
} = require('../../models/user')


const router = new Router({
    prefix: '/v1/user'
})


router.post('/register', async (ctx) => {
    //思维路径
    //接受参数
    //email
    const v = await new RegisterValidator().validate(ctx)
    const user = {
        email: v.get('body.email'),
        password: v.get('body.password2'),
        nickname: v.get('body.nickname')
    }
    await User.create(user)
    throw new global.errs.Success()
})

module.exports = router