(function(){
    const posts = [
        {
            id: "1",
            description: "Very beautiful house",
            date: new Date("2018-02-17T13:11:00"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://i.imgur.com/rUjL28x.jpg",
            hashtags: "#BSU"
        },
        {
            id: "2",
            description: "It's me!",
            date: new Date("2018-04-01T22:01:01"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://pp.userapi.com/c844418/v844418988/1590af/t1gOJnsPT-o.jpg",
            hashtags: "#BSU"
        },
        {
            id: "3",
            description: "Very Beautiful hause too!",
            date: new Date("2018-01-29T13:11:00"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://i.imgur.com/J4BevtL.jpg",
            hashtags: "#BSU"
        },
        {
            id: "4",
            description: "",
            date: new Date("2017-02-17T13:11:00"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://i.imgur.com/ltu5QKR.png",
            hashtags: ""
        },
        {
            id: "5",
            description: "He wants candy!",
            date: new Date("2017-02-17T13:11:21"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://i.imgur.com/vpMrYuL.png",
            hashtags: ""
        },
        {
            id: "6",
            description: "Very beautiful house",
            date: new Date("2018-02-17T13:11:00"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://i.imgur.com/rUjL28x.jpg",
            hashtags: "#BSU"
        },
        {
            id: "7",
            description: "It's me!",
            date: new Date("2018-04-01T22:01:01"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://pp.userapi.com/c844418/v844418988/1590af/t1gOJnsPT-o.jpg",
            hashtags: "#BSU"
        },
        {
            id: "8",
            description: "Very Beautiful hause too!",
            date: new Date("2018-01-29T13:11:00"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://i.imgur.com/J4BevtL.jpg",
            hashtags: "#BSU"
        },
        {
            id: "9",
            description: "",
            date: new Date("2017-02-17T13:11:00"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://i.imgur.com/ltu5QKR.png",
            hashtags: ""
        },
        {
            id: "10",
            description: "He wants candy!",
            date: new Date("2017-02-17T13:11:21"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://i.imgur.com/vpMrYuL.png",
            hashtags: ""
        },
        {
            id: "11",
            description: "Very beautiful house",
            date: new Date("2018-02-17T13:11:00"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://i.imgur.com/rUjL28x.jpg",
            hashtags: "#BSU"
        },
        {
            id: "12",
            description: "It's me!",
            date: new Date("2018-04-01T22:01:01"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://pp.userapi.com/c844418/v844418988/1590af/t1gOJnsPT-o.jpg",
            hashtags: "#BSU"
        },
        {
            id: "13",
            description: "Very Beautiful hause too!",
            date: new Date("2018-01-29T13:11:00"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://i.imgur.com/J4BevtL.jpg",
            hashtags: "#BSU"
        },
        {
            id: "14",
            description: "",
            date: new Date("2017-02-17T13:11:00"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://i.imgur.com/ltu5QKR.png",
            hashtags: ""
        },
        {
            id: "15",
            description: "He wants candy!",
            date: new Date("2017-02-17T13:11:21"),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "https://i.imgur.com/vpMrYuL.png",
            hashtags: ""
        },
    ]
    let from = 0;
    let to = 5;
    const heights_col = [];
    heights_col[0] = document.body.getElementsByClassName("column_feed")[0].clientHeight;
    heights_col[1] = document.body.getElementsByClassName("column_feed")[1].clientHeight;
    heights_col[2] = document.body.getElementsByClassName("column_feed")[2].clientHeight;
    load(from, to);
    function load(){  
        if (to >= posts.length){
            const temp = document.getElementsByClassName("button_load_more")[0];
            temp.style.display = "none";
            to = posts.length;
        }
        for (let i = from; i < to; i++){
            let value = posts[i];
            const post = document.createElement("div");
            post.classList.add("post");
            post.id = value.id;

            const inform = document.createElement("div");
            inform.classList.add("prof_information");

            const img_prof = document.createElement("img");
            img_prof.classList.add("img_small");
            img_prof.src = "https://i.imgur.com/fSRvMf1.jpg?1";

            const prof_date = document.createElement("div");
            prof_date.classList.add("profname_date");
            const name = document.createElement("a");
            name.classList.add("link_prof");
            name.href = value.author_link;
            name.innerText = value.author;
            const date = document.createElement("span");
            date.classList.add("date_post");
            date.innerText = value.date.toString();
            prof_date.appendChild(name);
            prof_date.appendChild(date);

            const editBut = document.createElement("button");
            editBut.classList.add("button_edit");
            editBut.innerText = "...";
            editBut.title = "Edit";
            editBut.onclick = function(){
                img_window(value.id, "edit");
            }
            inform.appendChild(img_prof);
            inform.appendChild(prof_date);
            inform.appendChild(editBut);

            const img = document.createElement("img");
            img.classList.add("img_feed");
            img.src = value.link;
            img.onclick = function(){
                img_window(value.id);
            }

            const desc_like = document.createElement("div");
            desc_like.classList.add("post_text_like");
            const like = document.createElement("button");
            like.classList.add("button_like");
            const img_like = document.createElement("img");
            img_like.classList.add("img_like");
            img_like.src = "https://i.imgur.com/5rN9V2h.jpg";
            like.appendChild(img_like);
            const text = document.createElement("span");
            text.classList.add("text");
            text.innerText = value.description;
            desc_like.appendChild(like);
            desc_like.appendChild(text);

            post.appendChild(inform);
            post.appendChild(img);
            post.appendChild(desc_like);

            const shortest_col = get_shortest_col(heights_col);
            heights_col[shortest_col] += 1;
            const col = document.body.getElementsByClassName("column_feed")[shortest_col];
            
            col.appendChild(post);
        }
        from = from + 5;
        to = to + 5;
    }
    const but_load_more = document.getElementsByClassName("button_load_more")[0];
    but_load_more.onclick = function(){
        load();
    }
    function get_shortest_col(col_heights){
        let min = 0;
        col_heights.forEach(function(value, i){
            if (value < col_heights[min]){
                min = i;
            }
        });
        return min;
    }

    function is_valid(post){
        if (post.id != null &&
            post.link != null &&
            post.date != null &&
            post.author != null &&
            post.author_link != null){
                return true;
        }
        return false; 
    }

    function img_window(id, str){
        const black = document.getElementsByClassName("black_window")[0];
        black.style.display = "block";
        const black_inner = black.getElementsByClassName("black_window_inner")[0];

        const post = document.createElement("div");
        post.classList.add("post_big");
        const img = document.createElement("img");
        img.classList.add("img_big");
        if (str == "new"){
            img.style.background = "lightgreen";
        }
        else{
            img.src = get_post(id).link;
        }
        img.style.maxHeight = "700px";
        post.appendChild(img);
        
        const desc_like = document.createElement("div");
        desc_like.classList.add("desc_like");
        const like = document.createElement("button");
        like.type = "button";                
        like.classList.add("button_like");
        const img_like = document.createElement("img");
        img_like.classList.add("img_like");
        img_like.src = "https://i.imgur.com/5rN9V2h.jpg";
        like.appendChild(img_like);
        let text;
        if (str == "edit"){
            text = document.createElement("input");
            text.classList.add("edit_input");
            text.value = get_post(id).description;
        }
        else if(str == "new"){
            text = document.createElement("input");
            text.classList.add("edit_input");
            text.placeholder = "Write the description";
        }
        else{
            text = document.createElement("span");
            text.classList.add("text_big_photo");
            text.innerText = get_post(id).description;
        }
        desc_like.appendChild(like);
        desc_like.appendChild(text);
        if (str == "edit" || str == "new"){
            text = document.createElement("input");
            text.classList.add("edit_hashtags");
            if (str == "edit"){
                text.value = get_post(id).hashtags;
            }
            else{
                text.placeholder = "Write the hashtags (not displayed)";
            }
            desc_like.appendChild(text);
            const but = document.createElement("button");
            but.type = "button";
            but.classList.add("button");
            but.innerHTML = "Save";
            if (str == "edit"){
                but.onclick = function(){
                    const text = document.getElementsByClassName("edit_input")[0];
                    const hashtags = document.getElementsByClassName("edit_hashtags")[0];
                    edit_post(id, text.value, hashtags.value);
                }
            }
            else{
                but.onclick = function(){
                    const text = document.getElementsByClassName("edit_input")[0];
                    const hashtags = document.getElementsByClassName("edit_hashtags")[0];
                    add_post(posts.length, text, hashtags);
                }
            }
            desc_like.appendChild(but);
        }
        post.appendChild(desc_like);
        black_inner.appendChild(post);
        const close = document.createElement("button");
        close.classList.add("button_close");
        close.type = "button";
        close.onclick = new_window_close;
        const img_close = document.createElement("img");
        img_close.classList.add("img_small");
        img_close.src = "https://i.imgur.com/u2zrMTr.jpg";
        close.appendChild(img_close);
        black_inner.appendChild(close);
    }
    
    function new_window_close(){
        const black = document.getElementsByClassName("black_window")[0];
        black.style.display = "none";
    }
    function edit_post(id, text, hashtags){
        posts.forEach(function(value){
            if (value.id == id){
                let post = document.getElementById(id);
                post = post.getElementsByClassName("post_text_like")[0];
                post = post.getElementsByClassName("text")[0];
                post.innerHTML = text;
                post.description = text;
                value.hashtags = hashtags;
            }
        });
    }  
    function get_post(id){
        let temp;
        posts.forEach(function(value){
            if (value.id == id){
                temp = value;
            }
        });
        return temp;
    }
    
    let add = document.getElementsByClassName("button_new_post")[0];
    add.onclick = function(){
        img_window(posts.length, "new");
    }
    function add_post(i, text, h){
        let post = {
            id: i,
            description: text,
            date: new Date(),
            author: "Tonia Ivanova",
            author_link: "https://vk.com/tonia.ivanova",
            link: "",
            hashtags: h
        }
        if (is_valid(post)){
            posts.splice(posts.length, 0, post);
            return true;
        }
        return false;
    }
    function remove_post(id){
        posts.forEach(function(value) {
            if (value.id == id){
                delete posts[value];
            }
        });
    }
})();