//정규표현식
//const re = /표현식작성/
//const re2 = new RegExp(표현식작성)
//path : /
//^ ---> 문자의 시작    $ ---> 문자의 끝    ^/$
// /shop

import Main from "../pages/Main.js";
import Post from "../pages/Post.js";
import Shop from "../pages/Shop.js";

// ^\/post\/[\w]+$/ ---> /post/dd   /post/d
export const routes = [
    {path: /^\/$/, element: Main},
            // /으로 시작하고 끝 path : /
    {path: /^\/post\/[\w]+$/, element: Post},
            // /post/dd   /post/d
    {path: /^\//, element: Shop},
            // /으로 시작 /shop
]