<template>
    <g :transform="transform">
        <path class="vtc-donutarc"
              :class="[ isActive ? 'active' : '', segment_id ]"
              :d="path"
              @mouseenter="segmentselected"
              @mouseleave="segmentunselected"
              stroke-linecap="butt"/>
    </g>
</template>

<script>
    import Vue from 'vue' // do not import in "production bundle within Contao content element
    export default Vue.component('vtc-donutarc', {
        props: ['centerx', 'centery', 'chartrotation', 'radius', 'value', 'sum', 'position'],
        data: function () {
            return {
                isActive: false
            }
        },
        computed: {
            transform: function () {
                return "rotate(" + (360 * this.sum / 100 + this.chartrotation) + " " + this.centerx + " " + this.centery + ")"
            },
            segment_id: function () {
                return "segment_" + this.position
            },
            angle: function () {
                return this.toRadians((this.value / 100) * 360)
            },
            path: function () {
                var startx = Math.round(this.centerx),
                    starty = Math.round(this.centery - this.radius),
                    endx = Math.round(this.centerx + this.radius * Math.sin(this.angle)),
                    endy = Math.round(this.centery - this.radius * Math.cos(this.angle)),
                    largeArcFlag = this.value < 50 ? "0" : "1" // 0 if the arc is less than 180 degrees else 1

                return "M" + startx + ',' + starty
                    + " A" + this.radius + "," + this.radius
                    + " 0" // no xaxisrotation (as rotation does not change anything for a circle ;-)
                    + " " + largeArcFlag
                    + " 1" // sweepFlag 1 == draw in positive angle direction
                    + " " + endx + "," + endy
                // return path
            },
        },
        methods: {
            segmentselected: function () {
                this.isActive = true;
                this.$emit('segmentselected', this.position) // report to parent
            },
            segmentunselected: function () {
                this.isActive = false
            },
            toRadians(degrees) {
                return (degrees / 360) * 2 * Math.PI
            }
        }
    })
</script>

<style>
    .vtc-donutarc {
        stroke-width: 40;
        stroke-opacity: 0.75;
        fill: none;
        stroke: #82E0AA; /* fallback */
    }

    .vtc-donutarc.segment_0 {
        stroke: #239B56;
    }

    .vtc-donutarc.segment_1 {
        stroke: #ff4805;
    }

    .vtc-donutarc.segment_2 {
        stroke: #ff25de;
    }

    .vtc-donutarc.segment_3 {
        stroke: #c8ff21;
    }

    .vtc-donutarc.segment_4 {
        stroke: #62cfff;
    }

    .vtc-donutarc.active {
        stroke-opacity: 1.0;
    }
</style>
