<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use Validator;

class GroupController extends Controller
{
    public function index()
    {
        return Group::orderBy('created_at', 'DESC')->get();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'group_id' => 'required|unique:groups'
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => ["Group đã tồn tại!"]], 400);
        }

        $data = new Group([
            'name' => $request->name,
            'username' => $request->username,
            'group_id' => $request->group_id
        ]);
        $data->save();

        return response()->json(["status" => true, "message" => ["Thêm thành công!"]], 201);
    }

    public function update(Request $request, Group $Group)
    {
        return response()->json(["status" => true], 200);
    }

    public function destroy(Group $Group)
    {
        $Group->delete();
        return response()->json(["status" => true], 200);
    }
}
