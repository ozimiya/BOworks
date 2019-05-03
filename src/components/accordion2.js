const DATA_TEXT = 'data-text';
const DATA_IMG = 'data-img';
const CLASS_OPEN = 'dn';

export default (params) => {
    const openTriggers = Array.from(document.getElementsByClassName(params.openTrigger));
    const closeTriggers = Array.from(document.getElementsByClassName(params.closeTrigger));
    const targets = Array.from(document.getElementsByClassName(params.target));
    let self = {};
    let textObj = {};
    let imgObj = {};
    const state = {
        openAction: true,
        otherTrigger: null,
    }

    const toggleEvent = (e) => {
        state.openAction? openAction(e) : closeAction(e);
    };

    const openAction = (e) => {
        self = getEventTargets(e);
        textObj = getTriggerText(self.trigger);
        imgObj = getTriggerImg(self.trigger)
        if(Object.keys(textObj).length) state.otherTrigger = self.trigger;

        accordionAction(self, textObj, imgObj);
    };

    const closeAction = (e) => {
        self = getEventTargets(e);
        accordionAction(self, textObj, imgObj);
    };

    const getEventTargets = (e) => {
        const trigger = e.currentTarget;
        const target = trigger.nextElementSibling;
        return { trigger: trigger, target: target };
    };

    const getTriggerText = (_trigger) => {
        const text = _trigger.querySelector('['+ DATA_TEXT +']');
        const openText = text.textContent;
        const closeText = text.getAttribute(DATA_TEXT);
        return { open: openText, close: closeText };
   };

   const getTriggerImg = (_trigger) => {
        const img = _trigger.querySelector('['+ DATA_IMG +']');
        const openImg = img.getAttribute('src');
        const closeImg = img.getAttribute(DATA_IMG);
        return { open: openImg, close: closeImg };
   };
    
    const accordionAction = (_self, _text, _img) => {
        if(state.otherTrigger !== _self.trigger) closeOtherParts(_self.trigger, _text, _img);

        let hasTextTrigger = _self.trigger.querySelector('['+ DATA_TEXT +']');
        if(!hasTextTrigger) return;
        let hasImgTrigger = _self.trigger.querySelector('['+ DATA_IMG +']');

        if(state.openAction){
            _self.target.classList.remove(CLASS_OPEN);
            hasTextTrigger.textContent = _text.close;
            hasImgTrigger.setAttribute('src', _img.close);
            state.openAction = false;
        }else{
            _self.target.classList.add(CLASS_OPEN);
            hasTextTrigger.textContent = _text.open;
            hasImgTrigger.setAttribute('src', _img.open);
            state.openAction = true;
        }
    };

    const closeOtherParts = (_trigger, _text, _img) => {
        for(const target of targets){
            target.classList.add(CLASS_OPEN);
        }
        for(const openTrigger of openTriggers){
            const text = openTrigger.querySelector('['+ DATA_TEXT +']');
            const img = openTrigger.querySelector('['+ DATA_IMG +']');
            text.textContent = _text.open;
            img.setAttribute('src', _img.open);
        }
        state.otherTrigger = _trigger;
        state.openAction = true;
    };

    for(const openTrigger of openTriggers){
        openTrigger.addEventListener('click', toggleEvent, false);
    }
    for(const closeTrigger of closeTriggers){
        closeTrigger.addEventListener('click', closeAction, false);
    }
};