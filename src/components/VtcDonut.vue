<template>
        <svg class="vtcdonut" :width="width" :height="height" :viewbox="viewbox">
            <vtc-donutarc
                    v-for="(d,index) in data"
                    :key="d.code"
                    :position="index"
                    :value="d.value"
                    :sum="sum(index)"
                    :radius="height/2-20"
                    :centerx="width/2"
                    :centery="height/2"
                    :chartrotation="chartrotation"
                    @segmentselected="showinfo"/>
            <text text-anchor="middle" alignment-baseline="central">
                <tspan class="displaytext" :x="width/2" :y="height/2" dy="+8">{{ displayValue }}</tspan>
                <tspan class="displaylabel" :x="width/2" :y="height/2" dy="+32">{{ displayLabel }}</tspan>
            </text>
        </svg>
</template>

<script>
    import Vue from 'vue';
    export default Vue.component('vtc-donut',
    {
        props: ['data', 'width', 'height', 'chartrotation'],
        data: function () {
            return {
                displayValue: this.formatValue(this.data[0].value),
                displayLabel: this.data[0].label,
            }
        },
        computed: {
            viewbox: function () {
                return "0 0 " + this.width + " " + this.height;
            },
        },
        methods: {
            sum: function (index) {
                var result = 0;
                for (var i = 0; i < index; i++) {
                    result += this.data[i].value;
                }
                return result;
            },
            showinfo: function (position) {
                this.displayValue = this.formatValue(this.data[position].value);
                this.displayLabel = this.data[position].label;
                //console.log(JSON.stringify(position));
                this.$emit('showinfo', position); // report to parent
            },
            formatValue: function (v) {
                // TODO: Browser support
                //return new Intl.NumberFormat('de-DE',{ minimumFractionDigits: 1, minimumFractionDigits: 1 }).format(v)+"%";
                return v.toLocaleString('de-DE', {minimumFractionDigits: 1, minimumFractionDigits: 1}) + "%";
            }
        }
    }
    )
</script>

<style>
    .vtcdonut {
        background-color: #eee;
    }

    .displaytext {
        font-size: 38px;
        font-family: sans-serif;
        font-weight: bold;
    }

    .displaylabel {
        font-size: 18px;
        font-family: sans-serif;
        font-weight: normal;
    }
</style>