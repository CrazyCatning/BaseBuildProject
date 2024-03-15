import { AcGameObject } from "../objcect/gameobject.js";
import { Controller } from "../controller/controller.js"

export class GameMap extends AcGameObject {

    constructor(root) {
        super();
        this.root = root;
        this.$canvas = $('<canvas width="900" height="400" tabindex=0></canvas>');
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();

        this.controller = new Controller(this.$canvas);

        this.root.$kof.append(`
            <div class="kof-head">
                <div class="kof-head-hp-0"><div><div></div></div></div>
                <div class="kof-head-timer">60</div>
                <div class="kof-head-hp-1"><div><div></div></div></div>
            </div>
        `);


        this.$timer = this.root.$kof.find('.kof-head-timer');
        this.timer_left = 60000;
    }

    start() {

    }


    update() {
        this.timer_left -= this.timedelta;
        this.$timer.text(parseInt(this.timer_left / 1000));
        if (this.timer_left <= 0) {
            this.timer_left = 0;
        }


        this.render();
    }
a
    render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    }
}