<?php

namespace App\Http\Controllers;

use App\Models\Voting;
use Illuminate\Http\Request;
use Validator;

class VotingController extends Controller
{
    public function getVotedList(Request $request)
    {
        $username = $request->route('username');
        return Voting::orderBy('created_at', 'DESC')->where('username', $username)->first();
    }

    public function store(Request $request)
    {
        $data = new Voting([
            'username' => $request->username,
            'start_time' => $request->start_time,
            'voted_user' => $request->voted_user,
            'percent' => $request->percent
        ]);
        $data->save();

        return response()->json(["status" => true, "message" => ["Thêm thành công!"]], 201);
    }

    public function update(Request $request, Voting $Voting)
    {
        // $Voting->update($request->all());
        Voting::orderBy('created_at', 'DESC')->where('username', $Voting->username)->first()->update($request->all());
        return response()->json(["status" => true], 200);
    }

    public function destroy(Voting $Voting)
    {
        $Voting->delete();
        return response()->json(["status" => true], 200);
    }
}
