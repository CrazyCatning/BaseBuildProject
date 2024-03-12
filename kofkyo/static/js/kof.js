import { GameMap } from "./gamemap.js";
import { Kyo } from "./kyo.js";

export class KOF {
    constructor(id) {
        this.$kof = $('#' + id);

        this.game_map = new GameMap(this);

        this.players = [
            new Kyo(this, {
                id: 0,
                x: 200, 
                y: 0,
                width: 50, 
                height: 90,
                color: 'pink'
            }),
            new Kyo(this, {
                id: 1,
                x: 800, 
                y: 0,
                width: 50, 
                height: 90,
                color: 'lightblue'
            }),
        ]
    }
}