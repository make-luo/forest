## ref属性
1. 被应用来给元素或子组件注册引用信息（id的替代者）
2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上获取的是组件实例对象（vc）
3. 使用方式：
    打标识：<h1 ref="XXX">你好</h1> 或<School ref="school"/>
    获取标识：this.$refs 获取全部ref this.$refs.xxx 获取指定标识

## 配置项props
    功能：让组件接收外部传来的数据
    (1).传递数据：
        <Student name="刘绍基额" :age="12" sex="男"></Student>
    (2).接收数据：
        第一种(只接受)：
            props:["name","age","sex"]
        第二种(限制类型)：
              props:{
                name:String,
                age:Number,
                sex:String
              }
        第三种(限制类型，限制必要性，指定默认值)
              props:{
                name:{
                type:String, //类型
                required:true, //必要性
                default:"老王"  //默认值
                },
              }


    备注: props是只读的，Vue底层会监视你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中，然后去修改data中的数据.

## mixin(混入)
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方式：
        第一步定义混合，例如：
            {
                data(){...},
                methods:{...}
            }
        第二步使用混入，例如：
            (1).全局混入： Vue.mixin
            (2).局部混入：mixins:['xxx']

## 插件
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue.第二个以后的参数是插件使用者传递的数据。
    定义插件：
        对象.install = funcation(Vue,options){
        //1. 添加全局过滤器
        Vue.filter()
        //2. 添加全局指令
        Vue.directive()
        //3. 配置全局混入
        Vue.mixin()

        //添加实例方法或属性
        Vue.prototype.$myMethods = function(){}
        Vue.prototype.$myProperty = XXXX
        } 
    使用插件：Vue.use()
## scoped样式
    作用：让样式在局部生效，防止冲突
    写法：<style scoped>
    补充：
    1.查看依赖的所有版本
        npm view 依赖名 versions
    2.安装固定版本的依赖
        npm i 依赖名@版本号
    3.如果编写的样式是less,建议安装less-loader@6
## webStorage
    1. 储存内容大小一般支持5MB左右（不同浏览器可能还不一样）
    2. 浏览器端通过Window.localStorage和Wimdow.seaaionStorage属性来实现本地存储机制
    3. 相关API:
        1.xxxxStorage.setItem("key","value")
            接收一个键和值作为参数，会把键值添加到储存中，如果键名存在，则更新其对应的值
        2.xxxxStorage.getItem("key")
            接收一个键名，返回键名对应的值
        3.xxxxStorage.removeItem("key")
            接收一个键名，把键名从本地删除
        4.xxxxStorage.clear()
            清空存储中的所有数据
    4. 备注
        1. sessionStorage存储的内容会随着浏览器窗口关闭而消失
        2. LocalStorage 存储的内容，需要手动清除才能消失
        3. xxxxStorage.getItem（XXX） 如果xxx对应的value获取不到，那么返回值是null
        4. JSON.parse(null) 的结果依然是null

## 组件自定义事件
    1. 一种组件间通信的方式，适用于 :子组件===> 父组件（传递数据）
    2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）
    3.绑定自定义事件：
        1. 第一种方式：在父组件中：<School @king="getSchoolName"></School>
        2. 第二种方式：在父组件中：
        ```JS
        mounted(){
            this.$refs.school.$on("king",this.getSchoolName)  //$on函数第一个参数是组件名，第二个参数是回调函数
        }
        ```
        3. 若想让自定义事件自能触发一次，可以使用once修饰符，或$once方法
    4. 触发自定义事件：
            this.$emit("king",this.name);
    5. 解绑自定义事件：
            this.$off("king")
    6.组件上也可以使用原生的DOM事件，需要使用navive修饰符
    7.注意：通过this.$refs.school.$on("king",回调)绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向出问题

