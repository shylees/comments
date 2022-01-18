<template>
	<div class="index">
		<TextArea @onAddComment="onAddComment"></TextArea>
		<Comment ref="comment"></Comment>
	</div>
</template>

<script>
import TextArea from "./TextArea.vue";
import Comment from "./Comment.vue";
export default {
	name: "Index",
	components: {
		TextArea,
		Comment,
	},
	data() {
		return {};
	},
	methods: {
		onAddComment(com) {
			this.$refs.comment.addCom(com);
		},
	},
};
</script>

<style scoped>
.index {
	width: 80%;
	/* height: 500px; */
	background-color: #f5f5ee;
	margin: 1.875rem auto;
	padding: 1.5625rem;
}
</style>