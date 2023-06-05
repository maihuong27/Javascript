var users = [
    {
        id: 1,
        name: 'Mai Huong'
    },
    {
        id: 2,
        name: "Son Dang"
    },
    {
        id: 3,
        name: 'Hung Dam'
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: "Chua ra video a anh?"
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi!!'
    }
]

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        }, 1000)
    })
}

function getUsersById(userIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id);
        })
        setTimeout(function(){
            resolve(result);
        }, 1000);
    })
}

getComments()
    .then(function(comments){
        var userIds = comments.map((comment) => comment.user_id)
        //console.log(userIds);

        return getUsersById(userIds)
        .then(function(users){
            return {
                users: users,
                comments: comments
            };
        })
    })
    .then(function(data){
        var commentBlock = document.getElementById("comment__block");
        
        var html = '';

        data.comments.forEach(comment => {
            var user = data.users.find((user) => user.id === comment.id);
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    })



//Fetch
var post = 'https://jsonplaceholder.typicode.com/posts';

fetch(post)
    .then(response => response.json())
    .then(function(posts){
        var html = '';
        var postBlock = document.getElementById('post__block');
        html = posts.map(function(post){
           return `<li>
                <h2>${post.title}</h2>
                <div>${post.body}</div>
            </li>`
        });
        html = html.join('');

        postBlock.innerHTML = html;
    })
    

