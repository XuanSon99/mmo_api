<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $posts = Post::orderBy('created_at', 'DESC')->paginate(6);
        return response()->json(["status" => true, "data" =>  $this->listPost($posts), "total" => Post::count()], 200);
    }

    public function listPost($posts)
    {
        $data = array();
        foreach ($posts as $post) {
            $list = new \stdClass();

            $author = User::find($post->author_id);
            if (!is_null($author)) $list->author = $author->name;

            $cate = Category::find($post->category_id);
            if (!is_null($cate)) $list->cate_name = $cate->name;

            $list->created_at = $post->created_at;
            $list->image = $post->image;
            $list->slug = $post->slug;
            $list->title = $post->title;
            $list->meta_description = $post->meta_description;
            $list->meta_keywords = $post->meta_keywords;
            $list->seo_title = $post->seo_title;
            $list->id = $post->id;
            array_push($data, $list);
        }
        return $data;
    }

    public function search(Request $request)
    {
        $query = $request->get('query');
        $posts = Post::where('title', 'like', "%{$query}%")
            ->orWhere('excerpt', 'like', "%{$query}%")
            ->orWhere('slug', 'like', "%{$query}%")
            ->paginate(6);
        if (empty($posts[0])) {
            $posts = Post::orderBy('created_at', 'DESC')->paginate(6);
            return response()->json(["status" => true, "data" =>  $data, "total" => Post::where('category_id', $Category->id)->count()], 200);
        }
        return response()->json(["status" => true, "data" =>  $this->listPost($posts)], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'slug' => 'required|unique:posts'
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => ["Username đã tồn tại!"]], 400);
        }

        $image = $request->file('image')->store('public/images');

        $data = new Post([
            'author_id' => 1,
            'category_id' => $request->category_id,
            'title' => $request->title,
            'body' => $request->body,
            'slug' => $request->slug,
            'image' => str_replace("public", "", $image),
            'featured' => $request->featured,
            'status' => "PUBLISHED",
        ]);
        $data->save();

        return response()->json(["status" => true, "message" => ["Thêm thành công!"]], 201);
    }
    public function uploadImage(Request $request)
    {
        $image = $request->file('image')->store('public/images');
        return str_replace("public", "", $image);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        $cate = Category::find($post->category_id);
        $author = User::find($post->author_id);
        $list = new \stdClass();

        if (!is_null($cate)) {
            $list->category = $cate->slug;
            $list->cate_name = $cate->name;
        }
        if (!is_null($author)) {
            $list->author = $author->name;
        }

        $list->created_at = $post->created_at;
        $list->category_id = $post->category_id;
        $list->body = $post->body;
        $list->excerpt = $post->excerpt;
        $list->image = $post->image;
        $list->id = $post->id;
        $list->slug = $post->slug;
        $list->status = $post->status;
        $list->title = $post->title;
        $list->featured = $post->featured;
        $list->meta_description = $post->meta_description;
        $list->meta_keywords = $post->meta_keywords;
        $list->seo_title = $post->seo_title;
        return $list;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        if ($request->file('image')) {
            $image = $request->file('image')->store('public/images');
            $post['image'] = str_replace("public", "", $image);
        }
        
        $post->update($request->except('image'));
        return response()->json(["status" => true], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json(["status" => true], 200);
    }
}
