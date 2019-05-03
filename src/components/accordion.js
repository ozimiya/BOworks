// acionFun　→　tggleActionでopen・closeの動きをまとめて行う。（.dnがついているかで閉開の判定）
//このとき閉じてほしいtriggerが複数あり共用のメソッドを呼び出すので例外処理が必要
///共用ではなく、open・closeメソッドをそれぞれ呼び出す形 + 閉開状態をstate管理にして同期する形にしたら見通しよくなりそう？
//→accordion2.js

const DATA_TEXT = 'data-text';
const DATA_IMG = 'data-img';
const CLASS_OPEN = 'dn';

export default (params) => {
    const openTriggers = Array.from(document.getElementsByClassName(params.openTrigger));
    const closeTriggers = Array.from(document.getElementsByClassName(params.closeTrigger));
    const targets = Array.from(document.getElementsByClassName(params.target));
    let textObj = {};
    let imgObj = {};
    const state = {
        otherTrigger: null,
    }

    const actionFunc = (e) => {
        const trigger = e.currentTarget;
        const mainTrigger = trigger.querySelector('['+ DATA_IMG +']')? true : false;
        let target = mainTrigger? trigger.nextElementSibling : null; 

        if(!Object.keys(textObj).length){
            textObj = getTriggerText(trigger);
            imgObj = getImgPath(trigger);
            saveTriggerForDiff(trigger);
        }
        toggleAction(trigger, target, textObj, imgObj, mainTrigger);
    };

    const getTriggerText = (_trigger) => {
        const text = _trigger.querySelector('['+ DATA_TEXT +']');
        const openText =  text.textContent;
        const closeText = text.getAttribute(DATA_TEXT);
        return { open: openText, close: closeText };
    };

    const getImgPath = (_trigger) => {
        const img = _trigger.querySelector('['+ DATA_IMG +']');
        const imgData = img.getAttribute(DATA_IMG);
        const imgSrc = img.getAttribute('src');
        return { open: imgSrc, close: imgData };
    };

    const saveTriggerForDiff = (_trigger) => {
        state.otherTrigger = _trigger;
    };

    const toggleAction = (_trigger, _target, _text, _img, _isMain) => {
        if(state.otherTrigger !== _trigger) closeOtherParts(_trigger, _text, _img);
        
        if(_isMain) _target.classList.toggle(CLASS_OPEN);
        let img = _trigger.querySelector('[' + DATA_IMG + ']');
        
        if(!_isMain) return;
        if(_target.classList.contains(CLASS_OPEN)){
            img.setAttribute('src', _img.open);
            _trigger.querySelector('['+ DATA_TEXT +']').textContent = _text.open;
        }else{
            img.setAttribute('src', _img.close);
            _trigger.querySelector('['+ DATA_TEXT +']').textContent = _text.close;
        }
    };

    const closeOtherParts = (_trigger, _text, _img) => {
        for(const target of targets){
            target.classList.add(CLASS_OPEN);
        }
        for(const trigger of openTriggers){
            trigger.querySelector('['+ DATA_TEXT +']').textContent = _text.open;
            const img = trigger.querySelector('[' + DATA_IMG + ']');
            img.setAttribute('src', _img.open);
        }
        saveTriggerForDiff(_trigger);
    };
    
    for(const openTrigger of openTriggers){
        openTrigger.addEventListener('click', actionFunc, false);
    }
    for(const closeTrigger of closeTriggers){
        closeTrigger.addEventListener('click', actionFunc, false);
    }
};