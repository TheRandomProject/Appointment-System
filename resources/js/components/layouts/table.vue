<template>
    <div class="box">
        <b-field grouped group-multiline>
            <b-select v-model="perPage">
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="30">30 per page</option>
                <option value="50">50 per page</option>
                <option value="100">100 per page</option>
            </b-select>
        </b-field>
        <b-table
            :data="data"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :pagination-order="paginationOrder"
            :columns="columns"
            :checked-rows.sync="checkedRows"
            :checkbox-position="checkboxPosition"/>
    </div>
</template>

<script>
const data = require('../example/sample.json');

 export default {
        data() {
            return {

                data,

                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'first_name',
                        label: 'First Name',
                    },
                    {
                        field: 'last_name',
                        label: 'Last Name',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
                    }
                ],

                checkedRows: [],

                isPaginated: true,
                isPaginationSimple: false,
                isPaginationRounded: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                paginationOrder: 'is-centered',
                currentPage: 1,
                perPage: 5,

                // CheckBox
                checkable: false,
                checkboxPosition: 'left',

                // MobileCard
                hasMobileCards: true,

                // Set this to true to show Empty State
                isEmpty: false
            }
        }
    }
</script>
