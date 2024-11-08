// index.js – это библиотека UI-компонентов. Для того, чтобы пользоваться этой библиотекой, необходимо импортировать массив UI-компонентов в main.js.

import BaseButton from "@/components/ui/BaseButton.vue";
// import BaseInput from "@/components/ui/BaseInput.vue";
// import BaseDialog from "@/components/ui/BaseDialog.vue";
import BaseSelect from "@/components/ui/BaseSelect.vue";

export default [
    BaseSelect,
    // BaseDialog,
    BaseButton,
    // BaseInput
]