Vue.component('vtc-donut', {
    template: '\
    <svg class="vtcdonut" :width="width" :height="height" :viewbox="viewbox">\
    <vtc-donutarc v-for="(d,index) in chartdata"\
    :key="d.code"\
    :position="index"\
    :value="d.value"\
    :sum="sum(index)"\
    :radius="height/2-20"\
    :centerx="width/2"\
    :centery="height/2"\
    :chartrotation="chartrotation"\
    @segmentselected="showinfo"/>\
    <text text-anchor="middle" alignment-baseline="central">\
    <tspan class="displaytext" :x="width/2" :y="height/2" dy="+8">{{ displayValue }}</tspan>\
    <tspan class="displaylabel" :x="width/2" :y="height/2" dy="+32">{{ displayLabel }}</tspan>\
    </text>\
    </svg>',
    props: ['chartdata', 'width', 'height', 'chartrotation'],
    data: function () {
        if (this.chartdata.length < 1) {
            return {
                displayValue: '',
                displayLabel: ''
            }
        }
        return {
            displayValue: this.formatValue(this.chartdata[0].value),
            displayLabel: this.formatValue(this.chartdata[0].label)
        }
    },
    watch: {
        chartdata: function () {
            console.log("data changed");
            this.showinfo(0);
        }
    },
    computed: {
        viewbox: function () {
            return "0 0 " + this.width + " " + this.height;
        }
    },
    methods: {
        sum: function (index) {
            var result = 0;
            for (var i = 0; i < index; i++) {
                result += this.chartdata[i].value;
            }
            return result;
        },
        showinfo: function (position) {
            this.displayValue = this.formatValue(this.chartdata[position].value);
            this.displayLabel = this.chartdata[position].label;
            this.$emit('showinfo', position); // report to parent
        },
        formatValue: function (v) {
            return v.toLocaleString('de-DE', {minimumFractionDigits: 1, minimumFractionDigits: 1}) + "%";
        }
    }
});

Vue.component('vtc-donutarc', {
    template: '\
    <g :transform="transform">\
    <path class="vtc-donutarc" :class="[ isActive ? \'active\' : \'\', segment_id ]"\
    :d="path"\
    @mouseenter="segmentselected"\
    @mouseleave="segmentunselected"\
    stroke-linecap="butt"/>\
    </g>',
    props: ['centerx', 'centery', 'chartrotation', 'radius', 'value', 'sum', 'position'],
    data: function () {
        return {
            isActive: false
        }
    },
    computed: {
        transform: function () {
            return "rotate(" + (360 * this.sum / 100 + this.chartrotation) + " " + this.centerx + " " + this.centery + ")";
        },
        segment_id: function () {
            return "segment_" + this.position;
        },
        angle: function () {
            return this.toRadians((this.value / 100) * 360);
        },
        path: function () {
            var startx = Math.round(this.centerx),
                starty = Math.round(this.centery - this.radius),
                endx = Math.round(this.centerx + this.radius * Math.sin(this.angle)),
                endy = Math.round(this.centery - this.radius * Math.cos(this.angle)),
                largeArcFlag = this.value < 50 ? "0" : "1" // 0 if the arc is less than 180 degrees else 1
                ;
            return "M" + startx + ',' + starty
                + " A" + this.radius + "," + this.radius
                + " 0" // no xaxisrotation (as rotation does not change anything for a circle ;-)
                + " " + largeArcFlag
                + " 1" // sweepFlag 1 == draw in positive angle direction
                + " " + endx + "," + endy;
            return path;
        },
    },
    methods: {
        segmentselected: function () {
            this.isActive = true;
            this.$emit('segmentselected', this.position); // report to parent
        },
        segmentunselected: function () {
            this.isActive = false;
        },
        toRadians(degrees) {
            return (degrees / 360) * 2 * Math.PI;
        }
    }
});