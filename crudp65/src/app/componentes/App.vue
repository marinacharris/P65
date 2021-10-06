<template>
<div>
    <nav class="navbar navbar-light bg-light">
        <a href="/" class="navbar-brand">Aplicación pila MEVN</a>
    </nav>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="addProducto">
                            <div class="form-group pt-2">
                                <input type="text"
                                placeholder="Inserte el código"
                                class="form-control"
                                v-model="task.codigo">
                            </div>
                            <div class="form-group pt-2">
                                <textarea cols="30" rows="5" 
                                class="form-control"
                                placeholder="Inserte la descripción"
                                v-model="task.descripcion">
                                </textarea>
                            </div>
                            <div class="form-group pt-2 pb-2">
                                <input type="number"
                                placeholder="Inserte el precio"
                                class="form-control"
                                v-model="task.precio">
                            </div>
                            <button class="btn btn-primary">
                                GUARDAR
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <table class="table table-bordered">
                    <thead>
                        <th>Código</th>
                        <th>Descripcióm</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        <tr v-for="task of tasks">
                            <td>{{task.codigo}}</td>
                            <td>{{task.descripcion}}</td>
                            <td>{{task.precio}}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>  
</template>

<script>
class task{
    constructor(codigo,descripcion, precio){
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
export default{
    data(){
        return{
            task: new task(),
            tasks: []
            }
        },
    created(){
        this.getProducto();
    },
    methods:{
        addProducto(){
            console.log(this.task);
            fetch('/tasks',{
                method: 'POST',
                body: JSON.stringify(this.task),
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            }).then(res => res.json())
            .then(data => this.getProducto())
            this.task = new task();
        },
        getProducto(){
            fetch('/tasks')
            .then(res =>res.json())
            .then(data =>{
                this.tasks = data
                console.log(this.tasks)
            })
        }
    }
}
</script>