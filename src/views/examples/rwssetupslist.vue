<template>
    <robo-layout>
        <dapp-header title="Your RWS setups" />

        <robo-layout-section v-if="rws?.length < 1" rwsrecover>
          <robo-section width="narrow" gcenter>
            <robo-template-rws-setups-empty />
          </robo-section>
        </robo-layout-section>

        <robo-layout-section v-else rwsrecover rwssave>

            <robo-section offset="x0" width="narrow">
              <robo-grid offset="x1" gap="x1">
                
                <robo-template-rws-setup-listitem 
                  v-for="(setup,index) in rws" :key="index" 

                  v-model:owner="setup.owner"
                  v-model:controller="setup.controller"
                  v-model:scontroller="setup.scontroller"
                  v-model:name="setup.name"
                  v-model:enddate="setup.enddate"

                  :onEdit="testOnSetup"
                  @on-rws-delete="testOnDelete"
                />

                <robo-button block :router="store.state.robonomicsUIvue.rws.links.setup">+ Add new rws</robo-button>
              </robo-grid>
            </robo-section>

        </robo-layout-section>

    </robo-layout>

</template>

<script>
  export default { name: 'ExampleRwssetup' }
</script>

<script setup>
import dappHeader from '../../components/Header.vue'

import { computed } from 'vue'


/* + get rws */
import { useStore } from 'vuex'
const store = useStore()

const rws = computed ( () => {
  return store.state.robonomicsUIvue.rws.list
})
/* - get rws */


let testOnSetup = (rwsStatus) => {
  console.log('test list on-rws-setup')
  rwsStatus('ok')
  // rwsStatus('error', 'Please check controller address')
}

let testOnDelete = (rwsDelete) => {
  console.log('test list on-rws-delete')
  rwsDelete('ok')
  // rwsDelete('error', 'RWS setup has not been deleted')
}

</script>