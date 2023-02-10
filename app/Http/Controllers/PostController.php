<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $posts =  Post::orderBy('created_at', 'DESC')->paginate(6);
        return $this->listPost($posts);
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
            return response()->json(["status" => false, "data" =>  $this->listPost($posts)], 200);
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
        //
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
        $list->body = $post->body;
        $list->excerpt = $post->excerpt;
        $list->image = $post->image;
        $list->id = $post->id;
        $list->slug = $post->slug;
        $list->status = $post->status;
        $list->title = $post->title;
        $list->featured = $post->featured;
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}