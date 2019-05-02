const DATA_TEXT = 'data-text';
const DATA_IMG = 'data-img';
const DATA_ACOORDION = 'data-accordion';
const DN = 'dn';

export default (params) => {
    const openTriggers = Array.from(document.getElementsByClassName(params.openTrigger));
    const closeTriggers = Array.from(document.getElementsByClassName(params.closeTrigger));
    const targets = Array.from(document.getElementsByClassName(params.target));
    let textObj = {};
    let imgObj = {};
    const state = {
        otherTrigger: null,
        show: false,
    }

    const actionFunc = (e) => {
        const trigger = e.currentTarget; 
        const target = trigger.nextElementSibling;

        if(!Object.keys(textObj).length){
            textObj = getTriggerText(trigger);
            imgObj = getImgPath(trigger);
            changeState(trigger);
        }
        toggleAction(trigger, target, textObj, imgObj);
    };

    const getTriggerText = (_trigger) => {
        const openText =  _trigger.children[0].textContent;
        const closeText = _trigger.children[0].getAttribute(DATA_TEXT);
        return { open: openText, close: closeText };
    };

    const getImgPath = (_trigger) => {
        const img = _trigger.querySelector('[' + DATA_IMG + ']');
        const imgData = img.getAttribute(DATA_IMG);
        const imgSrc = img.getAttribute('src');
        return { open: imgSrc, close: imgData };
    };

    const changeState = (_trigger) => {
        state.otherTrigger = _trigger;
    };

    const toggleAction = (_trigger, _target, _text, _img) => {
        if(state.otherTrigger !== _trigger) closeOtherParts(_trigger, _text, _img);

        // state.show = !state.show;
    
        _target.classList.toggle(DN);
        if(_target.classList.contains(DN)){
            _trigger.children[0].textContent = _text.open;
            const img = _trigger.querySelector('[' + DATA_IMG + ']');
            img.setAttribute('src', _img.open);
        }else{
            _trigger.children[0].textContent = _text.close;
            const img = _trigger.querySelector('[' + DATA_IMG + ']');
            img.setAttribute('src', _img.close);
        }
    };

    const closeOtherParts = (_trigger, _text, _img) => {
        for(const target of targets){
            target.classList.add(DN);
        }
        for(const trigger of openTriggers){
            trigger.children[0].textContent = _text.open;
            const img = trigger.querySelector('[' + DATA_IMG + ']');
            img.setAttribute('src', _img.open);
        }
        changeState(_trigger);
    };
    
    for(const openTrigger of openTriggers){
        openTrigger.addEventListener('click', actionFunc, false);
    }

    // const changeImgPath = (_img) => {
    //     img.setAttribute('src', imgData);
    //     img.setAttribute('data-img', imgSrc);
    // };
};