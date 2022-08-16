import VueRouter from 'vue-router'

import Index from '../pages/index';
import Article from '../pages/Article'
import ShortPhrase from '../pages/ShortPhrase'
import Comments from '../pages/Comments'
import Friends from '../pages/Friends'
import Sort from '../pages/Sort'
export default new VueRouter(
    {
        routes: [
            {
                path: '/',
                component: Index
            },
            {
                path: '/sort',
                component: Sort
            },
            {
                path: '/article',
                component: Article
            },
            {
                path: '/shortPhrase',
                component: ShortPhrase
            },
            {
                path: '/comments',
                component: Comments
            },
            {
                path: '/friends',
                component: Friends
            }
        ],
        scrollBehavior(to, from, savedPosition) {// 解决vue页面之间跳转，页面不是在顶部的问题
            return { x: 0, y: 0 }
        }
    }
)