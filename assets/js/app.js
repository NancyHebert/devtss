new Vue({
    el: '#v-app',
    data: {
        message: ''
    },
    methods: {
        login: function () {

          this.message = 'Nancy';
          alert('clicked logged in ' + this.message);


        }
    }


});