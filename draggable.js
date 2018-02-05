let draggable = (item, parameter) => {
    let trigger = document.querySelectorAll(item);
    //define preferences
    let dropItem,
        dropOver,
        drop,
        dropType,
        drag,
        dragStart,
        dragLeave,
        dragEnter,
        dragEnd,
        axis,
        cancel,
        appendTo,
        containment,
        disabled,
        revert,
        css,
        opacity,
        delay,
        cssText,
        zIndex;

    if (typeof parameter === "object") {
        dropOver = parameter.dropOver !== undefined ? parameter.dropOver : null;
        dropItem = parameter.dropItem !== undefined ? parameter.dropItem : null;
        dropType = parameter.dropType !== undefined ? parameter.dropType : "after";
        cursor = parameter.cursor !== undefined ? parameter.cursor : "move";
        appendTo = parameter.appendTo !== undefined ? parameter.appendTo : false;
        drag = parameter.drag !== undefined ? parameter.drag : null;
        drop = parameter.drop !== undefined ? parameter.drop : null;
        dragStart = parameter.dragStart !== undefined ? parameter.dragStart : null;
        dragEnter = parameter.dragEnter !== undefined ? parameter.dragEnter : null;
        dragLeave = parameter.dragLeave !== undefined ? parameter.dragLeave : null;
        dragEnd = parameter.dragEnd !== undefined ? parameter.dragEnd : null;
        axis = parameter.axis !== undefined ? parameter.axis : "any";
        cancel = parameter.cancel !== undefined ? parameter.axis : "input,textarea,button,select,option";
        containment = parameter.containment !== undefined ? parameter.containment : false;
        disabled = parameter.disabled || false;
        revert = parameter.revert !== undefined ? parameter.revert : true;
        css = parameter.css !== undefined ? parameter.css : null;
        opacity = css !== null && css.opacity !== undefined ? css.opacity : ".6";
        delay = css !== null && parameter.delay !== undefined ? parameter.delay : 100;
        zIndex = css !== null && parameter.zIndex !== undefined ? parameter.zIndex : 100;
        cssText = css !== null && parameter.cssText !== undefined ? parameter.cssText : "";
    }
    Array.prototype.forEach.call(trigger, function (el) {

        let dragged; // sürüklenen eleman
        let dragMain = (event) => {
            return drag !== null ? drag(event, dragged) : false;
        }, start = (event) => {
            let styleText = "z-index:" + zIndex + ";transition:all 200ms; ease-in-out;transtion-delay:" + delay + "ms;";
            event.target.style.cssText = cssText !== "" ? styleText + cssText : styleText;
            dragged = event.target;
            event.dataTransfer.setData("data",event.target);
            return dragStart !== null ? dragStart(event, dragged) : false;
        }, leave = (event) => {
            event.preventDefault();
            return dragLeave !== null ? dragLeave(event, dragged) : false;
        }, over = (event) => {
            event.preventDefault();
            ui = event.target;
            event.dataTransfer.dropEffect = "move";
            return dropOver !== null ? dropOver(event, ui) : false;
        }, enter = (event) => {
            event.preventDefault();
             return dragEnter !== null ? dragEnter(event, dragged) : false;
        }, end = (event) => {
            event.preventDefault();
            let ui = event.target;
            ui.removeAttribute("style");
            return dragEnd !== null ? dragEnd(event, dragged) : false;
        }, dropMain = (event) => {
            ui = event.target;
            if(dragged !== undefined ){
                if( ui.parentNode.tagName.toLowerCase() !== "body" && ui.parentNode.tagName.toLowerCase() !== "html"){
                    dropType === "before" ? ui.before(dragged)
                        : dropType === "after" ? ui.after(dragged)
                        :dropType === "append"? ui.append(dragged)
                        :dropType === "prepend"? ui.prepend(dragged)
                            : ui.appendChild(dragged);

                }else{
                    ui.appendChild(dragged);
                }
                return drop !== null ? drop(event, ui) : false;
            }
            dragged = "";

        };

        // events
        el.addEventListener("mousedown",function () {
            el.setAttribute("draggable", "true"); // draggable true
            this.addEventListener("drag", dragMain, false);
            this.addEventListener("dragstart", start, false);
            this.addEventListener("dragenter", enter, false);
            this.addEventListener("dragleave", leave, false);
            this.addEventListener("dragend", end, false);
        });

        let droped = document.querySelectorAll(dropItem);
        Array.prototype.forEach.call(droped, function (dropper) {
            dropper.setAttribute("ondrop", "true");
            dropper.addEventListener("dragover", over, false);
            dropper.addEventListener("drop", dropMain, false);
        });

    });
};
