import { ref, reactive } from 'vue'
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ 
  position: "top-right",
});

const textCutter = reactive({
    copyText: false,
    lineBreak: false,
    highLightText1: 'Copy All',
    highLightText2: 'Copy All',
    inputVal: '',
    symbolReplaceVal: '',
    LineBreakVal: '',

    // Paste All Copy Content
    PasteAll() {
        navigator.clipboard.readText().then((clipboardText)=>{
            if (clipboardText == ''){
                this.inputVal = this.inputVal
                toaster.warning(`You haven't copied anything yet`);
            }else {
                this.inputVal += clipboardText
                toaster.success(`Paste All Success`);
            }
        })
    },

    // symbolReplaceText Clipboard Copy All Text
    async symbolReplaceText() {
        this.copyText = true;
        this.highLightText1 = 'Copyed';

        if (this.copyText == true) {
            setTimeout(() => {
                this.copyText = false;
                this.highLightText1 = 'Copy All';
            }, 2000);
        } 

        try {
            await navigator.clipboard.writeText(this.symbolReplaceVal);
            toaster.success(`Success All Copy`);
        } catch (error) {
            toaster.error(`Copy Filed`);
            console.log(error);
        }
    },

    // lineBreakText Clipboard Copy All Text
    async lineBreakText(){
        this.lineBreak = true;
        this.highLightText2 = 'copyed';
        if(this.lineBreak == true){
            setTimeout(() => {
                this.lineBreak = false;
                this.highLightText2 = 'Copy Filed'
            }, 2000);
        }
        try {
            await navigator.clipboard.writeText(this.LineBreakVal)
            toaster.success(`Success All Copy`);
        } catch (error) {
            toaster.error(`Copy Filed`);
            console.log(error);
        }
    },

    // Text Replace
    textReplace(){
        if ('' == !this.inputVal) {
            const getInputValue = this.inputVal.replace(/[^.\w]+/g, ' ').trim();
            console.log(getInputValue);
            this.symbolReplaceVal = getInputValue

        } else {
            toaster.error('Please Filup Your Input Box')
        }
    }
})

export { textCutter }