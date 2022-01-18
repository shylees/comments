<template>
	<div class="comment">
		<div class="commentsArea" v-if="comments.length > 0">
			<Children :childrenComments="comments" @addReply="addReply"></Children>
		</div>
		<div v-if="comments.length == 0">没有评论哦~</div>
	</div>
</template>

<script>
import Children from "./Children.vue";
export default {
	components: { Children },
	name: "Comment",
	component: {
		Children,
	},
	data() {
		return {
			comments: [],
			newCom: {},
		};
	},
	methods: {
		addReply() {
			localStorage.setItem("comments", JSON.stringify(this.comments));
		},
		addCom(newCom) {
			newCom.id = this.comments.length + 1;
			this.comments.unshift(newCom);
			this.addReply();
		},
	},
	mounted() {
		let comments = localStorage.getItem("comments");
		let user = localStorage.getItem("commentUser");
		if (comments) {
			this.comments = JSON.parse(comments);
		}
		if (user) {
			this.user = user;
		} else {
			this.user = "defaultUser";
			localStorage.setItem("commentUser", this.user);
		}
	},
};
</script>
<style>
ul {
	padding-inline-start: 0;
}
</style>

<style scoped>
.comment {
	width: 100%;
	height: 100%;
	padding: 0 1.875rem 0 1.875rem;
	font-size: 14px;
	box-sizing: border-box;
}
.comment .commentsArea {
	width: 100%;
	/* height: 3.125rem; */
	box-sizing: border-box;
}
</style>