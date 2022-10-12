<script>
    import Button from '../components/button.vue'
    export default{
        components:{
            Button
        }
    }
</script>

<template>
    <div class="col-md-4 mt-md-5">
        <div class="card card-custom">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://i1.sndcdn.com/avatars-000228887415-y11o4w-t500x500.jpg" class="img-fluid card-img" />
            </div>
            <div class="card-body">
                <h5 class="card-title">title</h5>
                <div class="container">
                    <Button :variant="'btn btn-primary'" :name="'See Detail'"
                        :type="'button'"></Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.card:hover .card-img {
    transform: scale(1.1);
}

.card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-custom {
    width: 100%;
    height: auto;
    grid-column: span 8;
    margin: 10px 0;
    border-radius: 15px;
    position: relative;
    box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
    overflow: hidden;
}
</style>