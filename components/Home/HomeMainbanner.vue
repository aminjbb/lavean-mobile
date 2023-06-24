<template>
    <div class="">
        <vueper-slides class="no-shadow pa-0"  :touchable="true" rtl autoplay :arrows="false" :slide-ratio="0.8">
            <vueper-slide v-for="(item, i) in banners" :key="i" :link="item.to" :image="item.src">

            </vueper-slide>
        </vueper-slides>

    </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    components: {
        VueperSlides,
        VueperSlide,
    },
    data() {
        return {
            items: [
                {
                    src: require('../../assets/img/HomeMainBanner.png'),
                    to: '/'
                },
                {
                    src: require('../../assets/img/HomeMainBanner.png'),
                    to: '/'
                },



            ],
        };
    },

    computed: {
        banners() {
            try {
                var banners = []
                this.$store.getters['get_clientBanners'].forEach(element => {
                    var form = {
                        src: process.env.baseUrl + '/media/' + element.image
                    }
                    banners.push(form)
                });
                return banners
            } catch (error) {
                return []
            }
        }
    }

}
</script>