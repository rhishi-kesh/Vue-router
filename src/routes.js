import compHomeView from './components/indexHome.vue'
import compCustomer from './components/customer/customerView.vue'
import compCustomerDetails from './components/customer/customerDetaile.vue'
import compCustomerEdit from './components/customer/customerEdit.vue'
import compCustomerStart from './components/customer/customerStart.vue'
export const routes = [
    {
        path: '',
        component: compHomeView,
        name: 'home'
    },
    {
        path: '/customer',
        component: compCustomer,
        children: [
            {
                path: '',
                component: compCustomerStart,
            },
            {
                path: ':id',
                component: compCustomerDetails,
            },
            {
                path: ':id/edit',
                component: compCustomerEdit,
                name: 'customerEdit'
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: compHomeView,
    }
];