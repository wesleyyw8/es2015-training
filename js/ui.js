let ui = {
	renderPosts(posts){
		let elements = posts.map( (post) => {
      let { title, lastReply } = post;
      return articleTemplate(title, lastReply);
    });
    let target = document.querySelector(".container");
    target.innerHTML = elements.join("");
	},
  renderUsers(users){
    let elements = users.map ( (users) => {
      let { name, avatar} = users;
      return userTemplate(name, avatar)
    });
    let target = document.querySelector(".sidebar-content");
    target.innerHTML = elements.join("");
  }
}
function userTemplate(name, avatar){
  let template = `
    <div class='active-avatar'>
      <img width="54" src="assets/images/${avatar}">
      <h5 class='post-author'>${name}</h5>
    </div>
    `;
  return template;
}
function articleTemplate(title, lastReply){
  let template = `
   				<article class='post'>
            <h2 class='post-title'>
              ${title}
            </h2>
            <p class='post-meta'>
              ${lastReply}
            </p>
          </article>`;
  return template;
}
export default ui;