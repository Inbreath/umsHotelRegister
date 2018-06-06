export default {
    state: {
        allRooms: [{
                label: '八仙过海',
                value: '808',
                disabled: false,
                check: false,
            },
            {
                label: '六六大顺',
                value: '606',
                disabled: false,
                check: false,
            },
            {
                label: '五湖四海',
                value: '504',
                disabled: false,
                check: false
            },
            {
                label: '一帆风顺',
                value: '101',
                disabled: false,
                check: false
            }
        ],
        allFoods: [{
            label: '1分钱测试',
            value: '000',
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517315574992&di=e2a8bc7782b6f5bc83547682ba0acd0c&imgtype=0&src=http%3A%2F%2Fcp2.douguo.net%2Fupload%2Fcaiku%2Fd%2F6%2F4%2Fyuan_d6b8fbdf8086b0a89199dd6412ffc054.jpg',
            price: 0.01
        },{
            label: '东菱牛排',
            value: '001',
            url: require('./static/001.jpg'),
            price: 298
        },
        {
            label: '橄榄香风情烤火鸡',
            value: '002',
            url: require('./static/002.jpg'),
            price: 998
        },
        {
            label: '辣味虾配奶油玉米粥',
            value: '003',
            url: require('./static/003.jpg'),
            price: 198
        },
        {
            label: '芝士焗土豆泥',
            value: '004',
            url: require('./static/004.jpg'),
            price: 98
        }],
        activeRoom: '',
        activeFood: [],
    },
    mutations: {
        changeRoom(state, num) {
            state.activeRoom = num
        },
        setFood(state, fo) {
            console.log(state.activeFood);
            state.activeFood.push(fo);
            console.log(state.activeFood);
        }
    },
    actions: {
        changeRoom(context, val) {
            context.commit('changeRoom')
        },
        changeFood(context, val) {
            context.commit('changeFood')
        }
    },
    getters: {
        getStates(state) {
            return state
        }
    }
}