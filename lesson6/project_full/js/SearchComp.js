Vue.component('search', {
    data() {
        return {
            userSearch: '',
        }
    },
    template: `
       <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)" >
                <input   type="text" class="search-field" v-model="userSearch" @input="$parent.$refs.products.filter(userSearch)">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>
    `

});