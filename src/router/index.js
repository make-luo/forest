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
    }
)