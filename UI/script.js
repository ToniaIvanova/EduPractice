(function(){
    class PostsList{
        constructor(){
            this.posts = [];
        }
        addAll(p){
            let not_valid = [];
            p.forEach((value) => {
                if (this.is_valid(value)){
                    this.posts.splice(this.posts.length, 0, value);
                }
                else{
                    not_valid.splice(not_valid, 0, value);
                }
            });
            return not_valid;
        }
        load(){  
            view.load_more_not_valid();
            for (let i = from; i < to; i++){
                let value = this.posts[i];
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
                editBut.onclick = () => {
                    view.black_window_go(value.id, "edit");
                }
                if (login === "none"){
                    editBut.style.display = "none";
                }
                inform.appendChild(img_prof);
                inform.appendChild(prof_date);
                inform.appendChild(editBut);

                const img = document.createElement("img");
                img.classList.add("img_feed");
                img.src = value.link;
                img.onclick = () => {
                    view.black_window_go(value.id);
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

                const shortest_col = this.get_shortest_col(heights_col);
                heights_col[shortest_col] += 1;
                const col = document.body.getElementsByClassName("column_feed")[shortest_col];
                
                col.appendChild(post);
            }
            from = to;
            to += 5;
        }
        get_shortest_col(col_heights){
            let min = 0;
            col_heights.forEach((value, i) => {
                if (value < col_heights[min]){
                    min = i;
                }
            });
            return min;
        }
        is_valid(post){
            if (post.id != null &&
                post.link != null &&
                post.date != null &&
                post.author != null &&
                post.author_link != null){
                    return true;
            }
            return false; 
        }
        edit_post(id, text, hashtags){
            this.posts.forEach((value) => {
                if (value.id === id){
                    let post = document.getElementById(id);
                    post = post.getElementsByClassName("post_text_like")[0];
                    post = post.getElementsByClassName("text")[0];
                    post.innerText = text;
                    value.description = text;
                    value.hashtags = hashtags;
                }
            });
            
            localStorage["data"] = JSON.stringify(this);
        }  
        get_post(id){
            let temp;
            this.posts.forEach((value) => {
                if (value.id === id){
                    temp = value;
                }
            });
            return temp;
        }
        add_post(i, text, h){
            let post = {
                id: i,
                description: text,
                date: new Date(),
                author: "Tonia Ivanova",
                author_link: "https://vk.com/tonia.ivanova",
                link: "",
                hashtags: h
            }
            if (this.is_valid(post)){
                this.posts.splice(this.posts.length, 0, post);
                localStorage["data"] = JSON.stringify(this);
                return true;
            }
            return false;
        }
        remove_post(id){
            let new_posts = [];
            this.posts.forEach((value) => {
                if (value.id != id){
                    new_posts.push(value);
                }
            });
            from = 0;
            to = 5;
            if (this.posts.length > to){
                view.load_more_valid();
            }
            
            this.clear();
            this.addAll(new_posts);
            localStorage["data"] = JSON.stringify(this);

            view.new_feed();
            view.black_window_close();
            this.load();

        }
        clear(){
            this.posts = [];
        }
    };

    class View{
        header(){
            const head = document.getElementsByClassName("header")[0];

            const port_name = document.createElement("img");
            port_name.classList.add("portal_name");
            port_name.src = "https://i.imgur.com/ux9THml.png";
            port_name.alt = "TONE";

            const search = document.createElement("div");
            search.classList.add("search");
            const madnifier = document.createElement("img");
            madnifier.classList.add("madnifier");
            madnifier.src = "https://i.imgur.com/d6tEYbU.png";
            const search_fild = document.createElement("input");
            search_fild.classList.add("search_fild");
            search_fild.placeholder = "Search #BSU";
            search.appendChild(madnifier);
            search.appendChild(search_fild);

            const but_sign = document.createElement("button");
            but_sign.classList.add("button", "button_sign");
            but_sign.type = "button";
            but_sign.innerText = "Sign In";
            const but_login = document.createElement("button");
            but_login.classList.add("button", "button_log");
            but_login.type = "button";
            but_login.innerText = "Log In";

            const profile = document.createElement("div");
            profile.classList.add("profile");
            const img_prof = document.createElement("img");
            img_prof.classList.add("prof_login_img", "img_small");
            img_prof.src = "https://i.imgur.com/fSRvMf1.jpg?1";
            
            const name_logout = document.createElement("div");
            name_logout.classList.add("name_logout");
            const link_prof = document.createElement("a");
            link_prof.classList.add("link_prof");
            link_prof.href = "https://vk.com/tonia.ivanova";
            link_prof.innerText = "Tonia Ivanova";
            const but_logout = document.createElement("button");
            but_logout.classList.add("button", "button_logout");
            but_logout.type = "button";
            but_logout.innerText = "Log Out";
            name_logout.appendChild(link_prof);
            name_logout.appendChild(but_logout);

            const but_new = document.createElement("button");
            but_new.classList.add("button", "button_new_post");
            but_new.type = "button";
            but_new.innerText = "New Post";

            profile.appendChild(img_prof);
            profile.appendChild(name_logout);
            profile.appendChild(but_new);

            head.appendChild(port_name);
            head.appendChild(search);
            head.appendChild(but_sign);
            head.appendChild(but_login);
            head.appendChild(profile);
        }
        new_feed(){
            const feed = document.getElementsByClassName("column_feed");
            [0, 1, 2].forEach((i) => {
                feed[i].innerHTML = null;
                heights_col[i] = 0;
            });
        }
        black_window_close(){
            const black = document.getElementsByClassName("black_window")[0];
            black.style.display = "none";
        }
        black_window_go(id, what){
            const black = document.getElementsByClassName("black_window")[0];
            black.style.display = "block";
            const black_inner = black.getElementsByClassName("black_window_inner")[0];
            black_inner.innerHTML = "";
            
            const post = document.createElement("div");
            post.classList.add("post_big");
            switch(what){
                case "edit":{
                    this.view_edit(id, post);
                    break;
                }
                case "new":{
                    this.view_new(post);
                    break;
                }
                default:{
                    this.view_photo(id, post);
                }
            }
            black_inner.appendChild(post);
            const close = document.createElement("button");
            close.classList.add("button_close");
            close.type = "button";
            close.onclick = view.black_window_close;
            const img_close = document.createElement("img");
            img_close.classList.add("img_small");
            img_close.src = "https://i.imgur.com/u2zrMTr.jpg";
            close.appendChild(img_close);
            black_inner.appendChild(close);
        }
        view_photo(id, post){
            const img = document.createElement("img");
            img.classList.add("img_big");
            img.src = pos.get_post(id).link;
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
            let text = document.createElement("span");
            text.classList.add("text_big_photo");
            text.innerText = pos.get_post(id).description;

            desc_like.appendChild(like);
            desc_like.appendChild(text);

            post.appendChild(desc_like);
        }
        view_edit(id, post){
            const img = document.createElement("img");
            img.classList.add("img_big");
            img.src = pos.get_post(id).link;
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
            const text = document.createElement("input");
            text.classList.add("edit_input");
            text.value = pos.get_post(id).description;

            desc_like.appendChild(like);
            desc_like.appendChild(text);

            const hashtags = document.createElement("input");
            hashtags.classList.add("edit_hashtags");
            hashtags.value = pos.get_post(id).hashtags;
            desc_like.appendChild(hashtags);

            const but_del = document.createElement("button");
            but_del.classList.add("button", "button_delete");  
            but_del.innerText = "Delete";
            but_del.type = "button";
            but_del.onclick = () => {
                pos.remove_post(id);
            }
            desc_like.appendChild(but_del);   
            
            const but = document.createElement("button");
            but.classList.add("button"); 
            but.type = "button";
            but.innerHTML = "Save";
            but.onclick = () => {
                const text = document.getElementsByClassName("edit_input")[0];
                const hashtags = document.getElementsByClassName("edit_hashtags")[0];
                pos.edit_post(id, text.value, hashtags.value);
                this.black_window_close();
            }
            desc_like.appendChild(but);

            post.appendChild(desc_like);
        }
        view_new(post){
            const img = document.createElement("img");
            img.classList.add("img_big");
            img.style.background = "lightgreen";
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
            let text = document.createElement("input");
            text.classList.add("edit_input");
            text.placeholder = "Write the description";

            desc_like.appendChild(like);
            desc_like.appendChild(text);

            text = document.createElement("input");
            text.classList.add("edit_hashtags");
            text.placeholder = "Write the hashtags (not displayed)";
            desc_like.appendChild(text);

            const but = document.createElement("button");
            but.classList.add("button"); 
            but.type = "button";
            but.innerHTML = "Save";
            but.onclick = () => {
                const text = document.getElementsByClassName("edit_input")[0].value;
                const hashtags = document.getElementsByClassName("edit_hashtags")[0].value;
                pos.add_post(this.posts.length, text, hashtags);
                this.load_more_valid();
                this.black_window_close();
            }
            desc_like.appendChild(but);

            post.appendChild(desc_like);
        }
        load_more_valid(){
            const but_load = document.getElementsByClassName("button_load_more")[0];
            but_load.style.display = "block";
        }
        load_more_not_valid(){
            const temp = document.getElementsByClassName("button_load_more")[0];
            if (to >= pos.posts.length){
                temp.style.display = "none";
                to = pos.posts.length;
            }
        }
    }
    let view = new View();
    view.header();
    

    const p = [
        {
            "id": "1",
            "description": "Very beautiful house",
            "date": new Date("2018-02-17T13:11:00"),
            "author": "Tonia Ivanova",
            "author_link": "https://vk.com/tonia.ivanova",
            "link": "https://i.imgur.com/rUjL28x.jpg",
            "hashtags": "#BSU"
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
    ];
    let pos = new PostsList();
    let json_posts = localStorage.getItem("data");
    if (json_posts === null){
        pos.addAll(p);
        localStorage.setItem("data", JSON.stringify(pos));
    }
    else{
        pos.addAll(JSON.parse(json_posts).posts);
    }

    let login;
    let json_login = localStorage.getItem("login");
    if (json_login === null || json_login === "none"){
        document.getElementsByClassName("button_log")[0].style.display = "block"; 
        document.getElementsByClassName("button_sign")[0].style.display = "block"; 
        document.getElementsByClassName("profile")[0].style.display = "none"; 
        login = "none";
    }
    else{
        login = json_login;
    }
    
    let from = 0;
    let to = 5;
    const heights_col = [];
    heights_col[0] = document.body.getElementsByClassName("column_feed")[0].clientHeight;
    heights_col[1] = document.body.getElementsByClassName("column_feed")[1].clientHeight;
    heights_col[2] = document.body.getElementsByClassName("column_feed")[2].clientHeight;
    pos.load();
    
    const but_load_more = document.getElementsByClassName("button_load_more")[0];
    but_load_more.onclick = () => {
        pos.load();
    }

    let add = document.getElementsByClassName("button_new_post")[0];
    add.onclick = () => {
        view.black_window_go(pos.length, "new");
    }

    let sign_in = document.getElementsByClassName("button_sign")[0];
    sign_in.onclick = () => {

    }

    let log_in = document.getElementsByClassName("button_log")[0];
    log_in.onclick = () => {
        document.getElementsByClassName("button_log")[0].style.display = "none"; 
        document.getElementsByClassName("button_sign")[0].style.display = "none"; 
        document.getElementsByClassName("profile")[0].style.display = "flex"; 
        login = "Tonia Ivanova";
        localStorage["login"] = "Tonia Ivanova";
        from = 0;
        to = 5;
        view.new_feed();
        pos.load();
    }

    let log_out = document.getElementsByClassName("button_logout")[0];
    log_out.onclick = () => {
        document.getElementsByClassName("button_log")[0].style.display = "block"; 
        document.getElementsByClassName("button_sign")[0].style.display = "block"; 
        document.getElementsByClassName("profile")[0].style.display = "none"; 
        login = "none";
        localStorage["login"] = "none";
        from = 0;
        to = 5;
        view.new_feed();
        pos.load();
    }
})();