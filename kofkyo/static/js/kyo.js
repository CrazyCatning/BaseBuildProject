import { Player } from "./player.js";
import { GIF } from './gif.js'


export class Kyo extends Player {
    constructor(root, info) {
        super(root, info);

        this.init_animations();
    }

    init_animations() {
        let outer = this;
        let offset = [0, -11, -11, -60, 0, 0, 0];
        for (let i = 0; i < 7; i ++) {
            let gif = GIF();
            gif.load(`/static/images/player/kyo/${i}.gif`);
            this.animations.set(i, {
                gif: gif,
                frame_cnt: 0,
                frame_rate: 5,
                offset_y: offset[i],
                loaded: false,
                scale: 0.8,
            });

            gif.onload = function() {
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;
            }
        }
    }
}