## 全局事件总线(GlobalEventBus)
    1.一种组件间通信的方式，适用于任意组件间通信
    2.安装全局事件总线
        ```JS
        new Vue({
            el:"#app",
            render:h=>h(App),
            beforeCreate(){
                Vue.prototype.$bus = this; //安装全局事件总线
            }
        })
        ```
    3.使用事件总线
        1. 接收数据：A组件想要接收数据，则在A组件中给$bus绑定自定义事件，时间的回调留在A组件本身
        ```JS
          methods:{
                getName(name){
                console.log("收到了name为：" +name);
                }
            },
            mounted(){
                this.$bus.$on("getName",this.getName)
            }
        ```
        2. 提供数据：
            ```JS
            this.$bus.$emit("getName", this.name);
            ```
    4. 最好在beforeDestory钩子中，用$off解绑当前组件所用到的自定义组件

## 消息订阅和发布（pubsub）(用的不多)
    1.一种组件间通信的方式，适用于任意组件间通信
    2. 使用方式
        1. 安装pubsub:npm i pubsub-JS
        2. 引入 import pubsub from "pubsub-js";
        3. 接收数据：A组件想要接收数据，则在A组件中订阅消息，订阅的回调留在A组件本身
            ```JS
            methods: {
                getName(msgName, name) {
                console.log("订阅的消息名为："+msgName+"收到了name为：" + name);
                },
            },
            mounted() {
                this.pubID = pubsub.subscribe("getName", this.getName); //订阅消息
            },
            ```
        4. 提供数据：pubsub.publish("getName",this.name) 
        5. 最好在beforeDestory钩子中，用pubsub.unsubscribe(pubID)取消订阅

## nextTick
    1.语法：this.#nextTick(回调函数)
    2.作用：在下一次DOM更新结束后执行其指定函数。
    3.什么时候用：当数据改变后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的函数中执行

## Vue封装的过度和动画
    1. 作用：在插入、更新、或移除DOM元素时，在合适的时候给元素添加样式名
    2. 写法：
        1. 准备样式：
            - 元素进入的样式：
                1. v-enter:进入的起点
                2.v-enter-active:进入的过程
                3.v-enter-to：进入的终点
            - 元素离开的样式：
                1.v-leave:离开的起点
                2.v-leave-active:离开的过程
                3.v-leave-to：离开的终点
        2. 使用<transition>包裹要过度的元素，并配置name属性：
                <transition :appear="true" name="t"> 
                    <div class="box" v-show="isShow" >你好啊</div>
                </transition>
        3. 备注：若有多个元素需要过度，则需要使用<transition-group>,且每个元素都要指定key值



