import { AcGameObject } from "./AcGameObject";


export class GameMap extends AcGameObject {
    constructor(ctx, parent) {
        super();

        this.parent = parent;
        this.ctx = ctx;
        this.L = 0;
    }

    start() {

    }

    udpate() {
        this.render();
    }

    render() {

    }

}