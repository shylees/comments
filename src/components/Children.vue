<template>
	<ul class="item">
		<li class="comments-item" v-for="item in childrenComments" :key="item.id">
			<p class="message">
				<span>{{ item.user }}</span>
				<span>{{ getTimeToNow(item.time) }} ago </span>
				<span
					ref="foldBtn"
					class="foldBtn"
					@click="item.triangle = fold(item.triangle)"
				>
					[{{ item.triangle === "up" ? "-" : "+" }}]
				</span>
			</p>
			<div class="content">{{ item.content }}</div>
			<a class="reply" @click="item.reply = reply(item.reply)">
				{{ item.reply ? "close" : "reply" }}
			</a>

			<div v-if="item.reply">
				<textarea
					class="editReply"
					ref="editReply"
					rows="2"
					cols="40"
				></textarea>
				<input
					class="btnReply"
					type="button"
					value="add reply"
					@click="addReply(item)"
				/>
			</div>
			<div
				class="children"
				v-show="item.triangle == 'up'"
				v-if="item.children.length > 0"
			>
				<Children :childrenComments="item.children"></Children>
			</div>
			<div v-show="item.children.length > 0 && item.triangle != 'up'">...</div>
		</li>
	</ul>
</template>

<script>
export default {
	name: "Children",
	props: ["childrenComments"],
	data() {
		return {
			user: "",
		};
	},

	methods: {
		setStorage() {
			localStorage.setItem("comments", JSON.stringify(this.comments));
		},
		getTimeToNow(pre) {
			let TimeStamp = new Date(new Date() - new Date(pre));
			if (TimeStamp.getFullYear() - 1970 != 0) {
				return TimeStamp.getFullYear() - 1970 + " years";
			} else if (TimeStamp.getMonth() != 0) {
				return TimeStamp.getMonth() + " months";
			} else if (TimeStamp.getDate() - 1 != 0) {
				return TimeStamp.getDate() + " days";
			} else if (TimeStamp.getHours() - 8 != 0) {
				return TimeStamp.getHours() - 8 + " hours";
			} else if (TimeStamp.getMinutes() != 0) {
				return TimeStamp.getMinutes() + " minutes";
			} else if (TimeStamp.getSeconds() != 0) {
				return TimeStamp.getSeconds() + " Seconds";
			} else {
				return "0 Seconds";
			}
		},
		fold(triangle) {
			return triangle == "up" ? "down" : "up";
		},
		reply(args) {
			return !args;
		},
		addReply(item) {
			console.log(this.$refs.editReply);
			let replyVal = this.$refs.editReply[0].value.trim();
			console.log(replyVal);
			if (replyVal) {
				let reply = {
					content: replyVal,
					time: new Date().getTime(),
					user: this.user,
					triangle: "up",
					reply: false,
					children: [],
				};

				reply.id = item.children.length;
				item.children.unshift(reply);
				this.$refs.editReply[0].value = "";
				item.reply = false;

				this.$emit("addReply");
			}
		},
	},
	mounted() {
		this.user = localStorage.getItem("commentUser");
	},
};
</script>
<style>
.reply {
	text-decoration: underline;
	cursor: pointer;
	display: block;
}
</style>
<style scoped>
.comments-item .message {
	font-size: 13px;
	color: #7a7a7a;
	position: relative;
	box-sizing: border-box;
	margin-bottom: 0.3125rem;
}
.children li {
	padding-left: 1.875rem;
}
.triangle {
	width: 0;
	height: 0px;
	display: inline-block;
	border: 0.3125rem #8e8e8e solid;
	border-top-color: transparent;
	border-left-color: transparent;
	border-right-color: transparent;
	position: absolute;
	top: 0.25rem;
	left: -0.8125rem;
	transition: all 0.3s;
}
.comments-item .message .down {
	border-top-color: #8e8e8e;
	border-bottom: transparent;
	top: 8px;
}
.comments-item .message .foldBtn {
	cursor: pointer;
}

.editReply {
	padding: 0.625rem;
}

input[type="button"] {
	background-color: #fff;
	outline: none;
	border: 1px solid #000;
	border-radius: 0.3125rem;
	padding: 2px 0.3125rem 0;
	cursor: pointer;
}
</style>