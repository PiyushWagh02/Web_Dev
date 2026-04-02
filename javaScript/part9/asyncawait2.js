function fetchPostData(){
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve("Post Data fetched")

        }, 2000);
    })
}


function fetchCommentData(){
     return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve("comment data fetched.")

        }, 3000);
    }) 
}


async function getBlogData() {
    try{
        console.log("Fetching blog data");
        // const blogdata=await fetchPostData()
        // const commentdata=await fetchCommentData()
        const [postData,CommentData]=await Promise.all([fetchPostData(),fetchCommentData()]);




           console.log(postData)
           console.log(CommentData)
        console.log("Fetch complete")
    }
    catch(error)
    {console.error("Error fetching blog data",error);}
}

getBlogData();