## vue脚手架配置代理
    方式一：
        在vue.config.js中添加如下配置：
            ```js
            devServer:{
                proxy:'http://localhost:5000'
            }
            ```
        说明：
            1.优点：配置简单，请求资源时直接发给前端（8080）即可
            2.缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
            3.工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）
    方式二：
        编写vue.config.js配置具体代理规则
        ```js
            devServer: {
                proxy: {
                '/api1': {  //匹配所有以'/api1'开头的请求路径
                    target: 'http://localhost:5000', //代理目标的基础路径
                    pathRewrite:{'^/api1':''},
                    ws: true,
                    changeOrigin: true
                },
                '/api2': {
                    target: 'http://localhost:5001',
                    pathRewrite:{'^/api2':''},z`
                    ws: true,
                    changeOrigin: true
                },
                }
                changeOrigin设置为true时，服务器收到的请求头中的host为target路径
                changeOrigin设置为false时，服务器收到的请求头中的host为发送请求路径
                changeOrigin默认为true
            }
        ```
    说明：
        1.优点：可以配置多个代理，且可灵活的控制请求是否走代理
        2.缺点：配置略微繁琐，请求资源必须加前缀


## 插槽
    1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于父组件==>子组件
    2.分类：默认插槽，具名插槽，作用域插槽
    3. 使用方式
        1.默认插槽
            ```js
             父组件
                 <Category title="游戏">
                    <ul>
                        <li v-for="(data, index) in games" :key="index">{{ data }}</li>
                    </ul>
                </Category>
            子组件
                <template>
                    <div class="category">
                        <h1>{{title}}分类</h1>
                        <slot></slot>
                    </div>
                </template>
            ```
        2.具名插槽
            ```js
                父组件
                    <Category title="游戏">
                        <ul slot="center">
                            <li v-for="(data, index) in games" :key="index">{{ data }}</li>
                        </ul>
                        <div slot="footer">
                            <a href="www.luoking.top" slot="footer">单机游戏</a>
                            <a href="www.luoking.top" slot="footer">联网游戏</a>
                        </div>
                    </Category>
                    <!-- vue 2.6 新推出的指令  v-solt  但很少用-->
                    <Category title="电影">
                        <template v-solt:footer>  
                            <a href="www.luoking.top" slot="footer">单机游戏</a>
                            <a href="www.luoking.top" slot="footer">联网游戏</a>
                        </template>
                    </Category>
                子组件
                    <template>
                        <div class="category">
                            <h1>{{title}}分类</h1>
                            <slot name="center"></slot>
                            <slot name="footer"></slot>
                        </div>
                    </template>
            ```
        3.作用域插槽（数据都在子组件中）
            ```js
                父组件
                    <Category title="游戏">
                        <template scope="{games}">
                            <ul>
                            <li v-for="(data, index) in games" :key="index">{{ data }}</li>
                            </ul>
                        </template>
                    </Category>

                    <Category title="游戏">
                    
                        <template solt-scope="{games}">
                            <h4 v-for="(data, index) in games" :key="index">{{ data }}</h4>
                        </template>
                    </Category>
                子组件
                    <template>
                        <div class="category">
                            <h1>{{ title }}分类</h1>
                            <slot :games="games"></slot>
                        </div>
                    </template>
            ```
## Vuex (最好使用3版本，最新版本为vue3提供)
    1.概念
        在Vue中实现集中式状态（数据）管理的Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读写），也是一种组件间通信的方式，且适用于任意组件间通信
    2.什么时候使用？
        多个组件需要共享数据时
    3.搭建vuex环境
        1.创建文件：src/store/index.js

        ```js
            import Vue from 'vue';
            import Vuex from 'vuex';

            //创建好store（厂库）需要的 核心功能

            //一个过渡，用于激活mutations
            const actions = {}
            //加工数据，并且数据具有响应式
            const mutations = {}
            //保存需要共享的数
            const state = {}

            Vue.use(Vuex); //vue使用vuex插件，需要在store创建之前使用
            //暴露store
            export default new Vuex.Store({
                actions,
                mutations,
                state
            })
        ```
        2.在main.js中创建vm时传入store配置项

        ```js
            .....
            import store from './store'
            .....

            new Vue({
                el:"#app",
                store,
                render:h=>h(App),
                beforeCreate(){
                    Vue.prototype.$bus=this;
                }
            })
        ```
    4.基本使用
        1.初始化数据，配置actions 配置mutations 操作store.js($store)

         ```js
            import Vue from 'vue';
            import Vuex from 'vuex';

            //创建好store（厂库）需要的 核心功能

            //一个过渡，用于激活mutations
            const actions = {
                incrementOdd(context, value) {
                    if (context.state.sum % 2) {
                        this.commit("JIA", value);
                    }
                    console.log(context)
                },
                incrementWait(context, value) {
                    setTimeout(() => {
                        context.commit("JIA", value);
                    }, 500)
                }
            }
            //加工数据，并且数据具有响应式
            const mutations = {
                JIA(state, value) {
                    state.sum += value;
                },
                JIAN(state, value) {
                    state.sum -= value;
                }
            }
            //保存需要共享的数
            const state = {
                sum: 0,
            }



            Vue.use(Vuex); //vue使用vuex插件，需要在store创建之前使用
            //暴露store
            export default new Vuex.Store({
                actions,
                mutations,
                state
            })
        ```
        2.组件中读取vuex中的数据：
            模块：$store.state.sum
            js代码(需要加this):this.$store.state.sum
        3.组件中修改vuex中的数据：this.$store.dispatch("方法名", 需要传入的数据)或this.$store.commit("方法名", 需要传入的数据);
        备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions,即不写dispatch,直接编写commit

## getters的使用
    1.概念：当state中的数据需要经过加工后再使用，可以使用getters加工
    2.在store.js中追加getters配置
        ```js
            //配置getters属性中的方法可以接收到state，用于加工state中的数据，也便于业务公共使用
            const getters = {
                bigSum(state){
                    return state.sum*10;
                }
            }

            export default new Vuex.Store({
                    actions,
                    mutations,
                    state,
                    getters //配置getters属性
                })
            ```
    3.组件中读取数据：``` $store.getters.方法名``` 


## 四种map方法
    1. mapState方法：用于帮助我们映射state中的数据为计算属性
    ```js
        //mapState从state中获取数据（对象写法）
        ...mapState({sum:"sum",address:"address",name:"name"}),

        // mapState从state中获取数据（数组写法  里面的值要是字符串）
        ...mapState(["sum","address","name"]),
    ```
    2.mapGetters方法：用于帮助我们映射getters中的数据为计算属性
    ```js
        // mapGetters从getters中获取数据（对象写法）
        ...mapGetters({bigSum:"bigSum"}),
        
        // mapGetters从getters中获取数据（数组写法）
        ...mapGetters(["bigSum"])
    ```
    3.mapActions方法：用于帮助我们生成与actions对话的方法，即：包含$store.dispatch(xxx)的函数
    ```js
        //注意这里我们没有传参数，默认是事件对象，我们需要在使用自动生成的方法中传递参数
        //借助mapActions自动生成调用dispatch方法的方法（对象写法）
        ...mapActions({incrementOdd:'incrementOdd',incrementWait:'incrementWait'}),

        //借助mapActions自动生成调用dispatch方法的方法（数组写法）
        ...mapActions(['incrementOdd','incrementWait']),
    ```
    4.mapMutations方法：用于帮助我们生成与mutations对话的方法，即：包含$store.commit(xxx)的函数
    ```js
        //注意这里我们没有传参数，默认是事件对象，我们需要在使用自动生成的方法中传递参数
        //借助mapMutations自动生成调用commit方法的方法（对象写法）
        ...mapMutations({increment:'JIA',decrement:'JIAN'}),

        //借助mapMutations自动生成调用commit方法的方法（数组写法）
        ...mapMutations(['JIA','JIAN']),
    ```
    备注：mapActions与mapMutations使用时，若需要传递参数：在模板中绑定事件时传递好参数，否则参数是事件对象
## 模块化+命名空间
    1.目的：让代码更好维护，让多种数据分类更加明确
    2.修改store.js
    ```js
    export default { //CountOptions
        namespaced:true,
        actions:{...},
        mutations:{...},
        state:{...},
        getters:{...}
    export default {  //PersonOptions
        namespaced:true,
        actions:{...},
        mutations:{...},
        state:{...},
        getters:{...}

    export default new Vuex.Store({
            modules:{
                //使用
                CountOptions,
                PersonOptions
            }
        })
    ```
    3.开启命名空间后(namespaced:true)组件中读取state数据

    ```js
    //借助mapState
    ...mapState("CountOptions",["sum","address",'name']),
    //自己写
    this.$store.state.CountOptions.sum;
    ```

    4.开启命名空间后组件中读取getters数据

    ```js
    //借助mapGetters
    ...mapGetters("CountOptions",["bigSum"])
    //自己写
    this.$store.getters["PersonOptions/getFirst"].name;
    ```

    5.开启命名空间后组件中调用dispatch

    ```js
    //借助mapActions
    ...mapActions("CountOptions",['incrementOdd','incrementWait']),
    //自己写
    this.$store.dispatch("PersonOptions/addText");
    ```

    6.开启命名空间后组件中调用commit

    ```js
    //借助mapMutations
    ...mapMutations("CountOptions",{increment:'JIA',decrement:'JIAN'})
    //自己写
    this.$store.commit("PersonOptions/ADD_PERSON",personObj)
    ```
    
## 路由
        1.理解：一个路由(route)就是一组映射关系(key-value),多个路由需要路由器(router)管理
    1. 基本使用
        1. 安装vue-router(安装3版本,最新版本为vue3提供),命令```npm i vue-router@3```
        2. 应用插件：Vue.use(VueRouter);
        3. 编写router配置项：
        ```js
            import VueRouter from 'vue-router';
            //引入组件
            import Home from '../components/Home';
            import About from '../components/About';


            //使用VueRouter构造函数，创建路由器实例对象
            export default new VueRouter({
                routes:[
                    {
                        path:'/home',
                        component:Home
                    },
                    {
                        path:'/about',
                        component:About
                    },
                ]
            })
        ```
        4.实现切换(active-class可配置高亮样式)
        ```<router-link class="list-group-item" to="/about" active-class="active">About</router-link>```
        5.指定展示位置
        ```<router-view></router-view>```
    2.几个注意点
        1. 路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹
        2.通过切换，“隐藏”的路由组件，默认是被销毁掉的，需要的时候再去挂载
        3.每个组件都有自己的$route属性，里面存放着自己的路由信息
        4.整个应用只有一个router,可以通过组件的$router属性获取到
    3.多级路由（嵌套路由）
        1.配置路由规则，使用children配置项
        ```js
        routes: [
        {
            path: '/home',
            component: Home,
            children: [  //子级路由路径不要写 '/'
                {
                    path: 'message',
                    component: Message
                },
                {
                    path:'news',
                    component: News
                }

            ]
        },
        ```
        2. 跳转（要写完整路径）：
        <router-link to='/home/news'>News<router-link>
    4. 路由的query参数传递
        1. 传递参数

        ```js
        <!-- 传递参数：to的字符串写法 -->
        <router-link :to='`/home/message/detail?id=${message.id}&title=${message.title}`'>{{ message.title }}</router-link>
        <!-- 传递参数：to的对象写法-->
        <router-link :to="{ 
            path:'/home/message/detail',
            query:{
                id:message.id,
                title:message.title
            }
        }">
        {{ message.title }}
        </router-link>
        ```
        2. 接收参数：

        ```js
            <li>消息编号：{{$route.query.id}}</li>
            <li>消息标题：{{$route.query.title}}</li>
        ```
    5.命名路由
        1.作用：可以简化路由的跳转（当路径过长时，建议使用）
        2.如何使用 (要使用对象写法)

            ```js
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            name:"detail",
                            path: 'detail',
                            component: Detail,
                        }
                    ]
                },
            ```

            ```js
                <router-link :to='{ 
                    name:"detail",
                    query:{
                        id:message.id,
                        title:message.title
                    }
                }'>
                {{ message.title }}
                </router-link>
            ```
    6.路由的params参数
        1.配置路由，声明接收params参数

        ```js
        {
            path: 'message',
            component: Message,
            children:[
                {
                    name:"detail",
                    // 使用占位符提前占好位置
                    path: 'detail/:id/:title',
                    component: Detail,
                }
            ]
        },
        ```
        2.传递参数

        ```js
            <!-- 传递params参数：to的字符串写法 -->
            <router-link :to='`/home/message/detail/${message.id}/${message.title}`'>{{ message.title }}</router-link>
            <!-- 传递params参数：to的对象写法 引号里面和外面要不同  浏览器读到一个双引号后，到第2个双引号时才算结束； -->
            <router-link :to='{ 
                name:"detail",
                params:{id:message.id,title:message.title}
            }'>
            {{ message.title }}
            </router-link>
        ```

        特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置

        3.接收参数

        ```js
            <li>消息编号：{{$route.params.id}}</li>
            <li>消息标题：{{$route.params.title}}</li>
        ```
    7.路由的props配置
    1. 让路由组件更方便的接收参数

    ```js
        {
            name:"detail",
            // 使用占位符提前占好位置
            path: 'detail',
            component: Detail,
            //第一种：对象写法 ，该对象中所有的key-value的组合最终都会通过props传给Detail组件
            // props:{id:123,title:"你好"}
            //第二种：props值为布尔值，布尔值为true,则路由收到的所有params参数通过props传给Detail组件
            // props:true,
            //第三中：props的函数写法，该函数中的每一组key-value都会通过props传给Detail组件
            props(route){ //会将$route作为参数,vue-router会回调该函数
                return {
                    id:route.query.id,
                    title:route.query.title
                }
            }
        }
    ```
    8.<router-link>的replace属性
        1. 作用：控制路由跳转时操作浏览器历史记录的模式
        2. 浏览器的历史记录有两种写入方式：分别为push和replace，push是追加历史记录，replace是替换当前记录，路由跳转时默认为push
        3. 如何开启replace模式：
            //完整写法
            <router-link :replace="true"><router-link>
            //简便写法
            <router-link replace ><router-link>

    9.编程式路由导航
        1.作用：不借助<router-link>实现路由跳转，让路由跳转更灵活
        2.具体使用

        ```js
            this.$router.push({
                name:"detail",
                query:{id:message.id,title:message.title}
            })

            this.$router.replace({
                name:"detail",
                query:{id:message.id,title:message.title}
            })

            this.$router.forward() //forward方法控制页面前进

            this.$router.back()//back方法控制页面后退

            this.$router.go(n)//正数代表前进几步，负数代表后退几步
        ```
    10.缓存路由组件
        1. 作用：让不展示的路由组件保持挂载，不销毁
        2. 编写位置：组件在哪展示，就在哪设置
        3. 具体编码：

        ```js
        // 写个数组是表示，需要缓存的组件，缓存单个组件，直接写字符串
        //不写include就代表缓存所有在此展示的组件
        //字符串中是写组件的name属性值 
            <keep-alive :include='["News","Message"]'> 
                <router-view></router-view>
            </keep-alive>
        ```
    11.两个新的生命周期钩子
        1.作用:路由组件所独有的两个钩子，用于捕获组建的激活状态
        2.具体名字：
            1.activated路由组件被激活时触发（组件展示）
            2.deactivated路由组件失活时触发（组件未展示）

        ```js
          activated(){
                this.timer = setInterval(()=>{
                if(this.opacity<=0){this.opacity=1}
                this.opacity -= 0.01
                },16)
            },
            deactivated() {
                clearInterval(this.timer);
                console.log("定时器被清除");
            },
        ```
    12.路由守卫
        1.作用：对路由进行权限控制
        2.分类：全局守卫，独享守卫，组件内守卫
        3.全局守卫

        ```js
        //全局前置路由守卫 -- 页面跳转前执行（页面还没有跳）
        router.beforeEach((to, from, next) => {
            console.log(to, from) //to 跳转的目标地址， from 从哪开始跳转
            if (to.meta.isAuth){  //配置meta属性，可以方便判断，哪些组件需要验证权限
                if(localStorage.getItem("name")==="林"){ //权限控制的具体规则
                    next();
                }else{
                    alert("你不是林")
                }
            }
            else{
                next();//放行
            }
        });
        //全局前置路由守卫 -- 页面完成跳转后执行（页面已经完成跳转）

        router.afterEach((to, from)=>{
            //跳转后切换页签的title
            document.title = to.meta.title || "页签";

        })
        ```
        4. 独享路由守卫
            自对一个单独的路由进行守卫，不会影响其他守卫,可以配合全局后置守卫一起使用

            ```js
                beforeEnter(to, from, next) {
                if (to.meta.isAuth) {  //配置meta属性，可以方便判断，哪些组件需要验证权限
                    if (localStorage.getItem("name") === "林") { //权限控制的具体规则
                        next();
                    } else {
                        alert("你不是林")
                    }
                }
                else {
                    next();//放行
                }
            },
            ```
        5.组件内守卫

            ```js
            //通过路由规则，进入该组件时被调用
            beforeRouteEnter(to, from, next){.....}
            //通过路由规则，离开该组件时被调用
            beforeRouteLeave(to, from, next){.....}
            ```
    13.路由的两种工作模式
        1.对于一个url来说，什么是hash值？- # 及其后面的内容就是hash值
        2.hash值不会包含在HTTP请求中，即：hash值不会带给服务器，
        3.hash模式：
            1.地址中永远带着#号，不美观。
            2.若以后将地址通过第三方手机app分享，若app检验严格，则地址会被标记为不合法
            3.兼容性好
        4.history模式：
            1.地址干净，美观
            2.兼容性和hash模式相比略差
            3.应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题