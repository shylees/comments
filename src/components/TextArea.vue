<template>
	<div class="textarea">
		<div class="area">
			<textarea
				class="addCommentArea"
				ref="addCommentArea"
				cols="50"
				rows="8"
			></textarea>
		</div>
		<div class="btn">
			<input type="button" value="add Comment" @click="addComment" />
		</div>
	</div>
</template>

<script>
export default {
	name: "TextArea",
	data() {
		return {
			user: "",
		};
	},
	methods: {
		addComment() {
			let addval = this.$refs.addCommentArea.value.trim();
			if (addval != "") {
				let com = {
					content: addval,
					time: new Date().getTime(),
					user: this.user,
					triangle: "up",
					reply: false,
					children: [],
				};
				this.$emit("onAddComment", com);
				this.$refs.addCommentArea.value = "";
			}
		},
	},
	mounted() {
		this.user = "shylees";
	},
};
</script>

<style scoped>
.textarea {
	/* width: 100%; */
	height: auto;
	padding: 1.875rem;
	box-sizing: inherit;
}
.textarea .area {
	box-sizing: border-box;
}
.textarea .addCommentArea {
	padding: 0.625rem;
	font-size: 0.875rem;
}
.btn {
	margin-top: 0.9375rem;
	box-sizing: border-box;
}
.btn > input[type="button"] {
	background-color: #fff;
	outline: none;
	border: 1px solid #000;
	border-radius: 0.3125rem;
	padding: 2px 0.3125rem 0;
	cursor: pointer;
}
</style>