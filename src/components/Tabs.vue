<template>
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :data-menuanchor="tab.name" :class="{ 'is-active': tab.isActive }"  v-bind:key="tab">
                    <a :href="tab.href" @click="selectTab(tab)" v-bind:style="{
                        color: tab.isActive ? '#00FF00' : '#000000',
                        textDecoration: tab.isActive ? 'underline' : 'none'}">
                        {{ tab.name }}</a>
                </li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "tabs",

    data() {
        return {tabs: [] };
    },
    
    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
}
</script>

<style scoped>
    li {
        font-size: 1.2em;
        font-family: Verdana, sans-serif;
        text-decoration: none;
    }

    li .is-active {
        color: green;
    }

    
</style>