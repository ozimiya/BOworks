


export default (param) => {
    const maHead = document.getElementsByClassName(param.maHead)[0];
    const maInputTrigger = maHead.querySelector('input[name="MA"]');
    const maLabelTrigger = maHead.querySelector('input[name="MA"] + label');
    const maList = document.getElementsByClassName(param.maList)[0];
    let state = {
        radio: false,
        checkbox: false,
    }
    
    // const inputFun = (t) => {
    //     event.preventDefault();
    //     if(state.radio !== t.checked){
    //         // t.checked = !t.checked;
    //     }else{
    //          t.checked = false;
    //     }
    //     // t.checked = !t.checked;
    //     state.radio = !state.radio;
    // };

    // const labelFun = (t) => {
    //     if(state.radio){
    //         t.checked = false;
    //         state.radio = false;
    //         console.log(t.checked);
    //     }else{
    //         t.checked = true;
    //         state.radio = true;
    //     }
    // };

    const toggleChecked = (e) => {
        e.preventDefault();
        let targetInput = typeof e.currentTarget.control === 'undefined'? e.currentTarget: e.currentTarget.control;
        // typeof e.currentTarget.control === 'undefined'? inputFun(e.currentTarget): labelFun(e.currentTarget.control);

        if(state.radio){
            targetInput.checked = false;
        }else{
            targetInput.checked = true;
        }
        state.radio = !state.radio;

    };
    
    const setInputState = (_type) => {
        const targetInput = Array.from(document.querySelectorAll('input[type="'+ _type +'"]'));
        const isChecked = targetInput.filter(v => {return v.checked;});

        Object.defineProperty(state.__proto__, "forIn", {
            value: function(fn) {
                self = this;        
                Object.keys(this).forEach((key, index) => {
                    const value = this[key];
                    fn.call(self, key, value, index);
                }, this);
            }
        });
        state.forIn((key, value, index) => {
            // console.log([index, key, value].join(','));
            // if(isChecked){
            //     state[key] = true;
            // }
        });
    };
    const getValue = (_val) => {
        return _val;
    };
    setInputState('radio');
    maInputTrigger.addEventListener('click', toggleChecked, false);
    maLabelTrigger.addEventListener('click', toggleChecked, false);
};

// const human = function(_str){
//     this.name = _str;
// };
// human.prototype.speak = function(){
//     console.log(this.name);
// }

// const boy = new human('hana');
// boy.speak();



window.addEventListener("load", () => {
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(radio => {
        radio.checked = false;
    });
});