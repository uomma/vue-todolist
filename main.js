 const { createApp } = Vue ;

createApp({
    data() {
        return {
            newObj: "",
            obj: {
                text: "",
                done: false
            },
            objList: [],
        }
    },


    methods: {
        addObj() {
            if (this.newObj !== "") {
                let {text, done} = this.obj;
                text = this.newObj;
                this.objList.push({ text, done })
                this.newObj = "";
            }

        },

        removeObj(index) {
            this.objList.splice(index,1);
        }
    }
}).mount('#app');

