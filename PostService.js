import Post from "./Post.js";

/*
Разделение логики приложения на ещё несколько маленьких кусочков кода
и да, здесь нет работы с БД, a только с Постом
 */
class PostService {
    async create(post, picture){
            const createdPost = await Post.create(post);
            return createdPost;
    }

    async getAll(){
            const posts = await Post.find();
            return posts;
    }

    async getOne(id){
        if(!id){
            throw new Error('Не указан id');
        }
        const posts = await Post.findById(id);
        return posts;
    }

    async update(post){
            if(!post._id) {
                throw new Error('Не указан id');
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
            return updatedPost;

    }
    async delete(id){
            if(!id){
                throw new Error('Не указан id');
            }
            const post = await Post.findByIdAndDelete(id);
            return post;
    }
}

export default new PostService();