<template>
  <BaseList>

    <template #filters>
      <BaseListFilter @filter-changed="onFilterChanged" />
    </template>

    <!-- Liste -->

      <b-row class="g-3">
        <b-col v-for="r in rooms" :key="r.id" cols="12" md="6" lg="4">
          <RoomCard :room="r" />
        </b-col>
      </b-row>


    <template #pagination>
      <BaseListPagination
          :currentPage="currentPage"
          :perPage="itemsPerPage"
          :totalRows="totalRooms"
          @update:currentPage="onPageChange"
      />
    </template>
  </BaseList>
</template>

<script>
import RoomCard from './RoomCard.vue';
import BaseList from '../../base/BaseList.vue';
import BaseListFilter from '../../base/BaseListFilter.vue';
import BaseListPagination from '../../base/BaseListPagination.vue';
import roomService from '../room-service';
import { BRow, BCol } from 'bootstrap-vue-next';

export default {
  name: 'RoomList',
  components: { RoomCard, BaseList, BaseListFilter, BaseListPagination, BRow, BCol },
  data() {
    return {
      rooms: [],
      totalRooms: 0,
      currentPage: 1,
      itemsPerPage: 5,
      filters: {},
    };
  },
  computed: {
    roomsToShow() {
      // falls serverseitig paginiert: this.rooms already contains page data
      // falls clientseitig paginiert: slice hier
      return this.rooms;
    },
  },
  watch: {
    currentPage: 'fetchRooms',
    itemsPerPage: 'fetchRooms',
  },
  created() {
    this.fetchRooms();
  },
  methods: {
    async fetchRooms() {
      try {
        const params = {
          /*page: this.currentPage,
          limit: this.itemsPerPage,
          search: this.filters.search,
          beds: this.filters.beds,
          sort: this.filters.sort,

           */
        };
        this.rooms = await roomService.getRooms(params);
        console.log(this.rooms);
      }catch (err) {
        console.error(err);
      }
    },

    onFilterChanged(newFilters) {
      this.filters = newFilters;
      this.currentPage = 1;
      this.fetchRooms();
    },

    onPageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>
