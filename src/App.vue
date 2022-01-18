<template>
	<div id="app">
		<Index></Index>
	</div>
</template>

<script>
import Index from "./components/Index.vue";
export default {
	name: "App",
	components: {
		Index,
	},
};
</script>

<style>
/* * {
	padding: 0;
	margin: 0;
} */
li {
	list-style-type: none;
}

#app {
	margin: 0;
	padding: 0;
	font-size: 14px;
	box-sizing: inherit;
}
</style>
