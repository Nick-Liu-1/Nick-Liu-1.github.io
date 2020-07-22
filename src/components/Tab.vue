<template>
    <div v-show="isActive"><slot></slot></div>
</template>

<script>
export default {
    name: "tab",

    props: {
        name: { required: true },
        selected: { default: false}
    },
    
    data() {
        
        return {
            isActive: false
        };
        
    },
    
    computed: {
        
        href() {
            
            return '#' + this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase().replace(/ /g, '-');
        }
    },
    
    mounted() {
        
        this.isActive = this.selected;
        
    }
}
</script>

