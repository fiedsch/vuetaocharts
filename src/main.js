// start: do not include for "production bundle within Contao content element
// as we do not want to bundle with vtc-donut which is just one of many
// possible components
import Vue from 'vue';
Vue.config.productionTip = false;
// stop: do not include ...
import './components/VtcDonut.vue';
import './components/VtcDonutArc.vue';

// start: put into index.html for "production bundle within Contao content element
/* eslint-disable no-new */
new Vue({
    el: '#app',
    computed: {
        explanation: function () {
            return this.data[this.selected].value
                + " Prozent der Befragten sagen: "
                + this.data[this.selected].label;
        }
    },
    data: function () {
        return {
            msg: 'Demo of the Vuetao Charts Components',
            selected: 0,
            data: [
                {label: "Sehr gut", value: 22.5},
                {label: "Gut", value: 31.2},
                {label: "Mittel", value: 24.3},
                {label: "Schlecht", value: 13.0},
                {label: "Voll daneben", value: 9.0},
                //{label: "Ja", value: 72.3},
                //{label: "Nein", value: 27.7},
            ],
            chartwidth: 230,
            chartheight: 230,
            //chartrotation: 0, // keine Rotation, Start des ersten
            // Segments eines Donuts bei 12 Uhr.
            //
            // Wir wollen *bei zwei Segmenten* aber eine Ausrichtung
            // "rechts/links", gehen also um 90 Grad und die Hälfte
            // der Größe des ersten Segments (in Grad!) gegen den
            // Uhrzeigersinn zurück (negative Winkel).
            chartrotation: -90 - ( (72.5 / 100) * 360 / 2),
            // evtl noch -180 um die "Orientierung" genau spiegelverkehrt
            // zu gestalten.
        }
    },
    methods: {
        showinfo: function (position) {
            this.selected = position;
        }
    }
});
// end: put into index.html for "production bundle within Contao content element

