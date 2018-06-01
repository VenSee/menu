import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import dyjs from '@/page/dyjs'
import zyfb from '@/page/zyfb'
import kcfs from '@/page/kcfs'
import zyfd from '@/page/zyfd'
import zyyy from '@/page/zyyy'
import test from '@/page/test'
import zykc from '@/page/zykc'
import mcqdz from '@/page/mcqdz'
import cqkc from '@/page/cqkc'
import zjkc from '@/page/zjkc'
import wjkc from '@/page/wjkc'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Index
        }, {
            path: '/dyjs',
            component: dyjs
        }, {
            path: '/zyfb',
            component: zyfb
        }, {
            path: '/kcfs',
            component: kcfs
        }, {
            path: '/zyfd',
            component: zyfd
        }, {
            path: '/zyyy',
            component: zyyy
        }, {
            path: '/test',
            component: test
        },
        {
            path: '/zykc',
            component: zykc
        },
        {
            path: '/mcqdz',
            component: mcqdz
        },
        {
            path: '/cqkc',
            component: cqkc
        },
        {
            path: '/wjkc',
            component: wjkc
        },
        {
            path: '/zjkc',
            component: zjkc
        },
    ]
})