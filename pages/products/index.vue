<template>

    <div>
        <PlpBanner/>
        <div>
            <PlpFilterBtn/>
        </div>
    </div>

</template>


<script>
import PlpBanner from '~/components/Plp/PlpBanner.vue'
import PlpFilterBtn from '~/components/Plp/PlpFilterBtn.vue'
export default {
    components: {
        PlpBanner,
        PlpFilterBtn
    },

}
</script>