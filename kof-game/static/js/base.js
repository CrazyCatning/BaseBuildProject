import { GameMap } from "./gamemap/gamemap.js";
import { Kyo } from "./player/kyo.js";
export class KOF {
    constructor(id) {
        this.$kof = $('#' + id);

        this.game_map = new GameMap(this);

        this.players = [
            new Kyo(this, {
                id: 0,
                x: 150,
                y: 0,
                width: 50,
                height: 75,
                color: "pink",
            }),
            new Kyo(this, {
                id: 1,
                x: 700,
                y: 0,
                width: 50,
                height: 75,
                color: "pink",
            })
        ]
    }
}