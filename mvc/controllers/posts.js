const getPosts = function(req, res) {
    res.render('post_templates/posts', { title: 'All posts' })
}
const getPost = function({ params }, res) {
    res.render('post_templates/post', { title: 'All posts', id: params.postid })
}

module.exports = {
    getPosts,
    getPost
}