/*
Write a function groupByPost(comments) that returns an object grouping comments by postId:
const comments = [
    { postId: 1, text: 'Comment 1' },
    { postId: 2, text: 'Comment 2' },
    { postId: 1, text: 'Comment 3' },
]

{
1 :["Greet Post!", "Very helpfull"],
2 :["Thanks for sharing!"]
}
*/

const comments = [
    { postId: 1, text: 'Greet Post!' },
    { postId: 2, text: 'Thanks for sharing!' },
    { postId: 1, text: 'Very helpfull' },
    { postId: 3, text: 'Awesome bruh...!' },
];

function groupByPost(comments){
    let groupedComments = {}

    comments.forEach(element => {
        if (groupedComments.hasOwnProperty((element.postId))){
            groupedComments[element.postId].push(element.text)
        }else{
            groupedComments[element.postId] = [element.text]
        }
    });
    console.log(groupedComments)

}

groupByPost(comments)