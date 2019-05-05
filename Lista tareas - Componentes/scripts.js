var data = {
    titulo: 'Lista de Tareas',
    tareas: [
        {
            texto: 'Aprender vue.js',
            terminada: false
        },
        {
            texto: 'Aprender reac.js',
            terminada: false
        },
        {
            texto: 'Aprender angular.js',
            terminada: false
        }
    ],
    nuevaTarea: ''
}

Vue.component('titulo', {
    template:
        `<h2>{{ titulo }}</h2>`,
    data: function () {
        return { titulo: 'Lista de tareas' }
    }
});


Vue.component('nueva-tarea', {
    template: `
    <div class="input-group">
        <input class="form-control" type="text" placeholder="Escribe una nueva tarea" v-model="nuevaTarea"
            v-on:keyup.enter="agregarTarea">
        <span class="input-group-btn">
            <button type="button" v-on:click="agregarTarea()" class="btn btn-dark">Agregar</button>
        </span>
    </div>
    `,
    data: function () {
        return data;
    },
    methods: {
        agregarTarea: function () {
            var texto = this.nuevaTarea.trim();
            if (texto) {
                this.tareas.push({
                    texto: texto,
                    terminada: false
                });
            }
            this.nuevaTarea = '';
        }
    }
});

Vue.component('lista-de-tareas', {
    template: `
    <ul class="list-group">
        <li v-for="(tarea, indice) of tareas" class="list-group-item" v-bind:class="{terminada: tarea.terminada}">
            {{ tarea.texto }}
            <span class="float-right text-right">
                <button type="button" class="btn btn-success material-icons"
                    v-on:click="tarea.terminada = !tarea.terminada">
                    check
                </button>
                <button type="button" class="btn btn-danger material-icons" @click="borrar(indice)">delete</button>
            </span>
        </li>
    </ul>
    `,
    data: function () {
        return data;
    },
    methods: {
        borrar: function (indice) {
            this.tareas.splice(indice, 1);
            console.log(indice);
        }
    }
});

var app = new Vue({
    el: '#app'
})