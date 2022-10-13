<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    computed: {
        ...mapState(useAppStore, ['PriceInfo'])
    },
    created(){
        this.comodityPrice()
    },
    methods: {
        ...mapActions(useAppStore, ['comodityPrice']),
       async handleSearch() {
        
        }
    }
}
</script>

<template>
  <div class="container mt-3">
    <h1 class="text-center">SEARCH COMODITY</h1>
    <br />
    <br />
    <br />
    <div class="row md-6">
      <div class="container d-flex justify-content-center">
        <form>
          <div class="mb-3">
            <label class="form-label">Comodity Search:</label>
            <input type="text" class="form-control" />
            <div id="emailHelp" class="form-text">
              (please use Capitalize, ex: "Daging Ayam")
            </div>
          </div>
          <button type="submit" class="btn btn-success">Search</button>
        </form>
        <br />
        <br />
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Province</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
