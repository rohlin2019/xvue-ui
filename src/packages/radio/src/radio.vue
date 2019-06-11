<style lang="scss" scoped>
.x-radio-label {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  cursor: pointer;
  .x-radio-relative {
    position: relative;
    width: 13px;
    height: 13px;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .x-radio-circle {
      display: inline-block;
      width: 14px;
      height: 14px;
      position: absolute;
    }
    .x-radio-circle-pointer {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      display: inline-block;
      position: absolute;
    }
    .x-radio-input-hidden {
      opacity: 0;
      width: 13px;
      height: 13px;
      margin: 0;
      position: absolute;
      font-size: 14px;
      z-index: -1;
    }
  }
  .x-radio-relative-blue {
    background: #4ba3fd;
  }
  .x-radio-slot {
    padding-left: 6px;
    color: #6e6f71;
    font-size: 14px;
  }
  .x-radio-disabled {
    opacity: 0.5;
    border: 1px solid #989ea5;
    background: #e6e4e4;
  }
}
.x-radio-not-allowed {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

<template>
    <label class="x-radio-label" :class="[{'x-radio-not-allowed':disabled}]">
        <div
            class="x-radio-relative"
            :class="[{'x-radio-disabled':disabled}]"
            :style="[label === computedModel?computedSelectedColor:'']"
        >
            <span class="x-radio-circle"></span>
            <input
                :name="name"
                :disabled="disabled"
                aria-hidden="true"
                class="x-radio-input-hidden"
                @change="onChange"
                v-model="computedModel"
                :value="label"
                type="radio"
            >
            <i
                v-if="label === computedModel"
                class="x-radio-circle-pointer"
                :style="[compoutedSelectedPointerColor]"
            ></i>
        </div>
        <span class="x-radio-slot">
            <slot></slot>
        </span>
    </label>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    selectedColor: {
      type: String,
      default: "#4ba3fd"
    },
    selectedPointerColor: {
      type: String,
      default: "#fff"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      checked: false
    };
  },
  computed: {
    isRadioGroup:{
        get(){
            let parent = this.$parent;
            if (parent && parent.$options.componentName !== "xRadioGroup") {
                parent = parent.$parent;
                return false;
            } else {
                this.parentRadioGroup = parent;
                return true;
            }
        },
        set(){

        }
    },
    computedModel: {
      set(setNewValue) {
        if (this.isRadioGroup) {
            let arr = ['input',setNewValue]
            let parent = this.$parent || this.$root;
            let radioGroupName = parent.$options.componentName;
            if(parent && radioGroupName != 'xRadioGroup'){
                parent = parent.$parent;
                if (parent) {
                    radioGroupName = parent.$options.componentName;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, arr);
            }
        } else {
            this.$emit("input", setNewValue);
        }
      },
      get() {
        return this.isRadioGroup && this.parentRadioGroup ? this.parentRadioGroup.value : this.value;
      }
    },
    computedSelectedColor() {
      return {
        background: this.selectedColor
      };
    },
    compoutedSelectedPointerColor() {
      return {
        background: this.selectedPointerColor
      };
    }
  },
  watch: {
    computedSelectedColor(newVal) {
      this.computedSelectedColor = newVal;
    },
    compoutedSelectedPointerColor(newVal) {
      this.compoutedSelectedPointerColor = newVal;
    }
  },
  methods: {
    onChange(params) {
      this.$nextTick(() => {
        this.checked = params.target.checked;
        this.$emit("change", this.computedModel);
        if (this.isRadioGroup && this.$parent.onChange) {
            this.$parent.onChange({
                computedModel: this.computedModel,
                checked: this.checked
            });
        }
      });
    }
  }
};
</script>