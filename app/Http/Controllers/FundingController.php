<?php

namespace App\Http\Controllers;

use App\Models\Funding;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Validator;

class FundingController extends Controller
{
    public function index()
    {
        return Funding::orderBy('created_at', 'DESC')->get();
    }

    public function store(Request $request)
    {
        $username = Funding::where('username', $request->username)->first();
        $chat_id = Funding::where('chat_id', $request->chat_id)->first();

        if($username && $chat_id){
            return;
        }

        $data = new Funding([
            'username' => $request->username,
            'chat_id' => $request->chat_id,
        ]);
        $data->save();
    }

    public function update(Request $request, Funding $Funding)
    {
        $Funding->update($request->all());
        return response()->json(["status" => true], 200);
    }
}
