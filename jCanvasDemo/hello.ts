/**
 * Created by zhaiyuxiu on 2017/8/22.
 */
class BlockStyle {
    width:string;
    height:string;
    left:string;
    top:string;
    display:string;
    'background-color':string;
}
class Block {
    id:string;
    width:number;
    height:number;
    x:number;
    y:number;
    visible:boolean;
    dom:HTMLElement;
    style:BlockStyle;
    constructor(id:string, width:number, height:number, x:number, y:number, visible:boolean) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.visible = visible;
        this.dom = document.getElementById(id);
        console.log("new Block is created");
        this.style = new BlockStyle();
        this.style.width = width + 'px';
        this.style.height = height + 'px';
        this.style.left = x + 'px';
        this.style.top = y + 'px';
        this.style.display = 'none';
        this.style['background-color'] = '';
    }

    show(x, y){
        this.style.left = x + 'px';
        this.style.top = y + 'px';
        this.style.display = 'block';
        this.updateStyle();
        return this;
    }

    hide() {
        this.style.display = 'none';
        this.updateStyle();
        return this;
    }

    updateStyle() {
        for(let r in this.style) {
            this.dom.style.setProperty(r,this.style[r]);
        }
        return this;
    }

    info() {
        console.log(this.id + " : " + this.x + " : " + this.y + " : " + this.visible);
        return this;
    }

    showAttribute() {
        console.log(this.dom.attributes.getNamedItem('style').value);
        return this;
    }
}
