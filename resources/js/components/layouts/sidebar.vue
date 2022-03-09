<template>
    <section>
        <div class="p-1">
            <b-menu>
                <b-menu-list label="Menu">

                    <b-menu-item icon="view-dashboard" label="Dashboard" tag="router-link" to="/dashboard" />

                    <b-menu-item icon="clipboard-check-multiple-outline" label="Appointment" tag="router-link" to="/appontment" />

                    <b-menu-item icon="hammer-wrench">

                        <template #label="props">
                            Admin Tools
                            <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                        </template>
                        <b-menu-item icon="shield-key-outline" label="Password Reset" tag="router-link" to="/#" />

                    </b-menu-item>

                    <b-menu-item icon="chart-bubble">

                        <template #label="report">
                            Report
                            <b-icon class="is-pulled-right" :icon="report.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                        </template>

                        <b-menu-item icon="inbox" label="User" tag="router-link" to="/#" />
                        <b-menu-item icon="inbox" label="Appointment" tag="router-link" to="/#" />
                        <b-menu-item icon="inbox" label="Password Reset" tag="router-link" to="/#" />

                    </b-menu-item>

                    <b-menu-item icon="information" label="Info" tag="router-link" to="/test" />

                </b-menu-list>

                <!-- <b-menu-list label="Actions">

            <b-menu-item
                icon="logout"
                label="Logout"
                tag="router-link"
                to="/logout"/>

          </b-menu-list> -->
            </b-menu>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false
    };
  }
};
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>
