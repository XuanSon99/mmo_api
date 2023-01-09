<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Validator;

class AdminController extends Controller
{
    public function index()
    {
        return Admin::orderBy('created_at', 'DESC')->get();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|unique:admins'
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => ["Username đã tồn tại!"]], 400);
        }

        $data = new Admin([
            'username' => $request->username,
            'password' => bcrypt($request->password)
        ]);
        $data->save();

        return response()->json(["status" => true, "message" => ["Thêm thành công!"]], 201);
    }

    public function update(Request $request, Admin $Admin)
    {
        $Admin->update([
            'password' => bcrypt($request->password)
        ]);
        return response()->json(["status" => true], 200);
    }

    public function destroy(Admin $Admin)
    {
        if ($Admin->username == "administrator") {
            return response()->json(["status" => false], 400);
        }
        $Admin->delete();
        return response()->json(["status" => true], 200);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|exists:admins',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => ["Tài khoản không tồn tại!"]], 400);
        }

        $Admin = Admin::where("username", $request->username)->first();

        if (!Hash::check($request->password, $Admin->password)) {
            return response()->json(["status" => false, "message" => ["Mật khẩu không đúng!"]], 400);
        }

        $tokenResult = $Admin->createToken('Personal Access Token');
        $token = $tokenResult->token;
        $token->save();

        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }
}
